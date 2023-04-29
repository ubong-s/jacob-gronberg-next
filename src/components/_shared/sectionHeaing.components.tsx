import Link from "next/link";
import { ArrowRight } from "../icons";
import { SectionHeadingWrap } from "./sectionHeading.styles";

interface SectionHeadingProps {
  titleLeft: string;
  titleRight: string;
  link?: string;
}

export const SectionHeading = ({
  titleLeft,
  titleRight,
  link,
}: SectionHeadingProps) => {
  return (
    <SectionHeadingWrap>
      <h2>
        {titleLeft}
        <span> {titleRight}</span>
      </h2>

      {link && (
        <Link href={link}>
          View All
          <ArrowRight />
        </Link>
      )}
    </SectionHeadingWrap>
  );
};
