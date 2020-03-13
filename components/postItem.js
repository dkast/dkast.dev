import React from "react";
import Link from "next/link";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";

const PostItem = ({ post }) => (
  <div>
    <Link href="/post/[pid]" as={`/post/${post.fields.slug}`}>
      <a>
        <h3 className="text-3xl font-display font-bold text-red-600 hover:text-red-500">
          {post.fields.title}
        </h3>
      </a>
    </Link>
    <span className="text-gray-600 font-body">
      {format(new Date(post.sys.createdAt), "dd LLL, yyyy", {
        locale: esLocale
      })}
    </span>
  </div>
);

export default PostItem;