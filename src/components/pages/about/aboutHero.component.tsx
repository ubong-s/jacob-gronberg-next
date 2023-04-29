import React from "react";
import { AboutHeroWrap } from "./aboutHero.styles";
import { AnimatedImage } from "@/components/_shared";

export const AboutHero = () => {
  return (
    <AboutHeroWrap>
      <div className="left__image">
        <AnimatedImage
          src="/images/about_hero.png"
          alt="about Jacob Grønberg"
          width={700}
          height={700}
          identifier="about_image"
        />
      </div>
      <div className="right__content">
        <h1>
          <span>About</span>Jacob <br /> Grønberg
        </h1>
      </div>
    </AboutHeroWrap>
  );
};
