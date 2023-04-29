import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ExhibitionsWrap = styled.section`
  width: 90%;
  margin-right: 142rem;
  margin: auto;
  padding: 5rem 0;

  ${mediaQueries.desktop} {
    padding: 10rem 0;
  }
`;
