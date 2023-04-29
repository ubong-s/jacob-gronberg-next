import React from "react";
import { SectionHeading, ExhibitionsList } from "../../_shared";
import { exhibitions_data } from "@/constants";
import { ExhibitionsWrap } from "./index.styles";

export const PastExhibitions = () => {
  return (
    <ExhibitionsWrap>
      <h2>
        Past <span>exhibitions</span>
      </h2>
      <ExhibitionsList
        exhibitions={exhibitions_data.filter(
          (exhibition) => exhibition.status === "completed"
        )}
      />
    </ExhibitionsWrap>
  );
};
