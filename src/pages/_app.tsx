import 'styles/globals.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (typeof window !== undefined) {
      const ga = {
        data: {
          v: '1',
          tid: 'G-HEGY6G668W',
          cid: `${Date.now()}${Math.random()}`,
          dl: window.location.href,
          aip: '1',
        },
        send(additionalParams: { [key: string]: string }) {
          navigator.sendBeacon(
            'https://google-analytics.com/collect',
            new URLSearchParams({
              ...this.data,
              ...additionalParams,
            }).toString()
          );
        },
      };

      ga.send({ t: 'pageview' });
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
