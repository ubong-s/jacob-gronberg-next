import Link from "next/link";
import styled from "styled-components";

export const CircularButtonLink = styled(Link)`
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
  text-align: center;

  span {
    padding: 2rem;
  }

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
`;
