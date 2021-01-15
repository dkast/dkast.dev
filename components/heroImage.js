import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const HeroImage = ({ unsplashId }) => {
  if (!unsplashId) {
    return null;
  }

  const imageUrl = `https://source.unsplash.com/${unsplashId}/1000x400`;
  return (
    <div className="my-8">
      <Image
        src={imageUrl}
        alt="hero"
        className="object-cover h-auto w-full rounded"
        width={1000}
        height={400}
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

HeroImage.propTypes = {
  unsplashId: PropTypes.string
};

export default HeroImage;
