import {
  CallToAction,
  Layout,
  Listings,
  ProjectsHeading,
  Seo,
} from "@/components";
import React, { useEffect, useState } from "react";
import { getProjects } from "../../../sanity/sanity.utils";
import { ProjectProps } from "@/types/project.type";

export default function Projects({ projects }: { projects: ProjectProps[] }) {
  console.log(projects);

  return (
    <div>
      <Seo title="Projects" />
      <Layout>
        <ProjectsHeading />
        <Listings projects={projects} />
        <CallToAction />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await getProjects();

  return {
    props: {
      projects: data,
    },
  };
};
