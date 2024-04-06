import { Blog } from 'contentlayer/generated';

export interface BlogPost extends Blog {
  publishedAtFormatted: string;
}

export interface SmallerBlogPost {
  slug: string;
  title: string;
  readingTime: string;
  publishedAt: string;
}
