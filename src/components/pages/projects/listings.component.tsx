import React, { useRef } from "react";
import { projects_data } from "@/constants";
import { Listing, ListingsWrap } from "./listings.styles";
import { CustomImage } from "../../_shared";
import { formatHeadline, useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

import { ProjectProps } from "@/types/project.type";

export const Listings = ({ projects }: { projects: ProjectProps[] }) => {
  const listingsContainer = useRef(null);
  const listingRefs = useRef<any[]>([]);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(listingsContainer.current, {
        autoAlpha: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: listingsContainer.current,
          start: "top bottom",
        },
      });

      listingRefs.current.forEach((listing, index) => {
        gsap
          .timeline({
            defaults: {
              opacity: 0,
              ease: "ease",
            },
            scrollTrigger: {
              id: `listing__${index}`,
              trigger: listing,
              start: "top bottom",
            },
          })
          .to(listing, {
            autoAlpha: 1,
          })
          .from(`#listing__${index} h3`, {
            y: 20,
          })
          .to(
            `#listing__${index} .image__wrap > .overlay`,
            {
              xPercent: 0,
              autoAlpha: 1,
            },
            "<"
          )
          .to(`#listing__${index} .image__wrap > .overlay`, {
            translateX: "101%",
            autoAlpha: 1,
          })
          .from(
            `#listing__${index} .image__wrap > .image`,
            {
              scale: 1.2,
            },
            "<"
          )
          .from(`#listing__${index} p`, {
            y: 20,
            stagger: {
              amount: 1,
            },
          });
      });
    }, listingsContainer);

    return () => ctx.revert();
  }, []);

  const addListingToRefs = (el: any) => {
    if (el && !listingRefs.current.includes(el)) {
      listingRefs.current.push(el);
    }
  };

  return (
    <ListingsWrap ref={listingsContainer}>
      {projects.map((project, index) => {
        const {
          _id,
          name,
          coverImage,
          slug,
          details: { location, month, year },
        } = project;
        return (
          <Listing
            href={`/projects/${slug}`}
            key={_id}
            ref={addListingToRefs}
            id={`listing__${index}`}
            className="project__card"
          >
            <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(name) }} />

            <CustomImage src={coverImage} alt={name} height={855} width={700} />
            <p className="location">{location}</p>
            <p className="date">
              {month} {year}
            </p>
          </Listing>
        );
      })}
    </ListingsWrap>
  );
};
