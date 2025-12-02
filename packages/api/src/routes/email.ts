import { SendEmailCommand } from '@aws-sdk/client-ses';
import { error, info } from '@goldstack/utils-log';
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import { connect, getFromDomain } from 'email-send';
import { withCors } from '../middleware/withCors';

type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

/**
 * Interface for email requests
 */
export interface EmailRequest {
  /** Message content */
  message: string;
  /** Name of the sender */
  name: string;
  /** Email of the sender */
  email: string;
  /** Optional phone number */
  phone?: string;
  /** Optional title for the email */
  title?: string;
  recaptchaToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: ProxyHandler = withCors(async (event, context) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: 'Body expected',
    };
  }

  const request: EmailRequest = JSON.parse(event.body);

  const ses = await connect();

  const clientIp = event.requestContext.http.sourceIp;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return {
      statusCode: 500,
      body: 'Secret key env variable not defined',
    };
  }

  // https://developers.google.com/recaptcha/docs/verify
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${request.recaptchaToken}&remoteip=${clientIp}`;

  const res = await fetch(url, {
    method: 'post',
  });

  if (res.status !== 200) {
    return {
      statusCode: 404,
      body: 'Cannot verify recaptcha',
    };
  }

  const recaptchaResponse = await res.json();

  if (!recaptchaResponse.success) {
    error(`Recaptacha verification failed: ${JSON.stringify(recaptchaResponse)}`, {
      response: recaptchaResponse,
      request: request,
    });
    return {
      statusCode: 404,
      body: `Recaptcha invalid. Error code: ${recaptchaResponse.error_codes}`,
    };
  }

  info(`Email will be sent. Recaptacha verification passed.`, {
    response: recaptchaResponse,
    request: request,
  });

  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: 'Contact email not configured',
    };
  }

  if (!process.env.CONTACT_EMAIL_SHALLY) {
    return {
      statusCode: 500,
      body: 'Contact email Shally not configured',
    };
  }
  // await ses.send(
  //   new SendEmailCommand({
  //     Destination: {
  //       ToAddresses: [request.email],
  //       BccAddresses: [process.env.CONTACT_EMAIL],
  //     },
  //     Message: {
  //       Subject: {
  //         Charset: 'UTF-8',
  //         Data: 'Your Contact Form Submission to Pureleap.com',
  //       },
  //       Body: {
  //         Text: {
  //           Charset: 'UTF-8',
  //           Data: `Thank you for contacting Pureleap.\n\nWe have received your message. We will get back to you in the next few days.\n\nThanks, Shally and Max`,
  //         },
  //       },
  //     },
  //     Source: `no-reply@${await getFromDomain()}`,
  //   }),
  // );

  try {
    await ses.send(
      new SendEmailCommand({
        Destination: {
          ToAddresses: [process.env.CONTACT_EMAIL, process.env.CONTACT_EMAIL_SHALLY],
        },
        Message: {
          Subject: {
            Charset: 'UTF-8',
            Data: request.title || 'Contact Form Submission to Pureleap.com',
          },
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: `Email: ${request.email}\n\nThank you for contacting Pureleap.\n\nWe have received your message:\n\n${
                request.message
              }\n\n${
                request.phone ? `Your phone number: ${request.phone}\n\n` : ''
              }We will get back to you in the next few days.\n\nThanks, Shally and Max`,
            },
          },
        },
        Source: `no-reply@${await getFromDomain()}`,
      }),
    );
  } catch (e) {
    error(`Could not send email: ${e.message}`);

    // still sending success to discourage spammers to use this form
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message sent',
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Message sent',
    }),
  };
});
