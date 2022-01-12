import Head from 'next/head';

import Container from 'components/Container';
import { BlogPost } from 'types';

interface Props {
  children: React.ReactChild;
  post: BlogPost;
}

export default function BlogLayout({ children, post }: Props) {
  return (
    <Container title={`${post.title} – Georgiy Tarasov`} description={post.summary} image={post.image} type="article">
      <Head>{post.publishedAt && <meta property="article:published_time" content={post.publishedAt} />}</Head>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">{post.title}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-300 mr-2 mt-2">
          {post.publishedAtFormatted} / {post.readingTime.text}
        </p>
        <div className="w-full mt-8 prose dark:prose-invert max-w-none">{children}</div>
      </article>
    </Container>
  );
}
