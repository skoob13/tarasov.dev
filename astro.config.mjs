import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://tarasov.dev',
  integrations: [tailwind(), mdx(), sitemap()],
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeCodeTitles, [rehypeAutolinkHeadings, {
      properties: {
        className: ['anchor']
      }
    }]],
    shikiConfig: {
      theme: 'dracula-soft',
      transformers: [{
        pre(node) {
          this.addClassToHast(node, 'not-prose');
        }
      }]
    }
  }
});
