import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ProjectsHeadingWrap = styled.section`
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
  }

  ${mediaQueries.desktop} {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
  }

  ${mediaQueries.large} {
    gap: 10rem;
  }
`;
