import styled, { css } from "styled-components";
import { CustomButtonProps } from "./customButton.component";

export const CustomButtonWrap = styled.button<{
  variant: "primary" | "default";
}>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  outline: none;
  text-transform: capitalize;
  padding: 1.6rem 2rem;
  border-radius: 10rem;
  transition: background 0.3s ease;

  svg {
    stroke: ${(props) => props.theme.colors.primary};
    transition: stroke 0.3s ease;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};

    svg {
      stroke: ${(props) => props.theme.colors.white};
    }
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};

      svg {
        stroke: ${(props) => props.theme.colors.white};
      }

      &:hover {
        color: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.primary};

        svg {
          stroke: ${(props) => props.theme.colors.primary};
        }
      }
    `}
`;
