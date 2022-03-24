import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import ExternalLink from './external-link';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export default function Container({ children, image, ...customMeta }: Props) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const meta = {
    title: 'Georgiy Tarasov – developer, creator, entrepreneur.',
    description: `Georgii is a software developer, speciality coffee enthusiast, and a kinda entrepreneur. I work in Ridgebox.com and do bootstrapped business.`,
    image: `${DOMAIN}/${image || 'og-banner.jpg'}`,
    type: 'website',
    ...customMeta,
  };

  let canonicalUrl = new URL(router.asPath, DOMAIN).href;

  if (canonicalUrl.endsWith('/')) {
    canonicalUrl = canonicalUrl.slice(0, canonicalUrl.length - 1);
  }

  return (
    <div className="container mx-auto flex min-h-screen max-w-2xl flex-col">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Georgiy Tarasov" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anottoday" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <nav className="sticky-nav flex items-center justify-between bg-white bg-opacity-60 p-4 dark:bg-black md:my-8">
        <div className="flex items-center gap-2">
          <Image src="/me.png" width={32} height={32} alt="Georgiy Tarasov" priority className="rounded-full" />
          <Link href="/" prefetch={false}>
            <a className="py-1 text-base font-semibold sm:py-4 ">
              Georgiy <span className="hidden sm:inline">Tarasov</span>
            </a>
          </Link>
        </div>
        <ul className="flex items-center gap-4 sm:gap-1">
          <li>
            <Link href="/blog" prefetch={false}>
              <a className=" p1 rounded-lg text-sm transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch={false}>
              <a className=" p1 rounded-lg text-sm transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2">
                About
              </a>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600 sm:ml-3"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <span className="sr-only">Enable {theme === 'dark' ? 'light' : 'dark'} mode</span>
              {mounted && theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
      <main className="flex-[1_0_auto] px-4">{children}</main>
      <footer className="flex items-center justify-between p-4 md:my-8">
        <span className=" text-xs sm:text-sm">Created by Georgiy Tarasov in 2022</span>
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <ExternalLink href="https://twitter.com/anottoday" className="flex items-center">
              <span className="sr-only">Open Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-gray-900 dark:fill-gray-100"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/skoob13" className="flex items-center">
              <span className="sr-only">Open Github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-gray-900 dark:fill-gray-100"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </ExternalLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}
