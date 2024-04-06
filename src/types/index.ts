export interface BlogFrontmatter {
  title: string;
  seoTitle: string;
  summary: string;
  publishedAt: string;
  isPublished: boolean;
  readingTime: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  readingTime: string;
  publishedAt: string;
}
