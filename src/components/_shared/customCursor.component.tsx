import { mediaQueries } from "@/styles";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const CustomCursorWrap = styled.div`
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

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      // @ts-ignore
      cursorRef.current.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      // @ts-ignore
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (cursorRef.current == null) return;
        // @ts-ignore
        cursorRef.current.classList.remove("expand");
      }, 500);
    });

    const links = document.querySelectorAll("a");

    if (links && links.length > 0) {
      links.forEach((link) => {
        link.addEventListener("mouseover", () => {
          // @ts-ignore
          cursorRef.current.classList.add("link-grow");
        });

        link.addEventListener("mouseleave", () => {
          // @ts-ignore
          cursorRef.current.classList.remove("link-grow");
        });
      });
    }

    const projectCards = document.querySelectorAll(".project__card");
    if (projectCards && projectCards.length > 0) {
      projectCards.forEach((project) => {
        project.addEventListener("mouseover", () => {
          // @ts-ignore
          cursorRef.current.classList.add("project__cursor");
        });

        project.addEventListener("mouseleave", () => {
          // @ts-ignore
          cursorRef.current.classList.remove("project__cursor");
        });
      });
    }
  }, []);

  return <CustomCursorWrap ref={cursorRef}> </CustomCursorWrap>;
};
