import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const TestimonialsWrap = styled.section`
  width: 90%;
  max-width: 142rem;
  margin: auto;

  .intro {
    h2 {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.default};
      font-size: 4.8rem;
      line-height: 4.8rem;
      margin-bottom: 2rem;

      span {
        color: ${(props) => props.theme.colors.primary};
        text-transform: capitalize;
      }
    }

    p {
      font-size: 2.4rem;
      line-height: 2.4rem;
      text-transform: uppercase;

      span {
        display: inline-block;
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    gap: 6rem;

    .intro {
      h2 {
        font-size: 7rem;
        line-height: 7rem;
      }

      p {
        font-size: 3rem;
        line-height: 3rem;
      }
    }
  }
`;

export const Testimonial = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 4rem;
  padding: 5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.muted};

  &:last-of-type {
    border-bottom: none;
  }

  .highlight {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
    line-height: 2rem;

    h3 {
      margin-bottom: 0;
      color: ${(props) => props.theme.colors.default};
    }
  }

  .full__quote {
    margin: 1rem 0 2rem;
  }

  .name__role {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ${mediaQueries.desktop} {
    &:first-of-type {
      padding-top: 0;
    }

    .highlight {
      gap: 3rem;
      font-size: 3rem;
      line-height: 3rem;
    }

    .full__quote {
      margin: 2.5rem 0 3.5rem;
    }
  }
`;
