import { useRef } from "react";
import { AboutHeroWrap } from "./aboutHero.styles";
import { CustomImage } from "@/components/_shared";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const AboutHero = ({
  firstName,
  lastName,
  image,
}: {
  firstName: string;
  lastName: string;
  image: string;
}) => {
  const aboutContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
        })
        .to(aboutContainer.current, {
          autoAlpha: 1,
        })

        .to(".left__image > .image__wrap > .overlay", {
          xPercent: 0,
          autoAlpha: 1,
        })
        .to(".left__image > .image__wrap > .overlay", {
          translateX: "105%",
          autoAlpha: 1,
        })
        .from(
          ".left__image > .image__wrap > .image",
          {
            scale: 1.2,
          },
          "<"
        )
        .from(".right__content span", {
          yPercent: 100,
          stagger: {
            amount: 0.5,
          },
        });
    }, aboutContainer);

    return () => ctx.revert();
  }, []);

  return (
    <AboutHeroWrap ref={aboutContainer}>
      <div className="left__image">
        <CustomImage
          src={image}
          alt={`about ${firstName} ${lastName}`}
          width={700}
          height={700}
        />
      </div>
      <div className="right__content">
        <h1>
          <span className="small__text">About</span>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </h1>
      </div>
    </AboutHeroWrap>
  );
};
