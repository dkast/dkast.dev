import { createClient } from "contentful";
import Head from "next/head";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";
import readingTime from "reading-time";
import { BookOpen } from "react-feather";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import Layout from "../../components/layout";
import HeroImage from "../../components/heroImage";

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
            <BookOpen className="inline mx-2" size={16}></BookOpen>
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

Post.getInitialProps = async context => {
  const { slug } = context.query;
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const postQuery = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug
  });

  let tags;
  let relatedPosts;
  if (postQuery?.items[0]?.fields.hasOwnProperty(tags)) {
    tags = postQuery.items[0].fields.tags.toString();
    relatedPosts = await client.getEntries({
      content_type: "blogPost",
      select: "fields.title,fields.slug,fields.tags,fields.unsplashId",
      "fields.tags[in]": tags,
      "sys.id[ne]": postQuery.items[0].sys.id,
      order: "-sys.createdAt",
      limit: 3
    });
  } else {
    tags = [];
    relatedPosts = {
      items: []
    };
  }

  const post = postQuery.items[0];
  const mdxSource = await renderToString(post.fields.body, {});

  return {
    post: post,
    relatedPosts: relatedPosts.items,
    mdxSource: mdxSource,
    readingTime: Math.round(readingTime(post.fields.body).minutes),
    publishDate: format(new Date(post.sys.createdAt), "dd LLL, yyyy", {
      locale: esLocale
    })
  };
};

export default Post;
