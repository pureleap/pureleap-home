import React from 'react';
import { SSRHandler } from '@goldstack/template-ssr';
import { renderPage, hydrate } from '../render';
import SpamPolicy from '../pages/SpamPolicy';

const SpamPolicyPage = (props: { posts: string[] }): JSX.Element => {
  return (
    <>
      <SpamPolicy></SpamPolicy>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: SSRHandler = async (event, context) => {
  return renderPage({
    component: SpamPolicyPage,
    appendToHead: `<title>Anti-Spam Policy - Pureleap</title>
        <meta name="description" content="Describes the Anti-Spam Policy for Pureleap Pty. Ltd.">
        <meta name="revisit-after" content="31 days">
    `,
    properties: {},
    entryPoint: __filename,
    event: event,
  });
};

hydrate(SpamPolicyPage);

export default SpamPolicyPage;
