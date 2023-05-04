import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { AboutSectionWrap } from "./index.styles";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const AboutIntro = () => {
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
          <p>
            Massa vitae tortor condimentum lacinia quis vel eros donec. In
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.
            Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum
            morbi blandit cursus risus at ultrices mi tempus imperdiet.
          </p>
          <p>
            Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id
            aliquet lectus proin. Varius quam quisque id diam vel quam elementum
            pulvinar.
          </p>
          <p>
            Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant
            morbi tristique senectus et netus et malesuada. Eget nullam non nisi
            est sit amet facilisis magna etiam. Et tortor at risus viverra
            adipiscing at in tellus integer. Mi sit amet mauris commodo quis
            imperdiet massa.
          </p>
        </div>
      </AboutSectionWrap>
    </div>
  );
};
