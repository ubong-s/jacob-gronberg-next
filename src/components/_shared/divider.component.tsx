import styled from "styled-components";

const DividerWrap = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.muted};
`;

export const Divider = () => {
  return <DividerWrap></DividerWrap>;
};
