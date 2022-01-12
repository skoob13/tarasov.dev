import { compareDesc, isSameYear, parseISO } from 'date-fns';

import { BlogPost } from 'types';

import { Blog } from '.contentlayer/types';

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

export function getBlogPostPreviews(allBlogs: Blog[]) {
  return allBlogs
    .filter((blog) => blog.isPublished)
    .sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
    .map((blog) => ({
      slug: blog.slug,
      title: blog.title,
      readingTime: blog.readingTime.text,
      publishedAt: formatDate(blog.publishedAt),
    }));
}

export function processBlogPost(blogPost: Blog): BlogPost {
  return {
    ...blogPost,
    publishedAtFormatted: formatDate(blogPost.publishedAt),
  };
}
