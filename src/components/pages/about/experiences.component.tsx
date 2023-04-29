import { GenericListItem } from "@/components/_shared";
import { experiences_data } from "@/constants";
import { AboutSectionWrap } from "./index.styles";

export const Experiences = () => {
  const items = experiences_data.map((item) => {
    return {
      id: item.id,
      title: item.role,
      subtitle: item.company,
      rightText: item.timeline,
    };
  });

  return (
    <AboutSectionWrap>
      <h2>Experiences</h2>
      <GenericListItem items={items} />
    </AboutSectionWrap>
  );
};
