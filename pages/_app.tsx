import 'styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && (
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "18dccd60742a42de819e456e99bd48f7"}'
        />
      )}
    </ThemeProvider>
  );
}
