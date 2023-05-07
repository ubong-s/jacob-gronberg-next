import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { AboutSectionWrap } from "./index.styles";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
gsap.registerPlugin(ScrollTrigger);

export const AboutIntro = ({ about }: { about: PortableTextBlock[] }) => {
  const aboutIntroContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },

          scrollTrigger: {
            trigger: aboutIntroContainer.current,
            start: "top center+=100px",
            toggleActions: "play none none none",
          },
        })
        .to(aboutIntroContainer.current, {
          autoAlpha: 1,
        })
        .from("h2", {
          y: 20,
        })
        .from(".about__text p", {
          y: 20,
          stagger: {
            amount: 0.5,
          },
        });
    }, aboutIntroContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutIntroContainer} style={{ visibility: "hidden" }}>
      <AboutSectionWrap>
        <h2>About</h2>
        <div className="about__text">
          <PortableText value={about} />
        </div>
      </AboutSectionWrap>
    </div>
  );
};
