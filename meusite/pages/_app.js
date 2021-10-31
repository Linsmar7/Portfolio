import Head from "next/head";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linsmar Vital</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
