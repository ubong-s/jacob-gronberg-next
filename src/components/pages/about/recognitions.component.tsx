import { GenericListItem } from "@/components/_shared";
import { recognitions_data } from "@/constants";
import { AboutSectionWrap } from "./index.styles";
import { gsap } from "gsap";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { RecognitionProps } from "@/types/recognition.type";

export const Recognitions = ({
  recognitions,
}: {
  recognitions: RecognitionProps[];
}) => {
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
            start: "top bottom",
          },
        })
        .to(recognitionsContainer.current, {
          autoAlpha: 1,
        });
    }, recognitionsContainer);

    return () => ctx.revert();
  }, []);

  const items = recognitions.map((item) => {
    return {
      id: item._key,
      title: item.award,
      subtitle: item.date,
      rightText: item.organization,
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
