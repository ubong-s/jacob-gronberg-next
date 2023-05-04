import { GenericListItem } from "@/components/_shared";
import { experiences_data } from "@/constants";
import { AboutSectionWrap } from "./index.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
gsap.registerPlugin(ScrollTrigger);

export const Experiences = () => {
  const experiencesContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },

          scrollTrigger: {
            trigger: experiencesContainer.current,
            start: "top center+=100px",
            toggleActions: "play none none none",
          },
        })
        .to(experiencesContainer.current, {
          autoAlpha: 1,
        });
    }, experiencesContainer);

    return () => ctx.revert();
  }, []);

  const items = experiences_data.map((item) => {
    return {
      id: item.id,
      title: item.role,
      subtitle: item.company,
      rightText: item.timeline,
    };
  });

  return (
    <div ref={experiencesContainer} style={{ visibility: "hidden" }}>
      <AboutSectionWrap>
        <h2>Experiences</h2>
        <GenericListItem items={items} />
      </AboutSectionWrap>
    </div>
  );
};
