import { useRef } from "react";
import { CustomImage } from "./customImage.component";
import {
  SingleExhibitionWrap,
  SingleExhibitionTicketInfo,
} from "./exhibition.styles";
import Link from "next/link";
import { VisitLink } from "../icons";
import {
  formatDate,
  formatHeadline,
  useIsomorphicLayoutEffect,
} from "@/utils/helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ExhibitionProps } from "@/types/exhibition.type";

gsap.registerPlugin(ScrollTrigger);

export const Exhibition: React.FC<{ exhibition: ExhibitionProps }> = ({
  exhibition,
}) => {
  const {
    _id,
    slug,
    name,
    image,

    information: { city, venue, date },
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
            start: "top bottom",
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
      <CustomImage src={image} alt={name} height={230} width={230} />

      <SingleExhibitionTicketInfo>
        <Link href={`/exhibitions/${slug}`} className="content">
          <p className="location">
            {city} <span className="dash"></span> {venue}{" "}
            <span className="dash"></span> {formatDate(date).year}
          </p>
          <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(name) }} />
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
        <span className="month"> {formatDate(date).month}</span>
        <span className="day"> {formatDate(date).day}</span>
      </div>
    </SingleExhibitionWrap>
  );
};
