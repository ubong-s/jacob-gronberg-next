import { CircularButton, CustomImage } from "@/components/_shared";
import { NextProjectWrap } from "./nextProject.styles";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { useRef } from "react";
import { gsap } from "gsap";

interface NextProjectProps {
  name?: string;
  image?: string;
  url?: string;
}

export const NextProject: React.FC<NextProjectProps> = ({
  name,
  image,
  url,
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
        .from("p", {
          y: -50,
        })
        .from(
          "h2",
          {
            y: 50,
          },
          "<"
        )
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

      gsap.from(".btn", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".image",
          start: "center center",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!image || !name || !url) {
    return null;
  }

  return (
    <NextProjectWrap ref={containerRef}>
      <p>Next Project</p>
      <h2>{name}</h2>

      <div className="image">
        <CustomImage src={image} alt={name} width={700} height={855} />
      </div>
      <div className="btn">
        <CircularButton link={url} title="Discover" />
      </div>
    </NextProjectWrap>
  );
};
