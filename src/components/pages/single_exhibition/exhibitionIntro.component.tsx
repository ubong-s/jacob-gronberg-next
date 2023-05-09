import { useRef } from "react";
import { CustomImage, ReturnLink } from "@/components/_shared";
import { ExhibitionIntroWrap } from "./exhibitionIntro.styles";
import { useGlobalContext } from "@/context/global";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

export const ExhibitionIntro = ({
  name,
  date,
  image,
}: {
  name: string;
  date: Date;
  image: string;
}) => {
  const { menuOpen } = useGlobalContext();
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: "ease" },
        })
        .to(containerRef.current, {
          autoAlpha: 1,
        })
        .from(".content > p", {
          y: -50,
        })
        .from(".content h1", {})
        .to(".image > .image__wrap > .overlay", {
          xPercent: 0,
          autoAlpha: 1,
        })
        .to(".image > .image__wrap > .overlay", {
          translateX: "100%",
          autoAlpha: 1,
        })
        .from(
          ".image > .image__wrap > .image",
          {
            scale: 1.2,
          },
          "<"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ExhibitionIntroWrap ref={containerRef}>
      <div className={menuOpen ? "return__link menu__open" : "return__link"}>
        <ReturnLink returnLink="/exhibitions" returnText="Exhibitions" />
      </div>
      <div className="content">
        <p>{new Date(date).toString().substring(4, 15)}</p>
        <h1>{name}</h1>
        <div className="image">
          <CustomImage src={image} alt={name} width={800} height={975} />
        </div>
      </div>
    </ExhibitionIntroWrap>
  );
};
