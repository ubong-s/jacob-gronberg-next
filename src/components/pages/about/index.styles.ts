import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const AboutSectionWrap = styled.section`
  width: 90%;
  max-width: 114.7rem;
  margin: auto;
  padding: 4rem 0;

  h2 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.default};
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .about__text {
    p {
      margin-bottom: 1.6rem;
    }
  }

  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: 0.5fr 1fr;

    h2 {
      font-size: 3rem;
    }
  }
`;
