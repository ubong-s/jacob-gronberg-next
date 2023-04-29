import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionsWrap = styled.section`
  width: 90%;
  margin-right: 142rem;
  margin: auto;
  padding: 6rem 0;

  h2 {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.default};
    text-transform: uppercase;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ${mediaQueries.desktop} {
    padding: 8rem 0;

    h2 {
      font-size: 5rem;
    }
  }
`;
