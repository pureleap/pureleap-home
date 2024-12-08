import React, { useState } from 'react';
import { SSRHandler } from '@goldstack/template-ssr';

import { renderPage, hydrate } from './../render';
import Panel from './../components/Panel';
import styles from './$index.module.css';
import { NewIndex } from '../pages/Index';

const Index = (): JSX.Element => {
  return (
    <>
      <NewIndex></NewIndex>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: SSRHandler = async (event, context) => {
  const message = 'Hi there';

  return renderPage({
    component: Index,
    appendToHead: '<title>Pureleap - Be chill. Create from Love.</title>',
    properties: {
      message,
    },
    entryPoint: __filename,
    event,
  });
};

hydrate(Index);

export default Index;
