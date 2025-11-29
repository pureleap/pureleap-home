import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import './globals.css';

const App = ({ Component, pageProps }): JSX.Element => {
  process.env.GOLDSTACK_DEPLOYMENT = process.env.NEXT_PUBLIC_GOLDSTACK_DEPLOYMENT;

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      defaults: '2025-05-24',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      },
    });
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Component {...pageProps} />
    </PostHogProvider>
  );
  // return (
  //   <>
  //     <noscript>
  //       <iframe
  //         title="Google Tag Manager"
  //         src="https://www.googletagmanager.com/ns.html?id=GTM-WZ7HST3B"
  //         height="0"
  //         width="0"
  //         style={{ display: 'none', visibility: 'hidden' }}
  //       ></iframe>
  //     </noscript>
  //     <Component {...pageProps} />
  //   </>
  // );
};

export default App;
