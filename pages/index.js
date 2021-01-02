import React from "react";
import Head from "next/head";
import { GitHub, Twitter, Instagram } from "react-feather";
import { createClient } from "contentful";

import Layout from "../components/layout";
import PostItem from "../components/postItem";

const Home = (props) => (
  <Layout>
    <div className="mt-24 lg:w-2/3 xl:w-1/2 mx-6 mb-16 lg:mx-auto">
      <h1 className="font-display text-5xl mb-6">
        <strong>Hola,</strong>
        <br />
        mi nombre es{" "}
        <span className="text-red-500 bg-red-100">Daniel Castillejo</span>.
      </h1>
      <h2 className="font-display text-2xl">
        Soy Desarrollador de Software, entusiasta del Diseño y amante de la
        Música.
      </h2>
      <div className="flex justify-between w-1/3 mt-8 mb-32">
        <div className="hover:bg-gray-900 hover:text-white text-gray-600 rounded-full">
          <a href="https:\\github.com\dkast" className="p-2 block">
            <GitHub></GitHub>
          </a>
        </div>
        <div className="hover:bg-blue-300 hover:text-blue-600 text-gray-600 rounded-full">
          <a href="https:\\twitter.com\dkast" className="p-2 block">
            <Twitter></Twitter>
          </a>
        </div>
        <div className="hover:bg-pink-600 hover:text-white text-gray-600 rounded-full">
          <a href="https:\\instragram.com\dkast" className="p-2 block">
            <Instagram></Instagram>
          </a>
        </div>
      </div>
      <h2 className="font-body text-xl mb-4 text-gray-600">Últimas entradas</h2>
      {props.posts.map((post) => (
        <PostItem key={post.sys.id} post={post} />
      ))}
    </div>
  </Layout>
);

Home.getInitialProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    limit: 10,
    order: "-sys.createdAt",
  });

  return {
    posts: res.items,
  };
};

export default Home;
