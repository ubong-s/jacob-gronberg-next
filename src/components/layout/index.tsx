import styled, { css } from "styled-components";
import { Footer } from "./footer.component";
import { Header } from "./header.component";
import { CustomCursor } from "../_shared";
import { mediaQueries } from "@/styles";
import { PageLoader } from "./pageloader.component";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LayoutWrap = styled.div`
  position: relative;
`;
const LayoutWrapInner = styled.div<{ routeChangeActive: boolean }>`
  transition: all 0.3s ease-out;

  main {
    min-height: calc(100vh - 8rem); // Subtracting header height

    ${mediaQueries.desktop} {
      min-height: calc(100vh - 12.5rem); // Subtracting header height(desktop)
    }
  }

  ${(props) => props.routeChangeActive && css``}
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [routeChangeActive, setRouteChangeActive] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRouteChangeActive(false);
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setRouteChangeActive(true);
    });
    router.events.on("routeChangeComplete", () => {
      setRouteChangeActive(false);
    });
    router.events.on("routeChangeError", () => {
      setRouteChangeActive(false);
    });
  }, [router.events]);

  return (
    <LayoutWrap>
      <LayoutWrapInner routeChangeActive={routeChangeActive}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrapInner>
      <PageLoader routeChangeActive={routeChangeActive} />
    </LayoutWrap>
  );
};
