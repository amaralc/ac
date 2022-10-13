//@ts-check

const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    profile: `profile@${process.env.NEXT_PUBLIC_REMOTE_URL_PROFILE}/_next/static/${location}/remoteEntry.js`,
  };
};

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
  webpack(config, options) {
    config.plugins.push(
      //@ts-ignore --> TODO
      new NextFederationPlugin({
        name: 'profile',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './HeroSection': './components/HeroSection/index.tsx',
        },
        remotes: remotes(options.isServer),
        shared: {}
      }),
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
