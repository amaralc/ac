import { defineConfig } from 'cypress';

/**
 * Use Next.js alpha framework
 *
 * @see https://larsmagnus.co/blog/component-testing-with-cypress-in-next-js
 */

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  projectId: 'h5f96j',
});
