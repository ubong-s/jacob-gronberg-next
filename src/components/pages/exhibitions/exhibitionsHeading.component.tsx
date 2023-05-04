import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { ScrollDownButton } from "../../_shared";
import { ExhibitionsHeadingWrap } from "./exhibitionsHeading.styles";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ExhibitionsHeading = () => {
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
        .from(".scroll__down", {
          y: -20,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <ExhibitionsHeadingWrap ref={container}>
      <div>
        <h1>
          <span>Exhibtions</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          perspiciatis facilis iste dolorem asperiores, cumque fugit quis aut
          repellat natus.
        </p>
      </div>

      <div className="scroll__down">
        <ScrollDownButton link="#exhibitions" />
      </div>
    </ExhibitionsHeadingWrap>
  );
};
