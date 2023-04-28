import Image from "next/image";
import gsap from "gsap";
import styled from "styled-components";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { AnimatedImageWrap } from "./animatedImage.styles";

interface AnimatedImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  identifier: string;
  start?: number;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  height,
  width,
  identifier,
  start = 500,
}) => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            ease: "ease",
          },
          scrollTrigger: {
            trigger: `.image__wrap__${identifier}`,
            start: `top-=${start}`,
            end: "top",
          },
        })
        .to(`.image__wrap__${identifier}`, {
          opacity: 1,
        })
        .to(
          `.overlay__${identifier}`,

          {
            height: 0,
          }
        )
        .fromTo(
          `.image__${identifier}`,
          {
            opacity: 0,
            scale: 1.2,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
          },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <AnimatedImageWrap className={`image__wrap image__wrap__${identifier}`}>
      <div className={`overlay overlay__${identifier}`}></div>
      <Image
        className={`image__${identifier}`}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </AnimatedImageWrap>
  );
};
