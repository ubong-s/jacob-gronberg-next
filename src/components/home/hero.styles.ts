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

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    line-height: 2.5rem;
    height: 14rem;
    width: 14rem;
    border-radius: 50%;
    font-size: 1.8rem;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.colors.primary};
      transform: scale(1.1) translateX(0.75rem);
      z-index: 1;
    }
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

    a {
      transform: translate(-5rem, 5rem);
    }
  }
`;
