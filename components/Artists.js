import React from "react";

const Artists = ({ items }) => {
  console.dir(items);
  return (
    <div>
      <ul>
        {items.map(artist => {
          return <span>{artist.name}</span>;
        })}
      </ul>
    </div>
  );
};

export default Artists;
