import {
  ProjectContentAbout,
  ProjectContentInformation,
  ProjectContentWrap,
} from "./projectContent.styles";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface ProjectContentProps {
  description: PortableTextBlock[];
  details: {
    year: number;
    service: string;
    client: string;
  };
}

export const ProjectContent: React.FC<ProjectContentProps> = ({
  description,
  details,
}) => {
  return (
    <ProjectContentWrap>
      <div></div>
      <div>
        <ProjectContentAbout>
          <h2>About</h2>

          <PortableText value={description} />
        </ProjectContentAbout>

        <ProjectContentInformation>
          <ul>
            <li>
              <p>Year</p>
              <p>{details.year}</p>
            </li>
            <li>
              <p>Service</p>
              <p>{details.service}</p>
            </li>

            <li>
              <p>Client</p>
              <p>{details.client}</p>
            </li>
          </ul>
        </ProjectContentInformation>
      </div>
    </ProjectContentWrap>
  );
};
