import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linsmar Vital</title>
        <meta
          name="description"
          content="LINSMAR VITAL. Front-end developer and Computer Science student exploring the world of web development and its technologies and new experiences."
        />
        <meta property="og:title" content="Linsmar - Web Developer Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linsmarvital.com" />
        <meta property="og:image" content="https://i.imgur.com/lwWAZTO.png" />
        <meta
          property="og:description"
          content="LINSMAR VITAL. Front-end developer and Computer Science student exploring the world of web development and its technologies and new experiences."
        />
        <meta name="theme-color" content="#392259" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Linsmar - Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="LINSMAR VITAL. Front-end developer and Computer Science student exploring the world of web development and its technologies and new experiences."
        />
        <meta name="twitter:image" content="https://i.imgur.com/lwWAZTO.png" />
        <meta
          name="twitter:image:alt"
          content="Linsmar Vital Picture and description about him"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.element,
};
