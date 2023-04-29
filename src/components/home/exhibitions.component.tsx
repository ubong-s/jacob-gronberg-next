import React from "react";
import { ExhibitionsList } from "../_shared/exhibitionsList.component";
import { exhibitions_data } from "@/constants";
import { ExhibitionsWrap } from "./exhibitions.styles";
import Link from "next/link";
import { ArrowRight } from "../icons";
import { SectionHeading } from "../_shared";

export const ExhibitionsComponent = () => {
  return (
    <ExhibitionsWrap>
      <SectionHeading
        titleLeft="Exhibitions"
        titleRight={`'22`}
        link="/exhibitions"
      />

      <ExhibitionsList
        exhibitions={exhibitions_data.filter(
          (exhibition) => exhibition.status === "upcoming"
        )}
      />
    </ExhibitionsWrap>
  );
};
