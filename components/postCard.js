import React from "react";
import Link from "next/link";
import Image from "next/image";
import format from "date-fns/format";
import esLocale from "date-fns/locale/es";

const PostCard = ({ post, className }) => {
  let imageUrl;
  if (post.fields.unsplashId) {
    imageUrl = `https://source.unsplash.com/${post.fields.unsplashId}/600x300`;
  } else {
    imageUrl = "https://dkast.dev/og.png";
  }
  return (
    <div className={className}>
      <Link href="/post/[pid]" as={`/post/${post.fields.slug}`}>
        <a>
          <Image
            src={imageUrl}
            alt="hero"
            className="object-cover rounded-lg shadow-lg filter grayscale hover:grayscale-0"
            width={600}
            height={300}
            layout="responsive"
          />
          <h3 className="text-xl mt-2 font-display font-bold text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500">
            {post.fields.title}
          </h3>
        </a>
      </Link>
      <div className="">
        {/* <span className="text-gray-600 dark:text-gray-400 font-body">
          {format(new Date(post.sys.createdAt), "dd LLL, yyyy", {
            locale: esLocale
          })}
        </span> */}
        <span className="block mt-2 dark:text-gray-200">
          {post.fields.excerpt}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
