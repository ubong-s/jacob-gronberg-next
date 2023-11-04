import Image from "next/image";
import React, { useRef } from "react";
import { ScrollDownArrow } from "../../icons";
import Link from "next/link";
import {
  HeroWrap,
  HeroWrapInner,
  HeroRight,
  HeroLeft,
  HeroCTA,
} from "./hero.styles";
import { CustomImage, CircularButton, ScrollDownButton } from "../../_shared";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

export const Hero = () => {
  const heroContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let timelineOne = gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
        })
        .to(heroContainer.current, {
          autoAlpha: 1,
        })
        .from(".heading__wrap > span", {
          yPercent: 100,
          stagger: {
            amount: 0.5,
          },
        })
        .to(".hero__right > .image__wrap > .overlay", {
          xPercent: 0,
          autoAlpha: 1,
        })
        .to(".hero__right > .image__wrap > .overlay", {
          translateX: "100%",
          autoAlpha: 1,
        })
        .from(".text__wrap > span", {
          yPercent: 100,
          stagger: {
            amount: 0.5,
          },
        })
        .from(
          ".hero__right > .image__wrap > .image",
          {
            scale: 1.2,
          },
          "<"
        );

      let timelineTwo = gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },

          scrollTrigger: {
            trigger: ".cta__image",
            start: "top top+=90%",
          },
        })
        .from(".scroll__down", {
          yPercent: -100,
        })
        .to(".cta__image > .image__wrap > .overlay", {
          xPercent: 0,
          autoAlpha: 1,
        })
        .to(".cta__image > .image__wrap > .overlay", {
          translateX: "100%",
          autoAlpha: 1,
        })
        .from(
          ".cta__image > .image__wrap > .image",
          {
            scale: 1.2,
          },
          "<"
        )
        .from(".cta__image > p", {
          x: -20,
        })
        .from(".btn__control", {
          scale: 1.2,
        });
    }, heroContainer);

    return () => ctx.revert();
  }, []);

  return (
    <HeroWrap>
      <HeroWrapInner ref={heroContainer}>
        <HeroLeft>
          <div>
            <h1>
              <span className="heading__wrap">
                <span>Jacob</span>
              </span>
              <br />
              <span className="heading__wrap heading__wrap__two">
                <span>Grønberg</span>
              </span>
            </h1>
            <p className="text__wrap">
              <span>Photographer</span>
              <span>& Visual artist</span>
            </p>
          </div>
        </HeroLeft>
        <HeroRight className="hero__right">
          <CustomImage
            src="/images/hero_image.png"
            alt="jacob gronberg"
            width={751}
            height={918}
          />
          <span className="scroll__down">
            <ScrollDownButton link="/#services" />
          </span>
        </HeroRight>
        <HeroCTA>
          <div className="cta__image">
            <CustomImage
              src="/images/work_with jacob.png"
              alt="work with jacob gronberg"
              width={180}
              height={180}
            />
            <p>Hi, Im Jacob</p>
          </div>
          <div className="btn__control">
            <CircularButton
              link="mailto:ubongsly@gmail.com"
              title="Work With Me"
            />
          </div>
        </HeroCTA>
      </HeroWrapInner>
    </HeroWrap>
  );
};
