import { mediaQueries } from "@/styles";
import styled, { keyframes } from "styled-components";

const Thumper = keyframes`
  0% {
  transform: scale(1)
  }
  100% {
  transform: scale(1.05)
  }
`;

export const PageLoaderWrap = styled.div`
  position: fixed;
  left: 3rem;
  bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
  z-index: -1000;
  transform: scale(0);
  opacity: 0;
  transition: all 0.5s ease-out;
  display: none;

  p {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;

    span {
      display: block;
    }
  }

  &.route__change {
    z-index: 1000;
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s ease-out;

    p {
      animation: ${Thumper} 0.5s infinite alternate;
    }
  }

  ${mediaQueries.desktop} {
    display: flex;
  }
`;
