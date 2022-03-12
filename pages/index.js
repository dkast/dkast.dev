import React from "react";
// import Icon from "supercons";
import Image from "next/image";

import { getAllPostsForHome } from "@lib/cms";
import { getArtistsData } from "./api/top-artists";
import profilePic from "../public/memoji.png";
import Layout from "@components/Layout";
import PostItem from "@components/PostItem";
import PostCard from "@components/PostCard";
import Artists from "@components/Artists";

const Home = ({ posts, artists }) => {
  return (
    <Layout>
      <div className="mt-16 lg:w-2/3 xl:w-1/2 mb-16 lg:mx-auto">
        <div className="mb-16 py-4">
          <div>
            <h1 className="font-display font-semibold lg:text-5xl text-4xl dark:text-gray-200 mb-6">
              Hola,
              <br /> soy{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-400 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
                Daniel Castillejo
              </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-400 font-body lg:text-xl text-gl">
              Soy Desarrollador de Software y Arquitecto de Soluciones,
              entusiasta del diseño y la música.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-stretch">
          {/* Column 1 */}
          <div>
            <div className="rounded-xl bg-white dark:bg-gray-800 p-6 space-y-6">
              <h2 className="font-body font-semibold text-xl -mb-2 text-gray-600 dark:text-gray-200">
                Últimas entradas
              </h2>
              {posts.map((post, index) => {
                return index < 1 ? (
                  <PostCard key={post.sys.id} post={post} />
                ) : (
                  <PostItem key={post.sys.id} post={post} />
                );
              })}
            </div>
          </div>
          {/* Column 2 */}
          <div>
            <Artists items={artists}></Artists>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPostsForHome();
  const artists = await getArtistsData();

  return {
    props: { posts, artists },
    revalidate: 60
  };
};

export default Home;
