import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export default function Container({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta = {
    title: 'Georgii Tarasov is  software developer in Ridgebox.com',
    description: '',
    image: `${DOMAIN}/static/images/banner.png`,
    type: 'website',
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
        <link rel="canonical" href={`${DOMAIN}${router.asPath}`} />
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
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <div>
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </svg>
          )}
        </button>
      </nav>
      <main id="skip" className="flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
      </main>
    </div>
  );
}
