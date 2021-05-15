import React from "react";
import Link from "next/link";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";

const PostItem = ({ post }) => (
  <div className="mb-10">
    <Link href="/post/[pid]" as={`/post/${post.fields.slug}`}>
      <a>
        <h3 className="text-2xl lg:text-3xl font-display font-bold text-red-500 hover:text-red-600">
          {post.fields.title}
        </h3>
      </a>
    </Link>
    <span className="text-gray-600 dark:text-gray-400 font-body">
      {format(new Date(post.sys.createdAt), "dd LLL, yyyy", {
        locale: esLocale
      })}
    </span>
    <span className="block mt-2 dark:text-gray-200">{post.fields.excerpt}</span>
  </div>
);

export default PostItem;
