import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionIntroWrap = styled.section`
  position: relative;
  width: 90%;
  max-width: 142rem;
  margin: auto;
  text-align: center;

  .return__link {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1rem;

    ${mediaQueries.tablet} {
      margin-top: -6.5rem;
    }
  }

  .content {
    padding: 5rem 0;
  }

  h1 {
    position: relative;
    margin-bottom: -6rem;
    z-index: 1;
  }

  p {
    text-transform: uppercase;
  }

  img {
    max-width: 80rem;
    margin: auto;
  }
`;
