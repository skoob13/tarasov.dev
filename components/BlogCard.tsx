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
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">Published on {post.publishedAt}</span>
        </a>
      </Link>
    </li>
  );
}
