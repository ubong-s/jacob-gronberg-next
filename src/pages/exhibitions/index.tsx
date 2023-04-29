import {
  CallToAction,
  CurrentExhibitions,
  ExhibitionsHeading,
  Layout,
  PastExhibitions,
  Seo,
  Divider,
} from "@/components";
import React from "react";

export default function Exhibitions() {
  return (
    <>
      <Seo title="Exhibitions" />

      <Layout>
        <ExhibitionsHeading />
        <CurrentExhibitions />
        <Divider />
        <PastExhibitions />
        <CallToAction />
      </Layout>
    </>
  );
}
