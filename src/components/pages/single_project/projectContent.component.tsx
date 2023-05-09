import {
  ProjectContentAbout,
  ProjectContentInformation,
  ProjectContentWrap,
} from "./projectContent.styles";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectContentProps {
  description: PortableTextBlock[];
  details: {
    year: number;
    service: string;
    client: string;
  };
}

export const ProjectContent: React.FC<ProjectContentProps> = ({
  description,
  details,
}) => {
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: "ease" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
          },
        })
        .to(containerRef.current, {
          autoAlpha: 1,
        })
        .from(".about", {
          y: -50,
        });

      gsap.from(".information ul li", {
        opacity: 0,
        y: -20,
        stagger: { amount: 1 },
        scrollTrigger: {
          trigger: ".information ul li",
          start: "top center",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ProjectContentWrap ref={containerRef}>
      <div></div>
      <div>
        <ProjectContentAbout className="about">
          <h2>About</h2>

          <PortableText value={description} />
        </ProjectContentAbout>

        <ProjectContentInformation className="information">
          <ul>
            <li>
              <p>Year</p>
              <p>{details.year}</p>
            </li>
            <li>
              <p>Service</p>
              <p>{details.service}</p>
            </li>

            <li>
              <p>Client</p>
              <p>{details.client}</p>
            </li>
          </ul>
        </ProjectContentInformation>
      </div>
    </ProjectContentWrap>
  );
};
