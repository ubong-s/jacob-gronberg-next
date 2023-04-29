import React from "react";
import { SectionHeading, ExhibitionsList } from "../_shared";
import { exhibitions_data } from "@/constants";
import { ExhibitionsWrap } from "./index.styles";

export const CurrentExhibitions = () => {
  return (
    <ExhibitionsWrap id="exhibitions">
      <h2>
        Current <span>exhibitions</span>
      </h2>
      <ExhibitionsList
        exhibitions={exhibitions_data.filter(
          (exhibition) => exhibition.status === "upcoming"
        )}
      />
    </ExhibitionsWrap>
  );
};
