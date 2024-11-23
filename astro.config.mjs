// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({

    base: '/es', // Camino base del sitio
    outDir: './dist', // Carpeta de salida predeterminada
    build: {
        // Define el comportamiento de las rutas
        format: 'directory',
    },
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
});