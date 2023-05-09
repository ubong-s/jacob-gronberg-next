import { social_list } from "@/constants";
import Link from "next/link";
import { FooterCreditsWrap } from "./footerCredits.styles";

export const FooterCredits = () => {
  return (
    <FooterCreditsWrap>
      <ul className="social__list">
        {social_list.map(({ id, title, link }) => (
          <li key={id}>
            <Link href={link}>
              <span className="text">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="credits">
        <p>
          <span>
            © Design by{" "}
            <Link href="http://www.gola.io" target="_blank">
              Pawel Gola
            </Link>
          </span>
          <span className="dash"></span>
          <span>
            Developed by{" "}
            <Link href="https://devubong.com/" target="_blank">
              Ubong Sylvester
            </Link>
          </span>
        </p>
      </div>
    </FooterCreditsWrap>
  );
};
