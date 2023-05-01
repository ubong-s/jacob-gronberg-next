import { CustomButton } from "@/components/_shared";
import Link from "next/link";
import {
  ProjectContentAbout,
  ProjectContentInformation,
  ProjectContentWrap,
} from "./projectContent.styles";
import { VisitLink } from "@/components/icons";

interface ProjectContentProps {
  description: string;
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

          <div dangerouslySetInnerHTML={{ __html: description }} />
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
