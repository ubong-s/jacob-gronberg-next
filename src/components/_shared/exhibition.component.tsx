import { ExhibitionProps } from "@/types";
import React from "react";
import { AnimatedImage } from "./animatedImage.component";
import {
  SingleExhibitionWrap,
  SingleExhibitionTicketInfo,
} from "./exhibition.styles";
import Link from "next/link";
import { VisitLink } from "../icons";
import { formatHeadline } from "@/utils/helpers";

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
  } = exhibition;

  let headlineWordCount = headline.split(" ").length;

  return (
    <SingleExhibitionWrap>
      <div className="image">
        <AnimatedImage
          src={imageUrl}
          alt={headline}
          height={230}
          width={230}
          identifier={id}
        />
      </div>

      <SingleExhibitionTicketInfo>
        <Link href={`/exhibitions/${id}`} className="content">
          <p className="location">
            {location} <span className="dash"></span> {venue}{" "}
            <span className="dash"></span> {year}
          </p>
          <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(headline) }} />
          <p className="description">{description}</p>
        </Link>
        <Link className="ticket__link" href="#">
          Buy Ticket
          <VisitLink />
        </Link>
      </SingleExhibitionTicketInfo>

      <div className="date">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
      </div>
    </SingleExhibitionWrap>
  );
};
