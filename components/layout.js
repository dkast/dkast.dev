import Head from "next/head";

import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Daniel Castillejo</title>
      <link rel="shortcut icon" href="/favicon.ico"></link>
      <link rel="icon" sizes="192x192" href="/favicon-192x192.png"></link>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <meta
        name="msapplication-square150x150logo"
        content="/ms-icon-150x150.png"
      ></meta>
    </Head>
    <div className="flex flex-col min-h-screen bg-white dark:bg-trueGray-900">
      <Nav></Nav>
      <div className="flex-grow px-6">{children}</div>
      <Footer></Footer>
    </div>
  </>
);

export default Layout;
