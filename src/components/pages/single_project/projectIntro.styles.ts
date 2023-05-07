import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ProjectIntroWrap = styled.section`
  position: relative;
  width: 90%;
  max-width: 142rem;
  margin: auto;
  text-align: center;

  .return__link {
    padding-top: 5rem;
  }

  .content {
    padding: 0 0 5rem;

    h1 {
      position: relative;
      margin-top: -4rem;
      z-index: 1;
    }

    p {
      text-transform: uppercase;
    }

    .image {
      max-width: 80rem;
      margin: auto;
      margin-top: 2rem;
    }
  }

  ${mediaQueries.tablet} {
    .content {
      h1 {
        margin-top: -6rem;
      }
    }
  }

  ${mediaQueries.desktop} {
    /* margin-top: -7rem; */

    .return__link {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }

    .content {
      h1 {
        margin-top: -10rem;
      }
    }
  }
`;
