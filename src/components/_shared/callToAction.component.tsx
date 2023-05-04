import React, { useRef } from "react";
import { CircularButton } from "./circularButton.component";
import { CallToActionWrap } from "./callToAction.styles";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CallToAction: React.FC<{}> = () => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
          scrollTrigger: {
            trigger: container.current,
            start: "center center+=100px",
            // toggleActions: "play none none none",
          },
        })
        .to(container.current, {
          autoAlpha: 1,
        })
        .from("h2 span", {
          y: 20,
          stagger: {
            amount: 0.5,
          },
        })
        .from(
          "a",
          {
            x: 20,
          },
          "<"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <CallToActionWrap ref={container}>
      <h2>
        <span className="uppercase">{"Let's work"}</span>
        <span>Together</span>
      </h2>
      <CircularButton title="Get in touch" link="/contact" />
    </CallToActionWrap>
  );
};
