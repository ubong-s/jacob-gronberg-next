import styled from "styled-components";
import { Footer } from "./footer.component";
import { Header } from "./header.component";
import { GlobalStyle, mediaQueries } from "@/styles";
import { CustomCursor } from "../_shared";

const LayoutWrap = styled.div`
  main {
    min-height: calc(100vh - 8rem); // Subtracting header height

    ${mediaQueries.desktop} {
      min-height: calc(100vh - 12.5rem); // Subtracting header height(desktop)
    }
  }
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrap>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrap>
    </>
  );
};
