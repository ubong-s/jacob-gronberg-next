import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const CallToActionWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  padding: 20rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  h2 {
    line-height: 8rem;
    font-size: 8rem;
    text-align: center;

    span {
      display: block;
      color: ${(props) => props.theme.colors.default};
    }
  }

  ${mediaQueries.desktop} {
    flex-direction: row-reverse;

    h2 {
      text-align: left;
      font-size: 10rem;
      line-height: 10rem;
    }
  }
`;
