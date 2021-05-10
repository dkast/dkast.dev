import Head from "next/head";
import Icon from "supercons";
import { NextSeo } from "next-seo";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/dist/client/router";

import Layout from "../../components/layout";
import HeroImage from "../../components/heroImage";
import { getAllPosts, getPostAndMorePosts } from "../../lib/cms";

const Post = ({ post, relatedPosts, mdxSource, readingTime, publishDate }) => {
  const router = useRouter();
  const content = hydrate(mdxSource, {});
  return (
    <Layout>
      <Head>
        <title>{post.fields.title} - Daniel Castillejo</title>
      </Head>
      <NextSeo
        openGraph={{
          title: `${post.fields.title} - Daniel Castillejo`,
          description: post.fields.excerpt,
          url: `https://dkast.dev${router.asPath}`,
          type: "article",
          article: {
            publishedTime: new Date(post.sys.createdAt).toISOString()
          },
          images: [
            {
              url: post.fields.unsplashId
                ? `https://source.unsplash.com/${post.fields.unsplashId}/850x650`
                : "https://dkast.dev/og.png",
              width: 850,
              height: 650
            }
          ]
        }}
      />
      <div className="mt-16 mb-8 max-w-2xl mx-auto">
        <h1 className="font-display font-bold text-3xl lg:text-5xl text-center">
          {post.fields.title}
        </h1>
        <div className="text-center mt-4">
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
    },
    revalidate: 60
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
