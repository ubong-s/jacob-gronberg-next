import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, myTheme } from "@/styles";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
