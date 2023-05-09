import { mediaQueries } from "@/styles";
import Link from "next/link";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding: 0 1rem;
  z-index: 10;

  ${mediaQueries.desktop} {
    height: 12.5rem;
    padding: 0 4rem;
  }
`;

export const Logo = styled(Link)`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.default};
  position: relative;

  z-index: 10;

  ${mediaQueries.desktop} {
    font-size: 2.4rem;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  background-color: transparent;
  outline: none;
  border: none;
  z-index: 10;

  svg {
    width: 4rem;
    height: 2rem;
  }

  ${mediaQueries.desktop} {
    svg {
      width: 5.6rem;
      height: 2.4rem;
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1;
  text-align: center;
  transform: translateY(-100%);
  z-index: 9;

  .footer-wrap {
    padding: 0 4rem;
  }
`;

const slideup = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const MenuList = styled.ul`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex: 1;

  a {
    color: ${(props) => props.theme.colors.default};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2.5rem;
    font-weight: 300;

    &:hover,
    &.active {
      color: ${(props) => props.theme.colors.primary};
    }

    .num {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.25rem;
    }

    .text {
      position: relative;
      overflow: hidden;

      span {
        display: block;
      }

      span:nth-child(2) {
        position: absolute;
      }
    }
  }

  ${mediaQueries.desktop} {
    margin-top: 5rem;

    a {
      font-size: 6rem;
      gap: 3rem;

      .num {
        font-size: 2rem;
      }

      .text {
        &:hover {
          span {
            animation: ${slideup} 0.5s linear;
          }
        }
      }
    }
  }

  ${mediaQueries.large} {
    a {
      font-size: 8.5rem;
      gap: 4rem;

      .num {
        font-size: 3rem;
      }
    }
  }
`;
