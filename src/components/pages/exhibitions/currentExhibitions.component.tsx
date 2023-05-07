import React from "react";
import { SectionHeading, ExhibitionsList } from "../../_shared";
import { exhibitions_data } from "@/constants";
import { ExhibitionsWrap } from "./index.styles";
import { ExhibitionProps } from "@/types/exhibition.type";

export const CurrentExhibitions = ({
  exhibitions,
}: {
  exhibitions: ExhibitionProps[];
}) => {
  return (
    <ExhibitionsWrap id="exhibitions">
      <h2 className="heading__exhibition">
        Current <span>exhibitions</span>
      </h2>
      <ExhibitionsList exhibitions={exhibitions} />
    </ExhibitionsWrap>
  );
};
