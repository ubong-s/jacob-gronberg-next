import styled, { keyframes } from "styled-components";

const Thumper = keyframes`
  0% {
  transform: scale(1)
  }
  100% {
  transform: scale(1.05)
  }
`;

export const PageLoaderWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.body};
  z-index: -1000;
  transform: scale(0);
  opacity: 0;
  transition: all 0.5s ease-out;

  p {
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;

    span {
      display: block;
    }
  }

  &.route__change {
    z-index: 1000;
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s ease-out;

    p {
      animation: ${Thumper} 0.5s infinite alternate;
    }
  }
`;
