import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const FooterCreditsWrap = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;

  .social__list {
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.default};
    }
  }

  .credits {
    a {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 400;
    }
  }

  ${mediaQueries.desktop} {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    margin-bottom: 3rem;

    .social__list {
      gap: 3rem;
    }
  }
`;
