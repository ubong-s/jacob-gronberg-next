import Image from "next/image";
import React from "react";
import { ScrollDownArrow } from "../icons";
import Link from "next/link";
import {
  HeroWrap,
  HeroWrapInner,
  HeroRight,
  HeroLeft,
  HeroCTA,
} from "./hero.styles";
import { AnimatedImage, CircularButton } from "../_shared";

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
          <AnimatedImage
            src="/images/hero_image.png"
            alt="jacob gronberg"
            width={751}
            height={918}
            identifier="hero_image"
            start={100}
          />
          <Link href="/#services" className="scroll__down__btn">
            <ScrollDownArrow />
            <span>
              Scroll Down <br /> & Explore
            </span>
          </Link>
        </HeroRight>
        <HeroCTA>
          <div>
            <AnimatedImage
              src="/images/work_with jacob.png"
              alt="work with jacob gronberg"
              width={180}
              height={180}
              identifier="work_with_me"
            />
            <p>Hi, Im Jacob</p>
          </div>
          <div className="btn-control">
            <CircularButton link="/contact" title="Work With Me" />
          </div>
        </HeroCTA>
      </HeroWrapInner>
    </HeroWrap>
  );
};
