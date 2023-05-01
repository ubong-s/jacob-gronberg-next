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

export const ExhibitionContent = () => {
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

          <p>
            Massa vitae tortor condimentum lacinia quis vel eros donec. In
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.
            Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum
            morbi blandit cursus risus at ultrices mi tempus imperdiet.
          </p>
          <p>
            Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id
            aliquet lectus proin. Varius quam quisque id diam vel quam elementum
            pulvinar.
          </p>
          <p>
            Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant
            morbi tristique senectus et netus et malesuada. Eget nullam non nisi
            est sit amet facilisis magna etiam. Et tortor at risus viverra
            adipiscing at in tellus integer. Mi sit amet mauris commodo quis
            imperdiet massa.
          </p>
        </ExhibitionContentAbout>

        <ExhibitionContentInformation>
          <h2>Information</h2>
          <ul>
            <li>
              <p>Date</p>
              <p>16 Jun 2022 - 18 Oct 2022</p>
            </li>
            <li>
              <p>Opening Hours</p>
              <p>Monday to Saturday from 11 pm to 6 pm</p>
            </li>
            <li>
              <p>Location</p>
              <p className="location">
                <span>Art Studio</span>
                <Link href="#">
                  Get Directions <VisitLink />
                </Link>
              </p>
            </li>
            <li>
              <p>Address</p>
              <p>Main Street 2, 12101 Berlin</p>
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
