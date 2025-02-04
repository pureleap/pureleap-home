import { SendEmailCommand } from '@aws-sdk/client-ses';
import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

import { format } from 'date-fns';

import { connect, getFromDomain } from 'email-send';

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
  recaptchaToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: ProxyHandler = async (event, context) => {
  if (!event.body) {
    return {
      statusCode: 400,
    };
  }

  const request: EmailRequest = JSON.parse(event.body);

  const ses = await connect();

  await ses.send(
    new SendEmailCommand({
      Destination: { ToAddresses: [request.email] },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Your Contact Form Submission to Pureleap.com',
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `Thank you for contacting Pureleap.\n\nWe have received your message:\n\n${
              request.message
            }\n\n${
              request.phone ? `Your phone number: ${request.phone}\n\n` : ''
            }We should be able to get back to you in the next few days.\n\nThanks, Shally and Max`,
          },
        },
      },
      Source: 'no-reply@' + (await getFromDomain()),
    })
  );

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: `Unknown endpoint accessed on a ${format(new Date(), 'eeee')}`,
    }),
  };
};
