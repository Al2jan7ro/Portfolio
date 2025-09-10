
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({

  site: "https://al2jan7ro.vercel.app",
  integrations: [sitemap()],

server: {
  host: true
},

    vite: {
    plugins: [tailwindcss()],
  },
});
