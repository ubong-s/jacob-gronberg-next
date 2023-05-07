import React from "react";
import { ExhibitionsList } from "../../_shared/exhibitionsList.component";
import { exhibitions_data } from "@/constants";
import { ExhibitionsWrap } from "./exhibitions.styles";

import { SectionHeading } from "../../_shared";
import { ExhibitionProps } from "@/types/exhibition.type";

export const ExhibitionsComponent = ({
  exhibitions,
}: {
  exhibitions: ExhibitionProps[];
}) => {
  return (
    <ExhibitionsWrap>
      <SectionHeading
        titleLeft="Exhibitions"
        titleRight={`'22`}
        link="/exhibitions"
      />

      <ExhibitionsList exhibitions={exhibitions} />
    </ExhibitionsWrap>
  );
};
