import { CustomImage, ReturnLink } from "@/components/_shared";
import { ProjectIntroWrap } from "./projectIntro.styles";

interface ProjectIntroProps {
  name: string;
  image: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({ name, image }) => {
  return (
    <ProjectIntroWrap>
      <div className="return__link">
        <ReturnLink returnLink="/projects" returnText="Projects" />
      </div>
      <div className="content">
        <div className="image">
          <CustomImage src={image} alt={name} width={700} height={855} />
        </div>
        <h1>{name}</h1>
      </div>
    </ProjectIntroWrap>
  );
};
