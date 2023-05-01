import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const ProjectContentWrap = styled.section`
  width: 90%;
  max-width: 114.7rem;
  margin: auto;
  padding: 0 0 4rem;
  display: grid;
  gap: 3rem;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.default};
    margin-bottom: 4rem;
    font-size: 2.4rem;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 0.5fr 1fr;

    h2 {
      font-size: 3rem;
    }
  }
`;
export const ProjectContentAbout = styled.div`
  margin-bottom: 4rem;

  & > div {
    line-height: 3rem;

    span {
      display: block;
      margin-bottom: 2rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const ProjectContentInformation = styled.div`
  width: 100%;
  ul {
    width: 100%;
    li {
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: space-between;
      padding: 2.5rem 0;
      border-bottom: 1px solid ${(props) => props.theme.colors.muted};

      p:first-of-type {
        color: ${(props) => props.theme.colors.primary};
        text-transform: uppercase;
      }
    }
  }
`;
