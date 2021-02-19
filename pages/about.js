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
      <div className="mt-24 max-w-2xl mb-16 mx-auto">
        <div className="prose lg:prose-lg prose-red max-w-none">{content}</div>
      </div>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
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
