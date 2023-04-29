import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionsHeadingWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  text-align: center;
  align-items: center;
  padding: 3rem 0;

  h1 {
    margin-bottom: 3rem;
  }

  p {
    max-width: 60rem;
    margin: auto;
  }

  ${mediaQueries.desktop} {
    gap: 7rem;
  }
`;
