import React, { useState } from 'react';
import { SSRHandler } from '@goldstack/template-ssr';

import { renderPage, hydrate } from './../render';
import Panel from './../components/Panel';
import styles from './$index.module.css';
import { Index as IndexPage } from '../pages/Index';

const Index = (): JSX.Element => {
  return (
    <>
      <IndexPage></IndexPage>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: SSRHandler = async (event, context) => {
  return renderPage({
    component: Index,
    appendToHead: '<title>Pureleap - Be chill. Create from Love.</title>',
    properties: {},
    entryPoint: __filename,
    event,
  });
};

hydrate(Index);

export default Index;
