import Link from 'next/link';

export interface SmallerBlogPost {
  slug: string;
  title: string;
  readingTime: string;
  publishedAt: string;
}

interface Props {
  post: SmallerBlogPost;
  clampLines?: boolean;
}

export default function BlogCard({ post, clampLines }: Props) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`} prefetch={false}>
        <a className="dark:highlight-white/5 flex flex-col rounded-lg bg-gray-50 p-6 ring-gray-300 transition-all hover:ring-1 dark:bg-gray-800">
          <div className="flex items-center">
            <h3
              className={`flex-1 text-base font-semibold dark:text-gray-300 mr-1${clampLines ? ' line-clamp-1' : ''}`}
            >
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
              <figcaption className="text-base font-semibold dark:text-gray-300">{post.readingTime}</figcaption>
            </figure>
          </div>
          <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">Published on {post.publishedAt}</span>
        </a>
      </Link>
    </li>
  );
}
