import { GenericListItem } from "@/components/_shared";
import { experiences_data } from "@/constants";
import { AboutSectionWrap } from "./index.styles";
import { gsap } from "gsap";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { ExperienceProps } from "@/types/experience.type";

export const Experiences = ({
  experiences,
}: {
  experiences: ExperienceProps[];
}) => {
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
            start: "top bottom",
          },
        })
        .to(experiencesContainer.current, {
          autoAlpha: 1,
        });
    }, experiencesContainer);

    return () => ctx.revert();
  }, []);

  const items = experiences.map((item) => {
    return {
      id: item._key,
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
