import { createClient } from "contentful";
import Head from "next/head";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Icon from "supercons";

import Layout from "../../components/layout";
import HeroImage from "../../components/heroImage";
import { getAllPosts, getPostAndMorePosts } from "../../lib/cms";

const Post = ({ post, relatedPosts, mdxSource, readingTime, publishDate }) => {
  const content = hydrate(mdxSource, {});
  return (
    <Layout>
      <Head>
        <title>{post.fields.title} - Daniel Castillejo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-16 mb-8 max-w-2xl mx-auto">
        <h1 className="font-display font-bold text-3xl lg:text-5xl text-center">
          {post.fields.title}
        </h1>
        <div className="text-center">
          <span className="text-gray-600 font-sub tracking-tight">
            {publishDate}
          </span>
          <span className="text-gray-600 ml-6 font-sub tracking-tight">
            <Icon glyph="clock" size="20" className="inline mx-2"></Icon>
            {readingTime} min
          </span>
        </div>
      </div>
      <div className="lg:w-2/3 xl:w-1/2 mx-auto">
        <HeroImage unsplashId={post.fields.unsplashId}></HeroImage>
      </div>
      <div className="py-8 max-w-2xl mx-auto">
        <div className="prose lg:prose-lg prose-red max-w-none mt-8 lg:mt-18">
          {content}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPostAndMorePosts(params.slug);
  return {
    props: {
      post: data?.post ?? null,
      relatedPosts: data?.relatedPosts ?? null,
      mdxSource: data?.mdxSource ?? null,
      readingTime: data?.readingTime ?? 0,
      publishDate: data?.publishDate
    }
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  return {
    paths: allPosts?.map(post => `/post/${post.fields.slug}`) ?? [],
    fallback: "blocking"
  };
};

export default Post;
