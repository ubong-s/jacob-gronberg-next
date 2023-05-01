import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const NextProjectWrap = styled.section`
  position: relative;
  width: 90%;
  max-width: 80rem;
  margin: auto;
  text-align: center;
  padding: 5rem 0;
  margin-bottom: 10rem;

  h2 {
    font-size: 6.5rem;
    line-height: 7.5rem;
    margin-bottom: -5rem;
    position: relative;
    z-index: 1;
  }

  p {
    text-transform: uppercase;
  }

  .btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2rem;
  }

  ${mediaQueries.tablet} {
    h2 {
      font-size: 12rem;
      line-height: 11rem;
    }
  }

  ${mediaQueries.desktop} {
    margin-bottom: 20rem;

    h2 {
      font-size: 18rem;
      line-height: 18rem;
      margin-bottom: -8rem;
    }
  }
`;
