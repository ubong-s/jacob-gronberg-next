import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ServicesWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  padding: 5rem 0;
  visibility: hidden;

  h2 {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.default};
    font-weight: 300;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: start;
    gap: 16.5rem;
    max-width: 105.5rem;
    margin-left: auto;
  }
`;
export const ServicesList = styled.div`
  display: grid;
`;

export const Service = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8rem;
  padding: 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.muted};
  visibility: hidden;

  &:last-of-type {
    border-bottom: none;
  }

  .number {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2.4rem;
  }

  h3 {
    color: ${(props) => props.theme.colors.default};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2.4rem;
  }

  p {
    font-weight: 300;
    font-size: 1.8rem;
  }

  ${mediaQueries.desktop} {
    padding: 5rem 0;

    &:first-of-type {
      padding-top: 0;
    }

    h3 {
      font-size: 3rem;
      font-weight: 400;
    }

    p {
      font-weight: 400;
    }
  }
`;
