import React from "react";
import Link from "next/link";

import Logo from "./logo";

const Nav = () => (
  <nav className="flex justify-between items-center mt-8 lg:w-2/3 xl:w-1/2 mx-6 lg:mx-auto">
    <Link href="/">
      <a>
        <Logo width="32" height="32" bgColor="#1A202C"></Logo>
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
