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
    appendToHead: '<title>Posts</title>',
    properties: {
      posts: ['post1', 'post2', 'post3', 'posts4'],
    },
    entryPoint: __filename,
    event: event,
  });
};

hydrate(SpamPolicyPage);

export default SpamPolicyPage;
