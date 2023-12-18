import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from "@astrojs/react";
import Hero from "./src/components/Hero.jsx"
const env = loadEnv('', process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    //accessToken: env.STORYBLOK_TOKEN,
    accessToken: 'qreYDnC58YTo8HHr69u8swtt',
    apiOptions: {
      region: ''
    },
    bridge: {
      customParent: 'https://app.storyblok.com'
    },
  }), tailwind(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});