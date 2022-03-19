import Head from "next/head";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linsmar Vital</title>
        <meta name='description' content='LINSMAR VITAL. Um estudante de Ciência da Computação explorando o mundo da programação web, suas tecnologias e novas experiências como Desenvolvedor Front-End.' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
