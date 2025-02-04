import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda';

import { format } from 'date-fns';

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
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: `Unknown endpoint accessed on a ${format(new Date(), 'eeee')}`,
    }),
  };
};
