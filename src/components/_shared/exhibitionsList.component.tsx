import React from "react";
import { Exhibition } from "./exhibition.component";
import { ExhibitionsListWrap } from "./exhibitionsList.styles";
import { ExhibitionProps } from "@/types";

export const ExhibitionsList: React.FC<{ exhibitions: ExhibitionProps[] }> = ({
  exhibitions,
}) => {
  return (
    <ExhibitionsListWrap>
      {exhibitions.map((exhibition) => {
        return <Exhibition key={exhibition.id} exhibition={exhibition} />;
      })}
    </ExhibitionsListWrap>
  );
};
