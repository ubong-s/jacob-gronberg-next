import { Layout } from "@/components";
import Head from "next/head";
import Image from "next/image";

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
        <h1>Home</h1>
      </Layout>
    </>
  );
}
