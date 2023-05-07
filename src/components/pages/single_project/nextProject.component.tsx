import { CircularButton, CustomImage } from "@/components/_shared";
import { NextProjectWrap } from "./nextProject.styles";

interface NextProjectProps {
  name?: string;
  image?: string;
  url?: string;
}

export const NextProject: React.FC<NextProjectProps> = ({
  name,
  image,
  url,
}) => {
  if (!image || !name || !url) {
    return null;
  }

  return (
    <NextProjectWrap>
      <p>Next Project</p>
      <h2>{name}</h2>

      <div className="image">
        <CustomImage src={image} alt={name} width={700} height={855} />
      </div>
      <div className="btn">
        <CircularButton link={url} title="Discover" />
      </div>
    </NextProjectWrap>
  );
};
