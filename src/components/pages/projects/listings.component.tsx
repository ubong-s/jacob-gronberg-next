import React from "react";
import { projects_data } from "@/constants";
import { Listing, ListingsWrap } from "./listings.styles";
import { AnimatedImage } from "../../_shared";
import { formatHeadline } from "@/utils/helpers";

export const Listings = () => {
  return (
    <ListingsWrap>
      {projects_data.map((project) => {
        const {
          id,
          name,
          coverImage,
          details: { location, month, year },
        } = project;
        return (
          <Listing href={`/projects/${id}`} key={id}>
            <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(name) }} />

            <AnimatedImage
              src={coverImage}
              alt={name}
              height={855}
              width={700}
              identifier={id}
            />
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
