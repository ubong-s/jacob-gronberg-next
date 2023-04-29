import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const FooterWrap = styled.footer`
  position: relative;
  max-width: 142rem;
  width: 90%;
  margin: auto;
`;
export const FooterInnerWrap = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.muted};
  padding-top: 5rem;
  margin: auto;

  ${mediaQueries.tablet} {
    padding: 9rem 0 1rem;
  }
`;

export const FooterColumns = styled.div`
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

export const ColumnOne = styled.div`
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

    p {
      padding-left: 10rem;
    }
  }
`;

export const ColumnTwo = styled.div`
  ${mediaQueries.tablet} {
    flex: 0.4;
  }

  ${mediaQueries.desktop} {
    flex: 0.3;
  }
`;

export const ColumnThree = styled.div`
  ${mediaQueries.tablet} {
    flex: 0.4;
  }

  ${mediaQueries.desktop} {
    flex: 0.3;
  }
`;
