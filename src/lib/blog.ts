import type { MDXInstance } from 'astro';
import { compareDesc, isSameYear, parseISO } from 'date-fns';

import type { BlogFrontmatter, BlogPost } from 'types';

const formatter = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  day: 'numeric',
});

const formatterWithYear = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const formatDate = (date: string) => {
  const publishedAt = parseISO(date);
  return isSameYear(new Date(), publishedAt) ? formatter.format(publishedAt) : formatterWithYear.format(publishedAt);
};

function slugify(path: string) {
  const segments = path.split('/');
  const fileName = segments.pop();

  if (!fileName) {
    throw new Error('File name must be defined.');
  }

  return fileName.replace('.mdx', '');
}

function getBlogPostMeta(post: MDXInstance<BlogFrontmatter>): BlogPost {
  return {
    slug: slugify(post.file),
    title: post.frontmatter.title,
    readingTime: post.frontmatter.readingTime,
    publishedAt: formatDate(post.frontmatter.publishedAt),
  };
}

export function getBlogPostPreviews(allBlogs: MDXInstance<BlogFrontmatter>[]): BlogPost[] {
  return allBlogs
    .filter((blog) => blog.frontmatter.isPublished)
    .sort((a, b) => compareDesc(parseISO(a.frontmatter.publishedAt), parseISO(b.frontmatter.publishedAt)))
    .map(getBlogPostMeta);
}

export function processBlogPost(
  post: MDXInstance<BlogFrontmatter>
): BlogPost & { Content: MDXInstance<BlogFrontmatter>['Content'] } {
  return {
    ...getBlogPostMeta(post),
    Content: post.Content,
  };
}
