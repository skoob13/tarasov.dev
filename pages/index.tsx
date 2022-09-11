import { GetStaticProps } from 'next';
import Image from 'next/future/image';

import BlogCard from 'components/blog-card';
import Container from 'components/container';
import { allBlogs } from 'contentlayer/generated';
import { getBlogPostPreviews } from 'lib/blog';

interface Props {
  posts: { slug: string; title: string; readingTime: string; publishedAt: string }[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      posts: getBlogPostPreviews(allBlogs).slice(0, 3),
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
    img: (
      <svg
        fill="none"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 fill-gray-900 dark:fill-gray-100"
      >
        <path d="m49.2784 17.8029c6.3633 3.6742 8.5854 11.7671 5.0285 18.166l-.1096.1933-7.2035 12.4778h-12.1925l3.687-6.3862c-.9048-.2885-1.7926-.6779-2.6487-1.1722-1.4809-.8551-2.7376-1.9496-3.7493-3.2063l-6.2146 10.7647h-12.1925l3.6871-6.3862c-.9048-.2885-1.7926-.6779-2.6487-1.1722-6.42763-3.7114-8.62991-11.9311-4.91891-18.3594 3.71101-6.4282 11.93001-8.6307 18.35771-4.9193 1.5261.8811 2.814 2.0164 3.841 3.3216 4.0631-5.1724 11.415-6.7064 17.277-3.3216zm-30.3313 10.1993c-.7952 1.3775-.3233 3.1389 1.054 3.9342 1.3774.7953 3.1386.3233 3.9338-1.0542.7952-1.3774.3233-3.1388-1.0541-3.9341-1.3773-.7953-3.1385-.3233-3.9337 1.0541zm21.118 0c-.7952 1.3775-.3233 3.1389 1.0541 3.9342 1.3773.7953 3.1385.3233 3.9337-1.0542.7953-1.3774.3234-3.1388-1.054-3.9341s-3.1386-.3233-3.9338 1.0541z" />
      </svg>
    ),
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
      <div className="mb-16 flex flex-col items-start justify-center">
        <h1 className="mt-8 mb-16 text-3xl font-bold tracking-tight md:text-6xl ">
          <span className="text-sky-600">Hello!</span>
          <br />I bootstrap business and develop things for the Internet.
        </h1>
        <div className="mb-16 w-full">
          <h2 className="mb-4 text-xl font-bold tracking-tight md:text-3xl">Writing</h2>
          <ul className="flex flex-col gap-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} clampLines />
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="mb-4 text-xl font-bold tracking-tight md:text-3xl">Projects</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <li
                className="dark:highlight-white/5 rounded-lg bg-gray-50 p-6 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-800"
                key={project.name}
              >
                <figure className="flex items-center">
                  <div className="mr-4 flex w-8 items-center">
                    {typeof project.img === 'string' ? (
                      <Image
                        src={project.img}
                        width={48}
                        height={48}
                        alt={`${project.name} Logo`}
                        className="object-contain"
                      />
                    ) : (
                      project.img
                    )}
                  </div>
                  <figcaption>
                    <h3 className="flex-1 text-base font-semibold dark:text-gray-300">{project.name}</h3>
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
