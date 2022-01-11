import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Container from 'components/Container';
import { formatDate } from 'lib/date';

import { allBlogs } from '.contentlayer/data';

interface Props {
  posts: { slug: string; title: string; readingTime: string; publishedAt: string }[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: allBlogs.slice(0, 3).map((blog) => ({
        slug: blog.slug,
        title: blog.title,
        readingTime: blog.readingTime.text,
        publishedAt: formatDate(blog.publishedAt),
      })),
    },
  };
};

const PROJECTS = [
  {
    img: '/happydragons.svg',
    name: 'HappyDragons',
    description: 'Reptile Marketplace',
  },
  {
    img: '/99.svg',
    name: '99sales',
    description: 'Fashion Search Engine',
  },
  {
    img: '/hellosleuth.svg',
    name: 'Sleuth',
    description: 'Find clues for child’s health',
  },
] as const;

export default function Home({ posts }: Props) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start mb-16">
        <h1 className="font-bold text-3xl md:text-6xl tracking-tight mt-8 mb-16 text-gray-900 dark:text-gray-100">
          <span className="text-sky-600">Hello!</span>
          <br />I bootstrap business and develop things for the internet.
        </h1>
        <div className="w-full mb-16">
          <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-gray-900 dark:text-white">Writing</h2>
          <ul className="flex flex-col">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <a className="flex flex-col bg-gray-50 rounded-lg p-6 dark:bg-gray-800 dark:highlight-white/5 hover:scale-[1.01] transition-all">
                    <div className="flex items-center">
                      <h3 className="text-base text-gray-900 font-semibold dark:text-gray-300 flex-1 line-clamp-1 mr-1">
                        {post.title}
                      </h3>
                      <figure className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 fill-gray-900 dark:fill-gray-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <figcaption className="text-base text-gray-900 font-semibold dark:text-gray-300">
                          {post.readingTime}
                        </figcaption>
                      </figure>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Published on {post.publishedAt}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-gray-900 dark:text-white">Projects</h2>
          <ul className="grid grid-cols-2 gap-2">
            {PROJECTS.map((project) => (
              <li
                className="bg-gray-50 rounded-lg p-6 dark:bg-gray-800 dark:highlight-white/5 hover:scale-[1.01] transition-all"
                key={project.img}
              >
                <figure className="flex items-center">
                  <div className="w-8 mr-4 flex items-center">
                    <Image src={project.img} width={48} height={54} alt="HappyDragons Logo" />
                  </div>
                  <figcaption>
                    <h3 className="text-base text-gray-900 font-semibold dark:text-gray-300 flex-1">{project.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.description}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
