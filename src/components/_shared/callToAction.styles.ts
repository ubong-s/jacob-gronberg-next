import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const CallToActionWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  visibility: hidden;

  h2 {
    line-height: 7rem;
    font-size: 7rem;
    text-align: center;
    overflow-y: hidden;

    span {
      display: block;

      &.uppercase {
        color: ${(props) => props.theme.colors.default};
        text-transform: uppercase;
      }
    }
  }

  ${mediaQueries.desktop} {
    padding: 20rem 0;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 8rem;

    h2 {
      text-align: left;
      font-size: 10rem;
      line-height: 10rem;
    }
  }
`;
