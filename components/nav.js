import React from "react";
import Link from "next/link";

import Icon from "./icon";

const Nav = () => (
  <nav className="flex justify-between items-center mt-8 lg:w-2/3 xl:w-1/2 mx-6 lg:mx-auto">
    <Link href="/">
      <a>
        <Icon width="40" height="40" bgColor="#1A202C"></Icon>
      </a>
    </Link>
    <ul className="font-sub font-bold hover:text-gray-600">
      <li>
        <Link href="/about">
          <a>Acerca</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
