import { GetStaticProps } from 'next';

import BlogCard, { SmallerBlogPost } from 'components/BlogCard';
import Container from 'components/Container';
import { formatDate } from 'lib/date';

import { allBlogs } from '.contentlayer/data';

interface Props {
  posts: SmallerBlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: allBlogs.map((blog) => ({
        slug: blog.slug,
        title: blog.title,
        readingTime: blog.readingTime.text,
        publishedAt: formatDate(blog.publishedAt),
      })),
    },
  };
};

export default function Home({ posts }: Props) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start mb-16">
        <h1 className="font-bold text-3xl md:text-6xl tracking-tight mt-8 mb-16 text-gray-900 dark:text-gray-100">
          Latest Posts
        </h1>
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
