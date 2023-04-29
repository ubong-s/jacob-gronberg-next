import { ScrollDownButton } from "../_shared";
import { ExhibitionsHeadingWrap } from "./exhibitionsHeading.styles";

export const ExhibitionsHeading = () => {
  return (
    <ExhibitionsHeadingWrap>
      <div>
        <h1>Exhibtions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          perspiciatis facilis iste dolorem asperiores, cumque fugit quis aut
          repellat natus.
        </p>
      </div>

      <div className="scroll__down">
        <ScrollDownButton link="#exhibitions" />
      </div>
    </ExhibitionsHeadingWrap>
  );
};
