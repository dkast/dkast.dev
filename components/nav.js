import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import Icon from "./icon";

const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex justify-between items-center mt-8 lg:w-2/3 xl:w-1/2 mx-6 lg:mx-auto">
      <Link href="/">
        <a className="transition duration-300 transform hover:scale-110">
          <Icon width="40" height="40" bgColor="#1A202C"></Icon>
        </a>
      </Link>
      <ul className="font-sub font-bold flex space-x-8">
        <li>
          <Link href="/about">
            <a className="hover:text-gray-600">Acerca</a>
          </Link>
        </li>
        <li>
          <button
            aria-label="Switch a Modo Oscuro"
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
