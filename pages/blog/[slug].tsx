import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import BlogLayout from 'layouts/BlogLayout';
import { formatDate } from 'lib/date';
import { BlogPost } from 'types';

// import components from 'components/MDXComponents';
import { allBlogs } from '.contentlayer/data';

interface Props {
  post: BlogPost;
}

export default function Post({ post }: Props) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug)!;

  return {
    props: {
      post: {
        ...post,
        publishedAtFormatted: formatDate(post.publishedAt),
      },
    },
  };
};
