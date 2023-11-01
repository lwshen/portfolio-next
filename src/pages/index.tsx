import Head from "next/head";
import { oppoSansFont } from "~/lib/fonts";
import HomePage from "~/components/home/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Slinvent</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${oppoSansFont.className} flex min-h-screen flex-col`}>
        <HomePage />
      </main>
    </>
  );
}
