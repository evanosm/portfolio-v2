import "../styles/index.scss";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OSMONT Evan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
