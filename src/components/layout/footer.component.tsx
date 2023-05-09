import { FooterCredits } from "../_shared";
import Link from "next/link";
import { menu_list, info_list } from "@/constants";
import { useRouter } from "next/router";
import {
  ColumnOne,
  ColumnThree,
  ColumnTwo,
  FooterColumns,
  FooterInnerWrap,
  FooterWrap,
} from "./footer.styles";

export const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrap>
      <FooterInnerWrap>
        <FooterColumns>
          <ColumnOne className="column">
            <Link href="/">Jacob Grønberg </Link>
            <p>Photographer & Visual Artist</p>
          </ColumnOne>
          <ColumnTwo className="column ">
            <h4>Menu</h4>
            <ul>
              {menu_list.map(({ id, title, link }) => (
                <li key={id}>
                  <Link
                    href={link}
                    className={router.asPath === link ? "active" : ""}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </ColumnTwo>
          <ColumnThree className="column ">
            <h4>Info</h4>
            <ul>
              {info_list.map(({ id, title, link }) => (
                <li key={id}>
                  <Link
                    href={link}
                    className={router.asPath === link ? "active" : ""}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </ColumnThree>
        </FooterColumns>
        <FooterCredits />
      </FooterInnerWrap>
    </FooterWrap>
  );
};
