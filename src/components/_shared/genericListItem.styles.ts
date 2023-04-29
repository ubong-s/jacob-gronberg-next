import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const GenericListItemWrap = styled.ul`
  li {
    padding: 3rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.muted};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      color: ${(props) => props.theme.colors.default};
      text-transform: uppercase;
    }

    .right__text {
      margin-bottom: 0;
      color: ${(props) => props.theme.colors.primary};
      text-transform: uppercase;
      line-height: 1;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }

  ${mediaQueries.desktop} {
    li {
      &:first-of-type {
        padding-top: 0;
      }
    }
  }
`;
