import { Blog } from 'contentlayer/generated';

export interface BlogPost extends Blog {
  publishedAtFormatted: string;
}
