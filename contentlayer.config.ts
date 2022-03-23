import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc: any) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc: any) => doc.body.raw.split(/\s+/gu).length,
  },
  // tweetIds: {
  //   type: 'json',
  //   resolve: (doc) => {
  //     const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  //     const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);
  //     return tweetIDs ?? [];
  //   },
  // },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    seoTitle: { type: 'string', required: true },
    isPublished: { type: 'boolean', required: false },
    summary: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    image: { type: 'string', required: false },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
