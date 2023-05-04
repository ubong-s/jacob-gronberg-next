import { mediaQueries } from "@/styles";
import Link from "next/link";
import styled from "styled-components";

export const ListingsWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  padding-top: 4rem;

  display: grid;
  align-items: flex-start;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "one two"
    "empty four"
    "three five"
    "six seven";
  visibility: hidden;

  ${mediaQueries.desktop} {
    padding-top: 8rem;
    grid-template-columns: 1fr 1fr;
    gap: 5rem 14.3rem;
  }
`;

export const Listing = styled(Link)`
  display: grid;
  text-align: left;

  h3 {
    font-size: 2rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.default};
    white-space: break-spaces;

    span {
      display: block;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .location {
    margin-top: 1rem;
  }

  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(4),
  &:nth-of-type(7) {
    justify-self: center;
    width: 70%;
  }

  &:nth-of-type(6),
  &:nth-of-type(7) {
    margin-top: 2rem;
  }

  &:nth-of-type(1) {
    grid-area: one;
    margin-top: 10rem;
  }

  &:nth-of-type(2) {
    grid-area: two;
  }

  &:nth-of-type(3) {
    grid-area: three;
  }

  &:nth-of-type(4) {
    grid-area: four;
    margin-top: -20rem;
  }

  &:nth-of-type(5) {
    grid-area: five;
  }
  &:nth-of-type(6) {
    grid-area: six;
  }
  &:nth-of-type(7) {
    grid-area: seven;
  }

  ${mediaQueries.desktop} {
    h3 {
      font-size: 3rem;

      span {
        display: inline-block;
        margin-left: 1rem;
      }
    }

    &:nth-of-type(1) {
      margin-top: 20rem;
    }

    &:nth-of-type(4) {
      margin-top: -30rem;
    }

    &:nth-of-type(6),
    &:nth-of-type(7) {
      margin-top: 5rem;
    }
  }
`;
