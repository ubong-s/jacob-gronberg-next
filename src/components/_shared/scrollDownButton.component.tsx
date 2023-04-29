import { ScrollDownArrow } from "../icons";
import { ScrollDownButtonWrap } from "./scrollDownButton.styles";

export const ScrollDownButton = ({ link }: { link: string }) => {
  return (
    <ScrollDownButtonWrap href={link}>
      <ScrollDownArrow />
      <span>
        Scroll Down <br /> & Explore
      </span>
    </ScrollDownButtonWrap>
  );
};
