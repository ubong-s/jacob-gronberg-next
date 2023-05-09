import { CustomImage } from "@/components/_shared";
import { ProjectGalleryWrap, ProjectImage } from "./projectGallery.styles";

import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectGallery: React.FC<{ name: string; gallery: string[] }> = ({
  name,
  gallery = [],
}) => {
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
      });

      if (self && self.selector) {
        let images = self.selector(".gallery__image");

        images.forEach((image: any, index: number) => {
          gsap
            .timeline({
              defaults: {
                opacity: 0,
                ease: "ease",
              },
              scrollTrigger: {
                id: `project__image__${index}`,
                trigger: image,
                start: "top center",
              },
            })
            .to(`#project__image__${index} > .image__wrap > .overlay`, {
              xPercent: 0,
              autoAlpha: 1,
            })
            .to(`#project__image__${index} > .image__wrap > .overlay`, {
              translateX: "100%",
              autoAlpha: 1,
            })
            .from(
              `#project__image__${index} > .image__wrap > .image`,
              {
                scale: 1.2,
              },
              "<"
            );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ProjectGalleryWrap ref={containerRef}>
      {gallery.map((image, index) => (
        <ProjectImage
          key={index}
          id={`project__image__${index}`}
          className="gallery__image"
        >
          <CustomImage
            src={image}
            alt={`${name}_${index + 1}`}
            width={700}
            height={900}
          />
        </ProjectImage>
      ))}
    </ProjectGalleryWrap>
  );
};
