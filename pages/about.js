import React from "react";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";

import Layout from "../components/layout";
import { getPageContent } from "../lib/cms";

const About = ({ mdxSource }) => {
  const content = hydrate(mdxSource, {});

  return (
    <Layout>
      <Head>
        <title>Acerca de mi - Daniel Castillejo</title>
      </Head>
      <div className="mt-24 max-w-2xl mb-16 mx-auto">
        <div className="prose lg:prose-lg prose-red max-w-none">{content}</div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const mdxSource = await getPageContent("about");

  return { props: { mdxSource } };
};

export default About;
