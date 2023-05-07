import { CustomButton } from "@/components/_shared";
import Link from "next/link";
import {
  ExhibitionContentAbout,
  ExhibitionContentInformation,
  ExhibitionContentWrap,
  TicketLinkDesktop,
  TicketLinkMobile,
} from "./exhibitionContent.styles";
import { VisitLink } from "@/components/icons";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

export const ExhibitionContent = ({
  fullDescription,
  date,
  venue,
  address,
  openingHours,
  directions,
}: {
  fullDescription: PortableTextBlock[];
  date: Date;
  venue: string;
  address: string;
  openingHours: string;
  directions: string;
}) => {
  return (
    <ExhibitionContentWrap>
      <TicketLinkDesktop>
        <Link href="#">
          <CustomButton text="Get Tickets" variant="default" />
        </Link>
      </TicketLinkDesktop>
      <div>
        <ExhibitionContentAbout>
          <h2>About</h2>

          <PortableText value={fullDescription} />
        </ExhibitionContentAbout>

        <ExhibitionContentInformation>
          <h2>Information</h2>
          <ul>
            <li>
              <p>Date</p>
              <p>{new Date(date).toString().substring(4, 15)}</p>
            </li>
            <li>
              <p>Opening Hours</p>
              <p>{openingHours}</p>
            </li>
            <li>
              <p>Location</p>
              <p className="location">
                <span>{venue}</span>
                <Link href={directions || "#"}>
                  Get Directions <VisitLink />
                </Link>
              </p>
            </li>
            <li>
              <p>Address</p>
              <p>{address}</p>
            </li>
          </ul>
        </ExhibitionContentInformation>
      </div>

      <TicketLinkMobile>
        <Link href="#">
          <CustomButton text="Get Tickets" variant="default" />
        </Link>
      </TicketLinkMobile>
    </ExhibitionContentWrap>
  );
};
