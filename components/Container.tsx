import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import ExternalLink from './ExternalLink';

interface Props {
  children: React.ReactNode;
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export default function Container({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const meta = {
    title: 'Georgii Tarasov is a software developer in Ridgebox.com',
    description: `Georgiy is a software developer, speciality coffee enthusiast, and a kinda of entrepreneur. I work in Ridgebox.com and 99sales.io.`,
    image: `${DOMAIN}/banner.png`,
    type: 'website',
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={DOMAIN} />
        <link rel="canonical" href={DOMAIN} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Georgii Tarasov" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anottoday" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="container max-w-2xl mx-auto">
        <nav className="sticky-nav flex justify-between items-center px-4 py-4 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
          <div>
            <span className="font-bold p-1 sm:p-4 text-gray-900 dark:text-gray-100">tarasov.dev</span>
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="bg-gray-200 dark:bg-gray-800 rounded h-10 w-10 text-center"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && theme === 'dark' ? '🌞' : '🌚'}
          </button>
        </nav>
        <main className="flex flex-col justify-center bg-white dark:bg-black px-4">{children}</main>
        <footer className="py-8 px-4 flex justify-between items-center">
          <span className="text-gray-900 text-sm">Created by Georgiy Tarasov in 2022</span>
          <ul className="flex items-center gap-4">
            <li>
              <ExternalLink href="https://twitter.com/anottoday" className="flex items-center">
                <span className="sr-only">Open Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-900 w-4 h-4">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/skoob13" className="flex items-center">
                <span className="sr-only">Open Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-900 w-4 h-4">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </ExternalLink>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
