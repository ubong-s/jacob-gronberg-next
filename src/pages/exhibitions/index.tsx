import {
  CallToAction,
  CurrentExhibitions,
  ExhibitionsHeading,
  Layout,
  PastExhibitions,
  Seo,
  Divider,
  ResourcesFailedFetch,
} from "@/components";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getExhibitions } from "../../../sanity/sanity.utils";
import { ExhibitionProps } from "@/types/exhibition.type";

gsap.registerPlugin(ScrollTrigger);

export default function Exhibitions({
  exhibitions,
}: {
  exhibitions: ExhibitionProps[];
}) {
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
            start: "top bottom",
          },
        });
      });
    }, exhibitionRef);

    return () => ctx.revert();
  }, []);

  if (!exhibitions) {
    return <ResourcesFailedFetch resources="exhibitions" />;
  }

  return (
    <>
      <Seo title="Exhibitions" />
      <Layout>
        <ExhibitionsHeading />
        <div ref={exhibitionRef}>
          <CurrentExhibitions
            exhibitions={exhibitions.filter(
              (exhibition) => exhibition.status === "upcoming"
            )}
          />
          <Divider />
          <PastExhibitions
            exhibitions={exhibitions.filter(
              (exhibition) => exhibition.status === "completed"
            )}
          />
        </div>
        <CallToAction />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getExhibitions();

  return {
    props: {
      exhibitions: data,
    },
  };
};
