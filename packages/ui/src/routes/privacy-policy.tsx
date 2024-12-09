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
    appendToHead: '<title>Posts</title>',
    properties: {
      posts: ['post1', 'post2', 'post3', 'posts4'],
    },

    entryPoint: __filename,
    event: event,
  });
};

hydrate(PrivacyPolicyPage);

export default PrivacyPolicyPage;
