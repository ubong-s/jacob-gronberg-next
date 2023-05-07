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
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .content {
    padding: 5rem 0;
    h1 {
      position: relative;
      margin-bottom: -6rem;
      z-index: 1;
    }

    p {
      margin-top: 2rem;
      text-transform: uppercase;
    }

    .image {
      max-width: 80rem;
      margin: auto;
    }
  }

  ${mediaQueries.desktop} {
    .return__link {
      top: 0;
      display: none;
    }

    .content {
    }
  }
`;
