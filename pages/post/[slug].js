import Head from "next/head";
import Icon from "supercons";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/dist/client/router";

import Layout from "../../components/layout";
import HeroImage from "../../components/heroImage";
import { getAllPosts, getPostAndMorePosts } from "../../lib/cms";

const Post = ({ post, relatedPosts, mdxSource, readingTime, publishDate }) => {
  const router = useRouter();
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
        <h1 className="font-display font-bold text-3xl lg:text-5xl text-center dark:text-gray-200">
          {post.fields.title}
        </h1>
        <div className="text-center text-sm mt-8 flex space-x-8 items-center justify-center text-gray-600 dark:text-gray-400 font-sub tracking-tight">
          <div className="flex items-center space-x-2">
            <Image
              alt="Daniel Castillejo"
              width={24}
              height={24}
              src="/avatar.jpg"
              className="rounded-full shadow"
            ></Image>
            <span className="hidden sm:inline">Daniel Castillejo</span>
          </div>
          <span>{publishDate}</span>
          <span className="flex space-x-2 items-center">
            <Icon glyph="clock" size="20" className="inline"></Icon>
            <span>{readingTime} min</span>
          </span>
        </div>
      </div>
      <div className="lg:w-2/3 xl:w-1/2 mx-auto">
        <HeroImage unsplashId={post.fields.unsplashId}></HeroImage>
      </div>
      <div className="py-8 max-w-2xl mx-auto">
        <div className="prose lg:prose-lg prose-red dark:prose-light max-w-none mt-8 lg:mt-18">
          <MDXRemote {...mdxSource} />
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
