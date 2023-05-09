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

      span {
        display: block;

        &.outer {
          overflow: hidden;
          padding-bottom: 2rem;
        }
      }
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
      h1 {
        margin-top: -10rem;
      }
    }
  }
`;
