import React from "react";
import App from "next/app";
import NextNprogress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";

import "../public/main.css";
import SEO from "../next-seo.config";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NextNprogress
          color="#F56565"
          height="2"
          options={{ showSpinner: false }}
        ></NextNprogress>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
