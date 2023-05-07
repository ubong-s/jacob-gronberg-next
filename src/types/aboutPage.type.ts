import { PortableTextBlock } from "sanity";
import { ExperienceProps } from "./experience.type";
import { RecognitionProps } from "./recognition.type";

export interface AboutPageProps {
  _id: string;
  aboutHero: {
    firstName: string;
    lastName: string;
    image: string;
  };
  about: PortableTextBlock[];
  recognitions: RecognitionProps[];
  experiences: ExperienceProps[];
}
