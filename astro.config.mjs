import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { remarkReadingTime } from './plugins/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://www.tarasov.dev',
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
    shikiConfig: {
      theme: 'dracula-soft',
      transformers: [
        {
          pre(node) {
            this.addClassToHast(node, 'not-prose')
          },
        }
      ]
    },
  },
});
