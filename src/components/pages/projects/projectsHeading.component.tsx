import React, { useRef } from "react";
import { ProjectsHeadingWrap } from "./ProjectsHeading.styles";
import { CircularButton } from "../../_shared";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

export const ProjectsHeading = () => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
        })
        .to(container.current, {
          autoAlpha: 1,
        })
        .from("h1 span", {
          y: 20,
        })
        .from("p", {
          y: 20,
        })
        .from("a", {
          x: -20,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <ProjectsHeadingWrap ref={container}>
      <div>
        <h1>
          <span>Projects</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          perspiciatis facilis iste dolorem asperiores, cumque fugit quis aut
          repellat natus.
        </p>
      </div>
      <CircularButton title="Get in touch" link="mailto:ubongsly@gmail.com" />
    </ProjectsHeadingWrap>
  );
};
