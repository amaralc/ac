// import { RouterContext } from 'next/dist/shared/lib/router-context';
// import * as NextImage from 'next/image';
// import { muiTheme } from 'storybook-addon-material-ui5';
// import './tailwind-imports.css';

export const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  layout: 'fullscreen',
  // /**
  //  * Next router addon
  //  *
  //  * @see https://storybook.js.org/addons/storybook-addon-next-router
  //  */
  // nextRouter: {
  //   Provider: RouterContext.Provider,
  //   path: '/', // defaults to `/`
  //   asPath: '/', // defaults to `/`
  //   query: {}, // defaults to `{}`
  //   locales: ['en', 'pt'],
  //   locale: 'en', // defaults to `en`
  //   push() {}, // defaults to using addon actions integration,
  //   //   can override any method in the router
  // },
};

// /**
//  * Material 5 add on
//  *
//  * @see https://storybook.js.org/addons/storybook-addon-material-ui5
//  */
// export const decorators = [muiTheme()];

// /**
//  * Handle next images without breaking the preview
//  *
//  * @see https://github.com/vercel/next.js/issues/18393#issuecomment-955577890
//  */
// const OriginalNextImage = NextImage.default;

// // eslint-disable-next-line no-import-assign
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (/** @type {import('next/image').ImageProps} */ props) => {
//     if (typeof props.src === 'string') {
//       return <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />;
//     } else {
//       // don't need blurDataURL here since it is already defined on the StaticImport type
//       return <OriginalNextImage {...props} unoptimized />;
//     }
//   },
// });
