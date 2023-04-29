import React from "react";
import { ProjectsHeadingWrap } from "./ProjectsHeading.styles";
import { CircularButton } from "../_shared";

export const ProjectsHeading = () => {
  return (
    <ProjectsHeadingWrap>
      <div>
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          perspiciatis facilis iste dolorem asperiores, cumque fugit quis aut
          repellat natus.
        </p>
      </div>
      <CircularButton title="Get in touch" link="/contact" />
    </ProjectsHeadingWrap>
  );
};
