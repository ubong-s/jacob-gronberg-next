import { mediaQueries } from "@/styles";
import styled from "styled-components";
import Link from "next/link";

export const LatestWorkWrap = styled.section`
  width: 90%;
  margin-right: 142rem;
  margin: auto;
  padding: 6rem 0;

  ${mediaQueries.desktop} {
    padding: 10rem 0;
  }
`;

export const LatesWorkListingWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: flex-start;
  gap: 5rem;
  padding-top: 3rem;

  ${mediaQueries.tablet} {
    gap: 10rem 15rem;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 0.6fr;
    padding-top: 5rem;
    gap: 15rem 29rem;
  }
`;

export const Project = styled(Link)`
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
