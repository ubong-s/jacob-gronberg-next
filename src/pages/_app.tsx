import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, myTheme } from "@/styles";
import "@/styles/fonts.css";
import { useEffect, useLayoutEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
