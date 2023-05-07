import { CircularButton, Layout } from "@/components";
import { mediaQueries } from "@/styles";
import styled from "styled-components";

const NotFoundWrap = styled.div`
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

export default function NotFound() {
  return (
    <Layout>
      <NotFoundWrap>
        <h1>Page not found</h1>
        <CircularButton link="/" title="Back to home" />
      </NotFoundWrap>
    </Layout>
  );
}
