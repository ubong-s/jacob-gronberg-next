import {
  CallToAction,
  Layout,
  Listings,
  ProjectsHeading,
  Seo,
} from "@/components";
import React from "react";

export default function Projects() {
  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <ProjectsHeading />
        <Listings />
        <CallToAction />
      </Layout>
    </>
  );
}
