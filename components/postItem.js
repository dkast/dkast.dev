import React from "react";
import Link from "next/link";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";

const PostItem = ({ post, className }) => (
  <div className={className}>
    <Link href="/post/[pid]" as={`/post/${post.fields.slug}`}>
      <a className="flex items-center justify-between">
        <h3 className="text-lg lg:text-xl font-display font-bold inline-block text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500">
          {post.fields.title}
        </h3>
        <span className="text-gray-600 dark:text-gray-400 font-body mb-2">
          {format(new Date(post.sys.createdAt), "dd LLL, yyyy", {
            locale: esLocale
          })}
        </span>
      </a>
    </Link>

    <span className="block dark:text-gray-200">{post.fields.excerpt}</span>
  </div>
);

export default PostItem;
