import { GetStaticProps } from 'next';

import BlogCard, { SmallerBlogPost } from 'components/BlogCard';
import Container from 'components/Container';
import { getBlogPostPreviews } from 'lib/blog';

import { allBlogs } from '.contentlayer/data';

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
      <div className="flex flex-col justify-center items-start mb-16">
        <h1 className="font-bold text-3xl md:text-6xl tracking-tight mt-8 mb-8">Latest Posts</h1>
        <h2 className="mb-8 sm:mb-16 text-gray-600 dark:text-gray-400">
          My exploration is leaning towards web development and performance gains. However, I may post some personal
          insights.
        </h2>
        <div className="w-full mb-16">
          <ul className="flex flex-col">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
