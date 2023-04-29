import {
  AboutHero,
  AboutIntro,
  CallToAction,
  Experiences,
  Layout,
  Recognitions,
  Seo,
} from "@/components";
import React from "react";

export default function About() {
  return (
    <>
      <Seo title="About" />

      <Layout>
        <AboutHero />
        <AboutIntro />
        <Experiences />
        <Recognitions />
        <CallToAction />
      </Layout>
    </>
  );
}
