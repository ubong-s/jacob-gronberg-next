import { CustomButtonWrap } from "./customButton.styles";

export interface CustomButtonProps {
  text: string;
  variant: "primary" | "default";
}

export const CustomButton = ({
  text,
  variant = "default",
}: CustomButtonProps) => {
  return (
    <CustomButtonWrap variant={variant}>
      <span>{text}</span>
      <svg
        width="32"
        height="16"
        viewBox="0 0 32 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 8H30" />
        <path d="M23.5 1L30.5 8L23.5 15" />
      </svg>
    </CustomButtonWrap>
  );
};
