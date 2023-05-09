import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, myTheme } from "@/styles";
import { useRouter } from "next/router";
import { GlobalProvider } from "@/context/global";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalProvider>
        {router.asPath.startsWith("/admin") ? (
          <Component {...pageProps} />
        ) : (
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        )}
      </GlobalProvider>
    </ThemeProvider>
  );
}
