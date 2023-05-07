import styled from "styled-components";
import { Layout } from "../layout";
import { CircularButton } from "./circularButton.component";
import { mediaQueries } from "@/styles";

const ResourcesFailedFetchWrap = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  max-width: 90rem;
  margin: auto;

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    text-align: center;
  }

  ${mediaQueries.desktop} {
    h1 {
      font-size: 10rem;
      line-height: 10rem;
    }
  }
`;

export const ResourcesFailedFetch = ({ resources }: { resources: string }) => {
  return (
    <Layout>
      <ResourcesFailedFetchWrap>
        <h1>Failed to load {resources}</h1>
        <CircularButton link={`/${resources}`} title={`Refresh ${resources}`} />
      </ResourcesFailedFetchWrap>
    </Layout>
  );
};
