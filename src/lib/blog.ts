import { compareDesc, isSameYear } from 'date-fns';

const formatter = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  day: 'numeric',
});

const formatterWithYear = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const formatPublishedAt = (publishedAt: Date) => {
  return isSameYear(new Date(), publishedAt) ? formatter.format(publishedAt) : formatterWithYear.format(publishedAt);
};

export function formatReadingTime(_: string) {
  return '';
}

export function sortPosts<T extends { data: { publishedAt: Date } }>(posts: T[]): T[] {
  return posts.sort((a, b) => compareDesc(a.data.publishedAt, b.data.publishedAt));
}
