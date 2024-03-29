import React, { useRef } from "react";
import { CustomImage, SectionHeading } from "../../_shared";
import {
  LatesWorkListingWrap,
  LatestWorkWrap,
  Project,
} from "./latestWork.styles";
import { projects_data } from "@/constants";
import { formatHeadline, useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

import { ProjectProps } from "@/types/project.type";

export const LatestWork = ({ projects }: { projects: ProjectProps[] }) => {
  const latestWorkContainer = useRef(null);
  const projectRefs = useRef<any[]>([]);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(latestWorkContainer.current, {
        autoAlpha: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: latestWorkContainer.current,
          start: "top bottom",
        },
      });

      projectRefs.current.forEach((project, index) => {
        gsap
          .timeline({
            defaults: {
              opacity: 0,
              ease: "ease",
            },
            scrollTrigger: {
              id: `project__${index}`,
              trigger: project,
              start: "top bottom",
            },
          })
          .to(project, {
            autoAlpha: 1,
          })
          .from(`#project__${index} h3`, {
            y: 20,
          })
          .to(
            `#project__${index} .image__wrap > .overlay`,
            {
              xPercent: 0,
              autoAlpha: 1,
            },
            "<"
          )
          .to(`#project__${index} .image__wrap > .overlay`, {
            translateX: "101%",
            autoAlpha: 1,
          })
          .from(
            `#project__${index} .image__wrap > .image`,
            {
              scale: 1.2,
            },
            "<"
          );
      });
    }, latestWorkContainer);

    return () => ctx.revert();
  }, []);

  const addProjectToRefs = (el: any) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <LatestWorkWrap ref={latestWorkContainer}>
      <SectionHeading titleLeft="Latest" titleRight="Work" link="/projects" />
      <LatesWorkListingWrap>
        {projects.map((project, index) => {
          const {
            _id,
            slug,
            name,
            coverImage,
            details: { location, month, year },
          } = project;
          return (
            <Project
              href={`/projects/${slug}`}
              key={_id}
              ref={addProjectToRefs}
              id={`project__${index}`}
              className="project__card"
            >
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
