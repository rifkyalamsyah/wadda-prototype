import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://wadda.me',
  integrations: [mdx(), sitemap({
    filter: (page) =>
        page !== 'https://wadda.me/order/form/' &&
        page !== 'https://wadda.me/order/payment-success/' &&
        page !== 'https://wadda.me/order/submit-success/',
  }), 
  (await import("@playform/compress")).default({
    HTML: false,
    Image: false,
    SVG: false,
  }),],
  compressHTML: true,  
});