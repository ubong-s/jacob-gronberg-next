import Image from "next/image";
import gsap from "gsap";
import styled from "styled-components";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/utils/helpers";

interface AnimatedImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  identifier: string;
}

const AnimatedImageWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  opacity: 0;

  .overlay {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 2;
  }

  img {
    display: block;
  }
`;

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  height,
  width,
  identifier,
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
            start: "top-=200",
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
