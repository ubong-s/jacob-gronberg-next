import { ProjectProps } from "@/types";
import { CustomImage } from "./customImage.component";
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

      <CustomImage src={coverImage} alt={name} height={855} width={700} />
      <p className="location">{location}</p>
      <p className="date">
        {month} {year}
      </p>
    </ProjectWrap>
  );
};
