import { CustomImage, ReturnLink } from "@/components/_shared";
import { ExhibitionIntroWrap } from "./exhibitionIntro.styles";

export const ExhibitionIntro = () => {
  return (
    <ExhibitionIntroWrap>
      <div className="return__link">
        <ReturnLink returnLink="/exhibitions" returnText="Exhibitions" />
      </div>
      <div className="content">
        <p>16 Jun 2022</p>
        <h1>Independent Beauty</h1>
        <div className="image">
          <CustomImage
            src="/images/exhibitions_cover.png"
            alt="exhibitions_cover"
            width={800}
            height={975}
          />
        </div>
      </div>
    </ExhibitionIntroWrap>
  );
};
