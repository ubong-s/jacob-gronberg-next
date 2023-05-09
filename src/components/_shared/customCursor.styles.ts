import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const CustomCursorWrap = styled.div`
  ${mediaQueries.desktop} {
    width: 20px;
    height: 20px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    transition-duration: 100ms;
    transition-timing-function: ease-out;
    z-index: 1000;

    &::after {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      border: 8px solid ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      opacity: 0.1;
      top: -8px;
      left: -8px;
      animation: cursorAnim2 0.5s infinite alternate;
    }

    @keyframes cursorAnim {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(0.7);
      }
    }

    @keyframes cursorAnim2 {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(0.4);
      }
    }

    @keyframes cursorAnim3 {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(5);
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

    &.expand {
      animation: cursorAnim3 0.5s forwards;
    }

    &.link-grow {
      transform: scale(2.5);
      border-color: ${(props) => props.theme.colors.black};
    }

    &.project__cursor {
      border: none;

      &::after {
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        content: "View Project";
        text-align: center;
        width: 50px;
        height: 50px;
        position: absolute;
        color: white;
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        border-radius: 50%;
        top: -15px;
        left: -15px;
        opacity: 1;
        animation: none;
      }
    }
  }
`;
