import * as React from "react";
import "../../styles/global.scss";

const _App: React.FC = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default _App;
