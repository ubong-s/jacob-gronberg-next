import { CustomImage } from "@/components/_shared";
import { ProjectGalleryWrap, ProjectImage } from "./projectGallery.styles";
import { GalleryProps } from "@/types/project.type";

export const ProjectGallery: React.FC<{ name: string; gallery: string[] }> = ({
  name,
  gallery = [],
}) => {
  return (
    <ProjectGalleryWrap>
      {gallery.map((image, index) => (
        <ProjectImage key={index}>
          <CustomImage
            src={image}
            alt={`${name}_${index + 1}`}
            width={700}
            height={900}
          />
        </ProjectImage>
      ))}
    </ProjectGalleryWrap>
  );
};
