import Image from "next/image";
import { CustomImageWrap } from "./customImage.styles";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface CustomImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  height,
  width,
}) => {
  const imageRef = useRef(null);

  // useIsomorphicLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap
  //       .timeline({
  //         defaults: {
  //           opacity: 0,
  //           ease: "ease",
  //         },
  //         scrollTrigger: {
  //           trigger: imageRef.current,
  //           start: "top 10%",
  //         },
  //       })
  //       .to(imageRef.current, {
  //         autoAlpha: 1,
  //       })
  //       .to(".overlay", {
  //         xPercent: 0,
  //         autoAlpha: 1,
  //       })
  //       .to(".overlay", {
  //         translateX: "100%",
  //         autoAlpha: 1,
  //       })

  //       .from(
  //         ".image",
  //         {
  //           scale: 1.2,
  //         },
  //         "<"
  //       );
  //   }, imageRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <CustomImageWrap className="image__wrap" ref={imageRef}>
      <div className="overlay"></div>
      <Image
        className="image"
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </CustomImageWrap>
  );
};
