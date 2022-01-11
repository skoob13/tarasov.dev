import { isSameYear, parseISO } from 'date-fns';

const formatter = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  day: 'numeric',
});

const formatterWithYear = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (date: string) => {
  const publishedAt = parseISO(date);

  return isSameYear(new Date(), publishedAt) ? formatter.format(publishedAt) : formatterWithYear.format(publishedAt);
};
