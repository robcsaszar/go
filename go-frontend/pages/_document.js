import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#d32f2f" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}