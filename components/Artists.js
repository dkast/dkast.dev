import React from "react";
import Image from "next/image";

const Artists = ({ items }) => {
  return (
    <div className="bg-white relative p-6 rounded-xl overflow-clip">
      <div className="absolute top-8 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      <div className="absolute bottom-8 -right-4 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      <h2 className="font-body font-semibold text-xl mb-6 text-gray-600">
        Escuchando
      </h2>
      <div className="grid grid-cols-3">
        <div className="flex justify-end">
          <Image
            src={items[0].imageUrl}
            width="100"
            height="100"
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="col-start-2 flex justify-center col-span-2">
          <Image
            src={items[1].imageUrl}
            width="90"
            height="90"
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={items[5].imageUrl}
            width="80"
            height="80"
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={items[2].imageUrl}
            width="130"
            height="130"
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={items[6].imageUrl}
            width="100"
            height="100"
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="col-span-2 flex justify-center">
          <Image
            src={items[3].imageUrl}
            width="120"
            height="120"
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div>
          <Image
            src={items[4].imageUrl}
            width="70"
            height="70"
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Artists;
