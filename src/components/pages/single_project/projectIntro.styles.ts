import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ProjectIntroWrap = styled.section`
  position: relative;
  width: 90%;
  max-width: 142rem;
  margin: auto;
  text-align: center;

  .return__link {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .content {
    padding: 5rem 0;

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

  ${mediaQueries.desktop} {
    margin-top: -9rem;
  }
`;
