import { CircularButtonLink } from "./circularButton.styles";

interface CircularButtonProps {
  link: string;
  title: string;
}

export const CircularButton: React.FC<CircularButtonProps> = ({
  link,
  title,
}) => {
  return (
    <CircularButtonLink href={link}>
      <span>{title}</span>
    </CircularButtonLink>
  );
};
