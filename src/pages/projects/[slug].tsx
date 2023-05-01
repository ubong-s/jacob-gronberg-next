import {
  Layout,
  NextProject,
  ProjectContent,
  ProjectGallery,
  ProjectIntro,
  Seo,
} from "@/components";
import React, { useState } from "react";

import { projects_data } from "@/constants";

export default function SingleProjectPage() {
  const [project, setProject] = useState(projects_data[0]);
  return (
    <>
      <Seo title="Single Project" />
      <Layout>
        <ProjectIntro name={project.name} image={project.coverImage} />
        <ProjectContent
          description={project.description}
          details={project.details}
        />
        <ProjectGallery gallery={project.gallery} name={project.name} />
        <NextProject
          name={projects_data[1].name}
          image={projects_data[1].coverImage}
          url={projects_data[1].id}
        />
      </Layout>
    </>
  );
}
