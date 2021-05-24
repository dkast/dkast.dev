import React from "react";
import Icon from "supercons";

import Layout from "@components/layout";
import PostItem from "@components/postItem";
import PostCard from "@components/postCard";
import { getAllPostsForHome } from "@lib/cms";

const Home = ({ posts }) => {
  return (
    <Layout>
      <div className="mt-24 lg:w-2/3 xl:w-1/2 mb-16 lg:mx-auto">
        <h1 className="font-display font-semibold lg:text-5xl text-4xl mb-6 dark:text-gray-200">
          Hola,
          <br />
          mi nombre es{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-400 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
            Daniel Castillejo
          </span>
        </h1>
        <h2 className="text-gray-700 dark:text-gray-400 font-body text-xl lg:text-2xl">
          Soy Desarrollador de Software, entusiasta del Diseño y amante de la
          Música.
        </h2>
        <div className="flex justify-between w-2/3 lg:w-1/3 mt-8 mb-32">
          <div className="transition duration-300 transform hover:scale-110 hover:text-gray-900 dark:hover:text-gray-300 text-gray-400 rounded-full">
            <a href="https:\\github.com\dkast" className="p-2 block">
              <Icon glyph="github-fill" size={40} />
            </a>
          </div>
          <div className="transition duration-300 transform hover:scale-110 hover:text-blue-400 text-gray-400 rounded-full">
            <a href="https:\\twitter.com\dkast" className="p-2 block">
              <Icon glyph="twitter-fill" size={40} />
            </a>
          </div>
          <div className="transition duration-300 transform hover:scale-110 hover:text-pink-600 text-gray-400 rounded-full">
            <a href="https:\\instragram.com\dkast" className="p-2 block">
              <Icon glyph="instagram-fill" size={40} />
            </a>
          </div>
        </div>
        <h2 className="font-body text-xl mb-4 text-gray-600 dark:text-gray-200">
          Últimas entradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-stretch">
          {posts.map((post, index) => {
            return index <= 1 ? (
              <PostCard
                key={post.sys.id}
                post={post}
                className="mb-10 col-span-1"
              />
            ) : (
              <PostItem
                key={post.sys.id}
                post={post}
                className="mb-10 md:col-span-2"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPostsForHome();

  return {
    props: { posts },
    revalidate: 60
  };
};

export default Home;
