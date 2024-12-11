import React from 'react';
import { SSRHandler } from '@goldstack/template-ssr';
import { renderPage, hydrate } from './../render';
import PrivacyPolicy from '../pages/PrivacyPolicy';

const PrivacyPolicyPage = (props: { posts: string[] }): JSX.Element => {
  return (
    <>
      <PrivacyPolicy></PrivacyPolicy>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: SSRHandler = async (event, context) => {
  return renderPage({
    component: PrivacyPolicyPage,
    appendToHead: `<title>Privacy Policy (Pureleap)</title>
    <meta name="description" content="Describes the Privacy Policy for Pureleap Pty. Ltd.">
        <meta name="revisit-after" content="31 days">
    `,
    properties: {},

    entryPoint: __filename,
    event: event,
  });
};

hydrate(PrivacyPolicyPage);

export default PrivacyPolicyPage;
