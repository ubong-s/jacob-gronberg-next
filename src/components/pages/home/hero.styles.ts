import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const HeroWrap = styled.section`
  position: relative;
  text-align: center;
  padding-top: 3rem;
  width: 90%;
  max-width: 142rem;
  margin: auto;
  margin-bottom: 10rem;

  ${mediaQueries.desktop} {
    text-align: left;
    margin-bottom: 12rem;
  }
`;

export const HeroWrapInner = styled.div`
  position: relative;
  display: grid;
  gap: 5rem;
  visibility: hidden;

  ${mediaQueries.desktop} {
    gap: 0;
    grid-template-columns: 0.9fr 1fr;
  }
`;

export const HeroLeft = styled.div`
  position: relative;

  .heading__wrap,
  .text__wrap {
    overflow: hidden;

    span {
      display: inline-block;
    }
  }

  p {
    text-transform: uppercase;
    font-size: 4rem;
    line-height: 4.8rem;

    span {
      display: block;
    }
  }

  ${mediaQueries.desktop} {
    .heading__wrap__two {
      padding-bottom: 3rem;
    }

    p {
      font-size: 6rem;
      line-height: 6.6rem;

      span:first-of-type {
        padding-left: 18rem;
      }

      span:last-of-type {
        padding-left: 28rem;
      }
    }

    & > div {
      position: absolute;
      z-index: 2;
      top: 40%;
      transform: translateY(-50%);
    }
  }
`;

export const HeroRight = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 60rem;
    object-fit: cover;
    object-position: top;
  }

  .scroll__down {
    display: inline-block;
    position: absolute;
    right: 20%;
    bottom: -7rem;
    font-size: 1.2rem;
  }

  ${mediaQueries.tablet} {
    img {
      display: block;
      height: auto;
    }
  }

  ${mediaQueries.desktop} {
    .scroll__down {
      bottom: -10rem;
      right: 20%;
      font-size: 1.6rem;
    }

    img {
      position: relative;
      z-index: 1;
    }
  }
`;

export const HeroCTA = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, calc(50% - 1.25rem));

  .cta__image {
    display: none;
  }

  .btn__control {
  }

  ${mediaQueries.desktop} {
    left: 0;
    transform: translateX(0);
    display: flex;
    align-items: flex-end;

    .cta__image {
      display: block;

      p {
        font-size: 1.6rem;
        margin-top: 1rem;
      }
    }

    .btn__control {
      transform: translate(-5rem, 5rem);
    }
  }
`;
