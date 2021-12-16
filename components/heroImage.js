import React from "react";
import Image from "next/image";

const HeroImage = ({ unsplashId }) => {
  if (!unsplashId) {
    return null;
  }

  const imageUrl = `https://source.unsplash.com/${unsplashId}/1000x500`;
  return (
    <div>
      <Image
        src={imageUrl}
        alt="hero"
        className="object-cover h-auto w-full rounded-lg"
        width={1000}
        height={500}
      />
      <div className="text-center text-gray-500 text-sm pt-1">
        Fuente: &nbsp;
        <a
          href={`https://unsplash.com/photos/${unsplashId}`}
        >{`https://unsplash.com/photos/${unsplashId}`}</a>
      </div>
    </div>
  );
};

export default HeroImage;
