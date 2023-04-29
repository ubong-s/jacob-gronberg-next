import { mediaQueries } from "@/styles";
import Link from "next/link";
import styled from "styled-components";

export const ProjectWrap = styled(Link)`
  display: grid;
  text-align: left;

  h3 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.default};

    span {
      color: ${(props) => props.theme.colors.primary};
      margin-left: 1rem;
    }
  }

  .location {
    margin-top: 1rem;
  }

  &:nth-of-type(3) {
    justify-self: center;
    width: 70%;
  }

  &:nth-of-type(4) {
    margin-top: -10rem;
    justify-self: center;
    width: 130%;
    margin-right: 15%;
  }

  ${mediaQueries.desktop} {
    &:nth-of-type(4) {
      margin-top: -35rem;
      width: 100%;
    }
  }
`;
