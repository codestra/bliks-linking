import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from "@mui/material";
import "@mui/styles";
import { NextPage } from "next";
import { AppProps } from "next/app";
import * as React from "react";
import createEmotionCache from "../services/emotionCache/createEmotionCache";
import theme from "../services/theming";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type _AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const _App: React.FC<_AppPropsWithLayout> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: any) => {
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />)
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default _App;
