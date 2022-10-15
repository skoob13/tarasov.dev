import Link from 'next/link';

export interface SmallerBlogPost {
  slug: string;
  title: string;
  readingTime: string;
  publishedAt: string;
}

interface Props {
  post: SmallerBlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`} prefetch={false}>
        <a className="dark:highlight-white/5 grid grid-cols-[1fr_128px] gap-1 rounded-lg bg-gray-50 p-6 ring-gray-300 transition-all hover:ring-1 dark:bg-gray-800">
          <h3 className="col-span-2 text-base font-semibold line-clamp-2 dark:text-gray-300 sm:col-auto sm:line-clamp-1">
            {post.title}
          </h3>
          <figure className="col-start-2 row-start-2 flex items-center justify-end gap-1 sm:row-start-1">
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
            <figcaption className="text-base font-semibold dark:text-gray-300">{post.readingTime}</figcaption>
          </figure>
          <span className="row-start-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:col-span-2">
            Published on {post.publishedAt}
          </span>
        </a>
      </Link>
    </li>
  );
}
