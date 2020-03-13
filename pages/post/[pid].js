import { createClient } from "contentful";
import Head from "next/head";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";
import ReactMarkDown from "react-markdown";
import readingTime from "reading-time";
import { BookOpen } from "react-feather";

import Layout from "../../components/layout";
import HeroImage from "../../components/heroImage";

const Post = ({ post, relatedPosts }) => {
  const readingStats = readingTime(post.fields.body);
  return (
    <Layout>
      <Head>
        <title>{post.fields.title} - Daniel Castillejo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-16 lg:w-2/3 xl:w-1/2 mx-6 lg:mx-auto">
        <h1 className="font-display font-bold text-5xl text-center dark-mode:text-gray-300">
          {post.fields.title}
        </h1>
        <div className="text-center">
          <span className="text-gray-600 font-sub tracking-tight">
            {format(new Date(post.sys.createdAt), "dd LLL, yyyy", {
              locale: esLocale
            })}
          </span>
          <span className="text-gray-600 ml-6 font-sub tracking-tight">
            <BookOpen className="inline mx-2" size={16}></BookOpen>
            {Math.round(readingStats.minutes)} min
          </span>
        </div>
        <HeroImage unsplashId={post.fields.unsplashId}></HeroImage>
        <div className="font-body font-light text-xl text-gray-700 dark-mode:text-gray-400 leading-relaxed mx-auto mt-16">
          <ReactMarkDown source={post.fields.body}></ReactMarkDown>
        </div>
      </div>
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { pid } = context.query;
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });

  const post = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": pid
  });

  let tags;
  let relatedPosts;
  if (post.items[0].fields.hasOwnProperty(tags)) {
    tags = post.items[0].fields.tags.toString();
    relatedPosts = await client.getEntries({
      content_type: "blogPost",
      select: "fields.title,fields.slug,fields.tags,fields.unsplashId",
      "fields.tags[in]": tags,
      "sys.id[ne]": post.items[0].sys.id,
      order: "-sys.createdAt",
      limit: 3
    });
  } else {
    tags = [];
    relatedPosts = {
      items: []
    };
  }

  return {
    post: post.items[0],
    relatedPosts: relatedPosts.items
  };
};

export default Post;
