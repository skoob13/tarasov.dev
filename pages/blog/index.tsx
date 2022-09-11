import { GetStaticProps } from 'next';

import BlogCard, { SmallerBlogPost } from 'components/blog-card';
import Container from 'components/container';
import { allBlogs } from 'contentlayer/generated';
import { getBlogPostPreviews } from 'lib/blog';

interface Props {
  posts: SmallerBlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: getBlogPostPreviews(allBlogs),
    },
  };
};

export default function Home({ posts }: Props) {
  return (
    <Container>
      <div className="mb-16 flex flex-col items-start justify-center">
        <h1 className="mt-8 mb-8 text-3xl font-bold tracking-tight md:text-6xl">Latest Posts</h1>
        <h2 className="mb-8 text-gray-600 dark:text-gray-400 sm:mb-16">
          My exploration is leaning towards web development and performance gains. However, I may post some personal
          insights.
        </h2>
        <div className="mb-16 w-full">
          <ul className="flex flex-col gap-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
