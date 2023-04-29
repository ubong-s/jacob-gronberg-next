import React from "react";
import { GenericListItemWrap } from "./genericListItem.styles";

interface GenericListItemProps {
  id: number;
  title: string;
  subtitle: string;
  rightText: string;
}

export const GenericListItem: React.FC<{ items: GenericListItemProps[] }> = ({
  items,
}) => {
  return (
    <GenericListItemWrap>
      {items.map(({ id, title, subtitle, rightText }) => (
        <li key={id}>
          <div>
            <h4 className="title">{title}</h4>
            <p className="subtitle">{subtitle}</p>
          </div>
          <p className="right__text">{rightText}</p>
        </li>
      ))}
    </GenericListItemWrap>
  );
};
