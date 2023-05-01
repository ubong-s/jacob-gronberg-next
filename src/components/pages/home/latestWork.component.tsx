import React from "react";
import { CustomImage, SectionHeading } from "../../_shared";
import {
  LatesWorkListingWrap,
  LatestWorkWrap,
  Project,
} from "./latestWork.styles";
import { projects_data } from "@/constants";
import { formatHeadline } from "@/utils/helpers";

export const LatestWork = () => {
  return (
    <LatestWorkWrap>
      <SectionHeading titleLeft="Latest" titleRight="Work" link="/projects" />
      <LatesWorkListingWrap>
        {projects_data.slice(0, 4).map((project) => {
          const {
            id,
            name,
            coverImage,
            details: { location, month, year },
          } = project;
          return (
            <Project href={`/projects/${id}`} key={id}>
              <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(name) }} />

              <CustomImage
                src={coverImage}
                alt={name}
                height={855}
                width={700}
              />
              <p className="location">{location}</p>
              <p className="date">
                {month} {year}
              </p>
            </Project>
          );
        })}
      </LatesWorkListingWrap>
    </LatestWorkWrap>
  );
};
