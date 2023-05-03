import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const SectionHeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  gap: 1rem;
  margin-bottom: 3rem;

  h2 {
    font-size: 5rem;
    line-height: 5rem;
    color: ${(props) => props.theme.colors.default};
    text-transform: uppercase;
    overflow: hidden;

    span {
      display: inline-block;

      &.right {
        color: ${(props) => props.theme.colors.primary};
        text-transform: capitalize;
        margin-left: 1rem;
      }
    }
  }

  a {
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      align-self: center;
    }
  }

  ${mediaQueries.desktop} {
    h2 {
      font-size: 10rem;
      line-height: 10rem;
    }
  }
`;
