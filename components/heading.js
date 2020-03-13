import React from "react";

export default function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1 className="dark-mode: text-gray-300">{children}</h1>;
    case 2:
      return <h2 className="dark-mode: text-gray-300">{children}</h2>;
    case 3:
      return <h3 className="dark-mode: text-gray-300">{children}</h3>;
    case 4:
      return <h4 className="dark-mode: text-gray-300">{children}</h4>;
    case 6:
      return <h5 className="dark-mode: text-gray-300">{children}</h5>;
    case 5:
      return <h6 className="dark-mode: text-gray-300">{children}</h6>;
    default:
      return <h6 className="dark-mode: text-gray-300">{children}</h6>;
  }
}
