import { CallToAction, Hero, Layout, Services } from "@/components";
import Head from "next/head";
import Image from "next/image";
<Hero />;

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Grønberg</title>
        <meta name="description" content="Photographer & Visual Artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Services />
        <CallToAction />
      </Layout>
    </>
  );
}
