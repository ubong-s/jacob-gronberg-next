import { ProjectProps } from "@/types";
import { AnimatedImage } from "./animatedImage.component";
import { ProjectWrap } from "./project.styles";
import { formatHeadline } from "@/utils/helpers";

export const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const {
    id,
    name,
    coverImage,
    details: { location, month, year },
  } = project;
  return (
    <ProjectWrap href={`/projects/${id}`} key={id}>
      <h3 dangerouslySetInnerHTML={{ __html: formatHeadline(name) }} />

      <AnimatedImage
        src={coverImage}
        alt={name}
        height={855}
        width={700}
        identifier={id}
      />
      <p className="location">{location}</p>
      <p className="date">
        {month} {year}
      </p>
    </ProjectWrap>
  );
};
