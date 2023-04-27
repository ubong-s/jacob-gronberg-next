import { mediaQueries } from "@/styles";
import Link from "next/link";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.body};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding: 0 2rem;

  ${mediaQueries.desktop} {
    height: 12.5rem;
    padding: 0 4rem;
  }
`;

export const Logo = styled(Link)`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.default};
  position: relative;
  z-index: 2;

  ${mediaQueries.desktop} {
    font-size: 2.4rem;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  z-index: 2;
  background-color: transparent;
  outline: none;
  border: none;
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
`;

export const MenuFooter = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;

  .social_list {
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.default};
    }
  }

  .credits {
    a {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 400;
    }
  }

  ${mediaQueries.desktop} {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 4rem;
    font-size: 1.6rem;
    margin-bottom: 3rem;

    .social_list {
      gap: 3rem;
    }
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

      &:hover {
        span {
          animation: ${slideup} 0.5s linear;
        }
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
