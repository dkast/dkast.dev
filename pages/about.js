import React from "react";
import Head from "next/head";
import { createClient } from "contentful";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import Layout from "../components/layout";

const About = ({ mdxSource }) => {
  const content = hydrate(mdxSource, {});

  return (
    <Layout>
      <div className="mt-24 lg:w-2/3 xl:w-1/2 mx-6 mb-16 lg:mx-auto">
        <div className="prose prose-lg prose-red max-w-none">{content}</div>
      </div>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const pageQuery = await client.getEntries({
    content_type: "page",
    "fields.menuId": "about"
  });

  const page = pageQuery.items[0];
  const mdxSource = await renderToString(page.fields.body, {});

  return {
    page: page,
    mdxSource: mdxSource
  };
};

export default About;
