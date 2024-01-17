import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xdiffernt.com/',
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
