import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ProjectGalleryWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  text-align: center;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 5rem 0;
  visibility: hidden;

  ${mediaQueries.desktop} {
    padding: 10rem 0;
    gap: 10rem;
  }
`;

export const ProjectImage = styled.div`
  &:nth-of-type(3) {
    grid-column: 1 / 3;
  }

  &:nth-of-type(2),
  &:nth-of-type(4) {
    width: 70%;
    margin: auto;
  }
`;
