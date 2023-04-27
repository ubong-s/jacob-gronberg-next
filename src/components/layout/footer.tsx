import React from "react";
import { FooterCredits } from "../_shared";
import styled from "styled-components";
import Link from "next/link";
import { menu_list } from "@/constants";
import { useRouter } from "next/router";
import { mediaQueries } from "@/styles";

const FooterWrap = styled.footer`
  position: relative;
  max-width: 142rem;
  margin: auto;
`;
const FooterInnerWrap = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.muted};
  padding-top: 5rem;
  width: 90%;
  margin: auto;

  ${mediaQueries.tablet} {
    padding: 9rem 0 1rem;
  }
`;

const FooterColumns = styled.div`
  text-align: center;

  .column {
    margin-bottom: 4rem;
    h4 {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
      font-size: 2rem;
      margin-bottom: 3rem;
    }

    ul {
      li {
        margin-bottom: 2rem;

        a {
          color: ${(props) => props.theme.colors.default};
          font-size: 1.8rem;
        }
      }
    }
  }

  ${mediaQueries.tablet} {
    display: flex;
    text-align: left;
  }

  ${mediaQueries.desktop} {
    padding: 0 8rem 4rem;

    .column {
      h4 {
        font-size: 3rem;
        margin-bottom: 5rem;
      }

      ul {
        li {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

const ColumnOne = styled.div`
  a {
    display: block;
    font-size: 4.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 2rem;
  }

  ${mediaQueries.tablet} {
    flex: 1;
  }

  ${mediaQueries.desktop} {
    a {
      font-size: 10rem;
    }
  }
`;

const ColumnTwo = styled.div`
  ${mediaQueries.tablet} {
    flex: 0.5;
  }

  ${mediaQueries.desktop} {
    flex: 0.3;
  }
`;

const ColumnThree = styled.div`
  ${mediaQueries.tablet} {
    flex: 0.5;
  }

  ${mediaQueries.desktop} {
    flex: 0.3;
  }
`;

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
          </ColumnThree>
        </FooterColumns>
        <FooterCredits />
      </FooterInnerWrap>
    </FooterWrap>
  );
};
