import Image from "next/image";
import React from "react";
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

export const Hero = () => {
  return (
    <HeroWrap>
      <HeroWrapInner>
        <HeroLeft>
          <div>
            <h1>
              Jacob <br /> Grønberg
            </h1>
            <p>
              <span>Photographer</span>
              <span>& Visual artist</span>
            </p>
          </div>
        </HeroLeft>
        <HeroRight>
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
            <CircularButton link="/contact" title="Work With Me" />
          </div>
        </HeroCTA>
      </HeroWrapInner>
    </HeroWrap>
  );
};
