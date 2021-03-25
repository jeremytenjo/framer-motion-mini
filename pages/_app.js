import Head from 'next/head';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Interactive React - Framer Motion</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffcd2d" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
