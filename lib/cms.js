import { createClient } from "contentful";
import renderToString from "next-mdx-remote/render-to-string";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";
import readingTime from "reading-time";

export const getAllPostsForHome = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    limit: 10,
    order: "-sys.createdAt"
  });

  return res.items;
};

export const getAllPosts = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt"
  });

  return res.items;
};

export const getPostAndMorePosts = async slug => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
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

export const getPageContent = async pageId => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
  });

  const pageQuery = await client.getEntries({
    content_type: "page",
    "fields.menuId": pageId
  });

  const page = pageQuery.items[0];
  const mdxSource = await renderToString(page.fields.body, {});

  return mdxSource;
};
