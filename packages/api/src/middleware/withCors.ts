import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
  Context,
} from 'aws-lambda';

/**
 * Type for handlers that can be wrapped by the middleware
 */
export type WrappedHandler = (
  event: APIGatewayProxyEventV2,
  context: Context,
) => Promise<APIGatewayProxyStructuredResultV2>;

/**
 * Wraps an API handler with CORS functionality for API Gateway Lambda proxy integration
 *
 * @param handler - The handler function to wrap
 * @returns An AWS Lambda handler with CORS headers
 */
export function withCors(
  handler: WrappedHandler,
): Handler<APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2> {
  return async (event, context) => {
    try {
      // Handle preflight requests
      if (event.requestContext.http.method === 'OPTIONS') {
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': process.env.CORS || '',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE,PATCH',
            'Access-Control-Allow-Headers': 'Content-Type,Accept',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
          },
        };
      }

      // Execute handler
      const response = await handler(event, context);

      // Add CORS headers to response
      if (!response.headers) {
        response.headers = {};
      }
      response.headers['Access-Control-Allow-Origin'] = process.env.CORS || '';
      response.headers['Access-Control-Allow-Credentials'] = 'true';
      response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Accept';
      if (!response.headers['Content-Type']) {
        response.headers['Content-Type'] = 'application/json';
      }
      return response;
    } catch (e) {
      console.error('Error running function', e);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Internal server error',
        }),
      };
    }
  };
}
