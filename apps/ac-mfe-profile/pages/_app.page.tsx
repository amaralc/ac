import App, { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ac-mfe-profile!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

CustomApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default CustomApp;
