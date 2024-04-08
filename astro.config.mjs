import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://wadda.me',
  integrations: [mdx(), playformCompress(), sitemap({
    filter: (page) =>
        page !== 'https://wadda.me/order/form/' &&
        page !== 'https://wadda.me/order/payment-success/' &&
        page !== 'https://wadda.me/order/submit-success/',
  })],
  compressHTML: true,  
});