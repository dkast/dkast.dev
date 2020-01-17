import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { createClient } from "contentful";

import Layout from "../components/layout";

const About = props => (
  <Layout>
    <div className="mt-24 lg:w-2/3 xl:w-1/2 mx-6 mb-16 lg:mx-auto">
      <ReactMarkdown
        source={props.page.fields.body}
        className="font-body font-light text-xl text-gray-700"
      />
    </div>
  </Layout>
);

About.getInitialProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const res = await client.getEntries({
    content_type: "page",
    "fields.menuId": "about"
  });

  return {
    page: res.items[0]
  };
};

export default About;
