import { SESClient, SendEmailCommand, SendEmailRequest } from '@aws-sdk/client-ses';

const sentEmailRequests: SendEmailRequest[] = [];

// Mock SES client
const mockSend = async (command: any): Promise<any> => {
  if (command instanceof SendEmailCommand) {
    sentEmailRequests.push(command.input);
  }
  return {};
};

const createMockSESClient = (): SESClient => {
  const client = Object.create(SESClient.prototype);
  Object.defineProperty(client, 'send', { value: mockSend });
  return client as unknown as SESClient;
};

describe('SES template', () => {
  it('Should connect to mocked SES', async () => {
    const ses = createMockSESClient();
    const fromDomain = 'test.local';
    expect(fromDomain).toBe('test.local');

    await ses.send(
      new SendEmailCommand({
        Destination: { ToAddresses: ['test@test.com'] },
        Message: {
          Subject: { Charset: 'UTF-8', Data: 'Test email' },
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: 'This is the message body in text format.',
            },
          },
        },
        Source: 'sender@' + fromDomain,
      }),
    );

    expect(sentEmailRequests).toHaveLength(1);
  });
});
