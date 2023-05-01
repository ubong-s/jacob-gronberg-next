import { CustomImage } from "@/components/_shared";
import { ProjectGalleryWrap, ProjectImage } from "./projectGallery.styles";

interface ProjectGalleryProps {
  name: string;
  gallery: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  name,
  gallery = [],
}) => {
  return (
    <ProjectGalleryWrap>
      {gallery.map((image, index) => (
        <ProjectImage key={index}>
          <CustomImage
            src={image}
            alt={`${name}-${index}`}
            width={700}
            height={900}
          />
        </ProjectImage>
      ))}
    </ProjectGalleryWrap>
  );
};
