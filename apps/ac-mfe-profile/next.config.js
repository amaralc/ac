//@ts-check

const NextFederationPlugin = require('@module-federation/nextjs-mf');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  /**
   * Page Extensions
   *
   * https://github.com/vercel/next.js/issues/3728#issuecomment-895568757
   * https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
   */
   pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'page.md',
    'page.mdx',
  ],
  webpack(config, options) {
    config.plugins.push(
      //@ts-ignore --> TODO
      new NextFederationPlugin({
        name: 'profile',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './HeroSection': './components/HeroSection/index.tsx',
        },
        remotes: {},
        shared: {}
      }),
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
