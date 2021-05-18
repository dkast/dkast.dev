import React from "react";
import Link from "next/link";
import Image from "next/image";
import format from "date-fns/format";
import esLocale from "date-fns/locale/es";

const PostCard = ({ post, className }) => {
  const imageUrl = `https://source.unsplash.com/${post.fields.unsplashId}/600x300`;
  return (
    <div className={className}>
      <div className="rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt="hero"
          className="object-cover h-auto w-full rounded-lg rounded-b-none"
          width={600}
          height={300}
        />
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
        <span className="block mt-2 dark:text-gray-200">
          {post.fields.excerpt}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
