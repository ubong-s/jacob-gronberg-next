import {
  CallToAction,
  CurrentExhibitions,
  ExhibitionsHeading,
  Layout,
  PastExhibitions,
  Seo,
  Divider,
} from "@/components";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Exhibitions() {
  const exhibitionRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      // @ts-ignore
      const headings = self.selector(".heading__exhibition");

      headings.forEach((element: any) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: element,
            start: "top center+=100px",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, exhibitionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Seo title="Exhibitions" />

      <Layout>
        <ExhibitionsHeading />
        <div ref={exhibitionRef}>
          <CurrentExhibitions />
          <Divider />
          <PastExhibitions />
        </div>
        <CallToAction />
      </Layout>
    </>
  );
}
