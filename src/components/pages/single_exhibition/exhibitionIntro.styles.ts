import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionIntroWrap = styled.section`
  position: relative;
  width: 90%;
  max-width: 142rem;
  margin: auto;
  text-align: center;
  visibility: hidden;

  .return__link {
    padding-top: 5rem;
  }

  .content {
    padding-bottom: 5rem;

    h1 {
      position: relative;
      margin-bottom: -6rem;
      z-index: 1;

      span {
        display: block;

        &.outer {
          overflow: hidden;
          padding-bottom: 2rem;
        }
      }
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
      display: flex;
      justify-content: center;
      margin-top: -12rem;
      margin-bottom: 12rem;
      position: relative;
      z-index: 12;
      transition: opacity 0.2s ease;

      &.menu__open {
        visibility: hidden;
        opacity: 0;
      }
    }

    .content {
    }
  }
`;
