import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionContentWrap = styled.section`
  width: 90%;
  max-width: 114.7rem;
  margin: auto;
  padding: 4rem 0;
  display: grid;
  gap: 3rem;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.default};
    margin-bottom: 4rem;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 0.5fr 1fr;

    h2 {
      font-size: 3rem;
    }
  }
`;
export const ExhibitionContentAbout = styled.div`
  margin-bottom: 4rem;

  p {
    margin-bottom: 2rem;
  }
`;

export const ExhibitionContentInformation = styled.div`
  width: 100%;
  ul {
    width: 100%;
    li {
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: space-between;
      padding: 2.5rem 0;
      border-bottom: 1px solid ${(props) => props.theme.colors.muted};

      p:first-of-type {
        color: ${(props) => props.theme.colors.primary};
      }

      .location {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        a {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
`;

export const TicketLinkMobile = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  ${mediaQueries.desktop} {
    display: none;
  }
`;
export const TicketLinkDesktop = styled.div`
  display: none;

  ${mediaQueries.desktop} {
    display: block;
  }
`;
