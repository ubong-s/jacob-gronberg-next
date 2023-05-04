import { ExhibitionProps } from "@/types";
import React, { useRef } from "react";
import { CustomImage } from "./customImage.component";
import {
  SingleExhibitionWrap,
  SingleExhibitionTicketInfo,
} from "./exhibition.styles";
import Link from "next/link";
import { VisitLink } from "../icons";
import { formatHeadline, useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Exhibition: React.FC<{ exhibition: ExhibitionProps }> = ({
  exhibition,
}) => {
  const {
    id,
    location,
    imageUrl,
    venue,
    year,
    day,
    month,
    headline,
    description,
    status,
  } = exhibition;
  const exhibitionContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
            ease: "ease",
          },
          scrollTrigger: {
            trigger: exhibitionContainer.current,
            start: "top center+=100px",
            toggleActions: "play none none reverse",
          },
        })
        .to(exhibitionContainer.current, {
          autoAlpha: 1,
        })
        .to(
          ".image__wrap > .overlay",
          {
            xPercent: 0,
            autoAlpha: 1,
          },
          "<"
        )
        .to(".image__wrap > .overlay", {
          translateX: "101%",
          autoAlpha: 1,
        })
        .from(
          ".image__wrap > .image",
          {
            scale: 1.2,
          },
          "<"
        )
        .from(
          ".content",
          {
            x: -20,
          },
          0.5
        )
        .from(
          ".ticket__link",
          {
            x: -20,
          },
          0.75
        )
        .from(
          ".date",
          {
            x: -20,
          },
          1
        );
    }, exhibitionContainer);

    return () => ctx.revert();
  }, []);

  return (
    <SingleExhibitionWrap ref={exhibitionContainer}>
      <CustomImage src={imageUrl} alt={headline} height={230} width={230} />

      <SingleExhibitionTicketInfo>
        <Link href={`/exhibitions/${id}`} className="content">
          <p className="location">
            {location} <span className="dash"></span> {venue}{" "}
            <span className="dash"></span> {year}
          </p>
          <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(headline) }} />
          <p className="description">{description}</p>
        </Link>
        {status === "upcoming" ? (
          <Link className="ticket__link" href="#">
            Buy Ticket
            <VisitLink />
          </Link>
        ) : (
          <div className="ticket__link"></div>
        )}
      </SingleExhibitionTicketInfo>

      <div className="date">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
      </div>
    </SingleExhibitionWrap>
  );
};
