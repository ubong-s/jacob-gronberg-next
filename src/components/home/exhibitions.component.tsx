import React from "react";
import { ExhibitionsList } from "../_shared/exhibitionsList.component";
import { exhibitions_data } from "@/constants";
import { ExhibitionsWrap } from "./exhibitions.styles";
import Link from "next/link";
import { ArrowRight } from "../icons";

export const ExhibitionsComponent = () => {
  return (
    <ExhibitionsWrap>
      <div className="heading">
        <h2>
          Exhibitions<span>{" '22"}</span>
        </h2>

        <Link href="/exhibitions">
          View All
          <ArrowRight />
        </Link>
      </div>

      <ExhibitionsList
        exhibitions={exhibitions_data.filter(
          (exhibition) => exhibition.status === "upcoming"
        )}
      />
    </ExhibitionsWrap>
  );
};
