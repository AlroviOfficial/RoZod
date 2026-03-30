import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://rozod.alrovi.com',
  integrations: [
    starlight({
      title: 'RoZod',
      description: 'Type-safe Roblox API and OpenCloud client for TypeScript',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AlroviOfficial/RoZod' },
        { icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/rozod' },
      ],
      editLink: {
        baseUrl: 'https://github.com/AlroviOfficial/RoZod/edit/master/docs/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Coming from noblox.js', slug: 'getting-started/migration-from-nobloxjs' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Authentication', slug: 'guides/authentication' },
            { label: 'Error Handling', slug: 'guides/error-handling' },
            { label: 'Pagination', slug: 'guides/pagination' },
            { label: 'Batch Requests', slug: 'guides/batch-requests' },
            { label: 'Caching', slug: 'guides/caching' },
            { label: 'OpenCloud', slug: 'guides/opencloud' },
          ],
        },
        {
          label: 'Classic API Reference',
          collapsed: true,
          autogenerate: { directory: 'reference/classic' },
        },
        {
          label: 'OpenCloud Reference',
          collapsed: true,
          autogenerate: { directory: 'reference/opencloud' },
        },
      ],
    }),
  ],
});
