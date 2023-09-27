import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class ApplicationDocument extends NextDocument {
  render() {
    return (
      <Html lang="de">
        <Head>
          {/* eslint-disable-next-line @next/next/google-font-display */}
          <link
            href="https://fonts.googleapis.com/css?family=Comfortaa"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ApplicationDocument;
