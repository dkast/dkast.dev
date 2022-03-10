import React from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

import Layout from "@components/Layout";
import Markdown from "@components/Markdown";
import { getPageContent } from "@lib/cms";

const About = ({ mdxSource }) => {
  return (
    <Layout>
      <Head>
        <title>Acerca de mi - Daniel Castillejo</title>
      </Head>
      <div className="mt-24 max-w-2xl mb-16 mx-auto">
        <Markdown className="max-w-none">
          <MDXRemote {...mdxSource} />
        </Markdown>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const mdxSource = await getPageContent("about");

  return { props: { mdxSource } };
};

export default About;
