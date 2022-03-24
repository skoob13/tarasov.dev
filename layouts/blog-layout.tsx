import Head from 'next/head';

import Container from 'components/container';
import { BlogPost } from 'types';

interface Props {
  children: React.ReactChild;
  post: BlogPost;
}

export default function BlogLayout({ children, post }: Props) {
  return (
    <Container title={`${post.title} – Georgiy Tarasov`} description={post.summary} image={post.image} type="article">
      <Head>{post.publishedAt && <meta property="article:published_time" content={post.publishedAt} />}</Head>
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mr-2 mt-2 text-sm text-gray-700 dark:text-gray-300">
          {post.publishedAtFormatted} / {post.readingTime.text}
        </p>
        <div className="prose mt-8 w-full max-w-none dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
