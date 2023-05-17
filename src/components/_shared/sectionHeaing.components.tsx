import Link from "next/link";
import { ArrowRight } from "../icons";
import { SectionHeadingWrap } from "./sectionHeading.styles";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import { useRef } from "react";

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
  const sectionRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        })
        .from("h2 span", {
          y: 20,
          stagger: {
            amount: 0.5,
          },
        })
        .from(".view__all", {});
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionHeadingWrap ref={sectionRef}>
      <h2>
        <span className="left">{titleLeft}</span>
        <span className="right"> {titleRight}</span>
      </h2>

      {link && (
        <Link href={link} className="view__all">
          View All
          <ArrowRight />
        </Link>
      )}
    </SectionHeadingWrap>
  );
};
