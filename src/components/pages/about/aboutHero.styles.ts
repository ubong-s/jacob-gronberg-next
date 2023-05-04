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
  visibility: hidden;

  h1 {
    overflow: hidden;

    span {
      display: block;

      &.small__text {
        font-size: 4rem;
        line-height: 4rem;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.default};
      }
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
        line-height: 20rem;

        span {
          &.small__text {
            margin-left: -5rem;
          }
        }
      }
    }
  }
`;
