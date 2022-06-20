import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cryptocurrency Rewards Token Project of The Year | Defi Kings - Automated Eco-system</title>
        <meta property="og:title" content="Cryptocurrency Rewards Token Project of The Year | Defi Kings" key="og_title" />
        <meta name="twitter:title" content="Cryptocurrency Rewards Token Project of The Year | Defi Kings" key="twitter_title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Aynonymous cross-chain transactions. Anonymous CRO, Polygon, Matic, ETH, BNB, CRO, Fantom bridge. - Cryptocurrency Rewards Token Project of The Year | Defi Kings" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.defikings.io/" />
        <meta property="og:description" content="Aynonymous cross-chain transactions. Anonymous CRO, Polygon, Matic, ETH, BNB, CRO, Fantom bridge. - Cryptocurrency Rewards Token Project of The Year | Defi Kings" />
        <meta property="og:image" content="/images/social.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.defikings.io/" />
        <meta property="twitter:description" content="Aynonymous cross-chain transactions. Anonymous CRO, Polygon, Matic, ETH, BNB, CRO, Fantom bridge. - Cryptocurrency Rewards Token Project of The Year | Defi Kings" />
        <meta property="twitter:image" content="/images/social.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#E14D81" />
        <meta name="msapplication-TileColor" content="#E14D81" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" /> 
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
