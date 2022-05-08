import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/tailwind.css";
import icon from "./../public/favicon.ico";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linsmar Vital</title>
        <meta
          name="description"
          content="LINSMAR VITAL. Front-end developer and Computer Science student exploring the world of web development and its technologies and new experiences."
          key="description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />

        <meta
          name="keywords"
          content="Portfolio, Web Development, Reactjs, HTML, CSS, Javascript, Front-end, Website"
          key="keywords"
        />
        <meta name="author" content="Linsmar Vital" key="author" />
        <meta
          property="og:title"
          content="Linsmar - Web Developer Portfolio"
          key="ogtitle"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content="https://www.linsmarvital.com"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/lfJaes8.png"
          key="ogimg"
        />
        <meta
          property="og:description"
          content="LINSMAR VITAL. Front-end developer and Computer Science student exploring the world of web development and its technologies and new experiences."
          key="ogdescription"
        />
        <meta name="theme-color" content="#392259" key="themecolor" />
        <meta name="twitter:card" content="summary_large_image" key="twtcard" />
        <meta
          name="twitter:title"
          content="Linsmar - Web Developer Portfolio"
          key="twttitle"
        />
        <meta
          name="twitter:description"
          content="LINSMAR VITAL. Front-end developer and Computer Science student exploring the world of web development and its technologies and new experiences."
          key="twtdescription"
        />
        <meta
          name="twitter:image:src"
          content="https://i.imgur.com/lfJaes8.png"
          key="twtimg"
        />
        <meta
          name="twitter:image:alt"
          content="Linsmar Vital Picture and description about him"
          key="twtimgalt"
        />
        <meta name="theme-color" content="#392259" />
        <link rel="apple-touch-icon" href={icon}></link>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
