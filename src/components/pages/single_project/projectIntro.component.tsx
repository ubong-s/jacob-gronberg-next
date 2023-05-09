import { CustomImage, ReturnLink } from "@/components/_shared";
import { ProjectIntroWrap } from "./projectIntro.styles";
import { useGlobalContext } from "@/context/global";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectIntroProps {
  name: string;
  image: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({ name, image }) => {
  const { menuOpen } = useGlobalContext();
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: "ease" },
        })
        .to(containerRef.current, {
          autoAlpha: 1,
        })
        .to(".image > .image__wrap > .overlay", {
          xPercent: 0,
          autoAlpha: 1,
        })
        .to(".image > .image__wrap > .overlay", {
          translateX: "100%",
          autoAlpha: 1,
        })
        .from(
          ".image > .image__wrap > .image",
          {
            scale: 1.2,
          },
          "<"
        );

      gsap.from(".content h1", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".content h1",
          start: "top center",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ProjectIntroWrap ref={containerRef}>
      <div className={menuOpen ? "return__link menu__open" : "return__link"}>
        <ReturnLink returnLink="/projects" returnText="Projects" />
      </div>
      <div className="content">
        <div className="image">
          <CustomImage src={image} alt={name} width={700} height={855} />
        </div>
        <h1>{name}</h1>
      </div>
    </ProjectIntroWrap>
  );
};
