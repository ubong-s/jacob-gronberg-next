import { Exhibition } from "./exhibition.component";
import { ExhibitionsListWrap } from "./exhibitionsList.styles";
import { ExhibitionProps } from "@/types/exhibition.type";

export const ExhibitionsList: React.FC<{ exhibitions: ExhibitionProps[] }> = ({
  exhibitions,
}) => {
  return (
    <ExhibitionsListWrap>
      {exhibitions.map((exhibition) => {
        return <Exhibition key={exhibition._id} exhibition={exhibition} />;
      })}
    </ExhibitionsListWrap>
  );
};
