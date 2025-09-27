/* eslint-disable react/prop-types */
import React from 'react';

import './globals.css';

const App = ({ Component, pageProps }): JSX.Element => {
  process.env.GOLDSTACK_DEPLOYMENT =
    process.env.NEXT_PUBLIC_GOLDSTACK_DEPLOYMENT;
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WZ7HST3B"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  );
};

export default App;
