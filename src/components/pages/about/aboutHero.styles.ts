import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const AboutHeroWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
  align-items: center;
  text-align: center;
  padding: 3rem 0;

  h1 {
    span {
      display: block;
      font-size: 4rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.default};
      line-height: 4rem;
    }
  }

  ${mediaQueries.desktop} {
    display: grid;
    gap: 0;
    grid-template-columns: 0.9fr 1fr;
    padding: 7rem 0;

    .left__image {
      img {
        width: 100%;
        object-fit: cover;
        object-position: top;
      }
    }

    .right__content {
      h1 {
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-20%);

        span {
          margin-left: -5rem;
        }
      }
    }
  }
`;
