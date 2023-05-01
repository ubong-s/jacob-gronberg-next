import Image from "next/image";
import { CustomImageWrap } from "./customImage.styles";

interface CustomImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  height,
  width,
}) => {
  return (
    <CustomImageWrap className="image__wrap image__wrap">
      <div className="overlay overlay"></div>
      <Image
        className="image"
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </CustomImageWrap>
  );
};
