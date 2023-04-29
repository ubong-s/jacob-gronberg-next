import { mediaQueries } from "@/styles";
import Link from "next/link";
import styled from "styled-components";

export const ScrollDownButtonWrap = styled(Link)`
  text-align: left;
  line-height: 2.56rem;
  position: relative;

  span {
    position: absolute;
    white-space: nowrap;
    left: 3rem;
    bottom: 1rem;
  }

  ${mediaQueries.desktop} {
    span {
      bottom: 3.5rem;
    }
  }
`;
