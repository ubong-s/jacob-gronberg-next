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

  ${mediaQueries.desktop} {
    gap: 0;
    grid-template-columns: 0.9fr 1fr;
  }
`;

export const HeroLeft = styled.div`
  position: relative;

  p {
    text-transform: uppercase;
    font-size: 4rem;
    line-height: 4.8rem;

    span {
      display: block;
    }
  }

  ${mediaQueries.desktop} {
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

  .scroll__down__btn {
    position: absolute;
    right: 0;
    bottom: -7rem;
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    text-align: left;
    line-height: 2.56rem;

    span {
      margin-bottom: 2rem;
    }
  }

  ${mediaQueries.tablet} {
    img {
      display: block;
      height: auto;
    }
  }

  ${mediaQueries.desktop} {
    .scroll__down__btn {
      bottom: -10rem;
      right: 20%;
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

  & > div {
    display: none;
  }

  .btn-control {
  }

  ${mediaQueries.desktop} {
    left: 0;
    transform: translateX(0);
    display: flex;
    align-items: flex-end;

    & > div {
      display: block;

      p {
        font-size: 1.6rem;
        margin-top: 1rem;
      }
    }

    .btn-control {
      transform: translate(-5rem, 5rem);
    }
  }
`;
