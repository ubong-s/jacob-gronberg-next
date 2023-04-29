import {
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
        <AboutIntro />
        <Experiences />
        <Recognitions />
        <CallToAction />
      </Layout>
    </>
  );
}
