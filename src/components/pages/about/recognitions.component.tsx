import { GenericListItem } from "@/components/_shared";
import { recognitions_data } from "@/constants";
import { AboutSectionWrap } from "./index.styles";

export const Recognitions = () => {
  const items = recognitions_data.map((item) => {
    return {
      id: item.id,
      title: item.award,
      subtitle: item.date,
      rightText: item.organisation,
    };
  });

  return (
    <AboutSectionWrap>
      <h2>Recognitions</h2>
      <GenericListItem items={items} />
    </AboutSectionWrap>
  );
};
