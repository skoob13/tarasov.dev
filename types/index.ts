import { Blog } from '.contentlayer/types';

export interface BlogPost extends Blog {
  publishedAtFormatted: string;
}
