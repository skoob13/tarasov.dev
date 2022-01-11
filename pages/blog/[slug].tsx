import { useMDXComponent } from 'next-contentlayer/hooks';
// import components from 'components/MDXComponents';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogLayout from 'layouts/BlogLayout';

interface Props {
  post: Blog;
}

export default function Post({ post }: Props) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component
 
      />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
  fallback: false
})


export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug)!;
  return { props: { post } };
}
