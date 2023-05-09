import { useEffect, useRef } from "react";
import { CustomCursorWrap } from "./customCursor.styles";

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
