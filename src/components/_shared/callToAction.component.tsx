import React from "react";
import { CircularButton } from "./circularButton.component";
import { CallToActionWrap } from "./callToAction.component.styles";

export const CallToAction: React.FC<{}> = () => {
  return (
    <CallToActionWrap>
      <h2>
        <span>{"Let's work"}</span>Together
      </h2>
      <CircularButton title="Get in touch" link="/contact" />
    </CallToActionWrap>
  );
};
