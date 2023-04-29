import React from "react";
import { AnimatedImage, ProjectListing, SectionHeading } from "../_shared";
import { LatestWorkWrap } from "./latestWork.styles";
import { projects_data } from "@/constants";

export const LatestWork = () => {
  return (
    <LatestWorkWrap>
      <SectionHeading titleLeft="Latest" titleRight="Work" link="/projects" />
      <ProjectListing projects={projects_data.slice(0, 4)} />
    </LatestWorkWrap>
  );
};
