import Link from "next/link";
import { ProjectProps } from "@/types";
import { AnimatedImage } from "./animatedImage.component";
import { Project, ProjectsListingWrap } from "./projectListing.styles";
import { formatHeadline } from "@/utils/helpers";

export const ProjectListing: React.FC<{ projects: ProjectProps[] }> = ({
  projects,
}) => {
  return (
    <ProjectsListingWrap>
      {projects.map(
        ({ id, name, coverImage, details: { location, year, month } }) => (
          <Project href={`/projects/${id}`} key={id}>
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
          </Project>
        )
      )}
    </ProjectsListingWrap>
  );
};
