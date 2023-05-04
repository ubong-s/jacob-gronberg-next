import { GenericListItem } from "@/components/_shared";
import { recognitions_data } from "@/constants";
import { AboutSectionWrap } from "./index.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
gsap.registerPlugin(ScrollTrigger);

export const Recognitions = () => {
  const recognitionsContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },

          scrollTrigger: {
            trigger: recognitionsContainer.current,
            start: "top center+=100px",
            toggleActions: "play none none none",
          },
        })
        .to(recognitionsContainer.current, {
          autoAlpha: 1,
        });
    }, recognitionsContainer);

    return () => ctx.revert();
  }, []);

  const items = recognitions_data.map((item) => {
    return {
      id: item.id,
      title: item.award,
      subtitle: item.date,
      rightText: item.organisation,
    };
  });

  return (
    <div ref={recognitionsContainer} style={{ visibility: "hidden" }}>
      <AboutSectionWrap>
        <h2>Recognitions</h2>
        <GenericListItem items={items} />
      </AboutSectionWrap>
    </div>
  );
};
