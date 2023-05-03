import styled from "styled-components";

export const CustomImageWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;

  .overlay {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 2;
    transform: translateX(-105%);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
