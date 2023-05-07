import { CustomImage, ReturnLink } from "@/components/_shared";
import { ExhibitionIntroWrap } from "./exhibitionIntro.styles";

export const ExhibitionIntro = ({
  name,
  date,
  image,
}: {
  name: string;
  date: Date;
  image: string;
}) => {
  return (
    <ExhibitionIntroWrap>
      <div className="return__link">
        <ReturnLink returnLink="/exhibitions" returnText="Exhibitions" />
      </div>
      <div className="content">
        <p>{new Date(date).toString().substring(4, 15)}</p>
        <h1>{name}</h1>
        <div className="image">
          <CustomImage src={image} alt={name} width={800} height={975} />
        </div>
      </div>
    </ExhibitionIntroWrap>
  );
};
