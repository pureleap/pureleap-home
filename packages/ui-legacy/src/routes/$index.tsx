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
    appendToHead: `<title>Pureleap: Be chill and create from love ❤</title>
    <meta name="title" content="Pureleap: Be chill and create from love ❤">
    <meta name="description" content="Crafting small, thoughtful products helping busy professionals and entrepreneurs work and live with peace and purpose.">
    <meta name="keywords" content="productivity, software development, entrepreneurship, peace, self improvement, life">
    <meta name="revisit-after" content="7 days">
    `,
    properties: {},
    entryPoint: __filename,
    event,
  });
};

hydrate(Index);

export default Index;
