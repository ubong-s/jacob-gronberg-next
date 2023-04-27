import styled from "styled-components";

export const AnimatedImageWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  opacity: 0;

  .overlay {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 2;
  }

  img {
    display: block;
  }
`;
