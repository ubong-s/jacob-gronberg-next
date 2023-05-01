import React from "react";
import { AboutHeroWrap } from "./aboutHero.styles";
import { CustomImage } from "@/components/_shared";

export const AboutHero = () => {
  return (
    <AboutHeroWrap>
      <div className="left__image">
        <CustomImage
          src="/images/about_hero.png"
          alt="about Jacob Grønberg"
          width={700}
          height={700}
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
