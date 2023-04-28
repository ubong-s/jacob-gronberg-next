import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionsWrap = styled.section`
  width: 90%;
  margin-right: 142rem;
  margin: auto;
  padding: 5rem 0;

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    gap: 1rem;
    margin-bottom: 3rem;

    h2 {
      font-size: 5rem;
      line-height: 5rem;
      color: ${(props) => props.theme.colors.default};
      text-transform: uppercase;

      span {
        color: ${(props) => props.theme.colors.primary};
      }
    }

    a {
      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  ${mediaQueries.desktop} {
    padding: 10rem 0;

    .heading {
      h2 {
        font-size: 10rem;
      }
    }
  }
`;
