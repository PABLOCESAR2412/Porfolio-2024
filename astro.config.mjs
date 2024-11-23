// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },

    integrations: [tailwind(), react()],

    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en']
    },

    output: 'server',
    adapter: vercel(),
    outDir: './dist', // La carpeta de salida donde se generará el proyecto
    base: '/es',
});