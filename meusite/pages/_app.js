import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Head>
        <title>Linsmar Vital | Full-Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Linsmar Vital - Full-Stack Developer & Computer Scientist. Building scalable, modern web applications."
        />
        <meta
          name="keywords"
          content="Linsmar Vital, Full-Stack Developer, React, Next.js, TypeScript, Angular, PHP, Laravel, Drupal"
        />
        <meta name="author" content="Linsmar Vital" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Linsmar Vital | Full-Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linsmarvital.com" />
        <meta property="og:image" content="https://i.imgur.com/lfJaes8.png" />
        <meta
          property="og:description"
          content="Full-Stack Developer & Computer Scientist. Building modern web experiences."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Linsmar Vital | Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Full-Stack Developer & Computer Scientist. Building modern web experiences."
        />
        <meta name="twitter:image" content="https://i.imgur.com/lfJaes8.png" />
        <meta name="theme-color" content="#190F26" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
