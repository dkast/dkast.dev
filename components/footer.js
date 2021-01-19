import { GitHub, Twitter, Instagram } from "react-feather";

const Footer = () => (
  <div className="lg:w-2/3 xl:w-1/2 mx-6 my-6 lg:mx-auto flex items-center justify-between">
    <span className="font-sub tracking-tight text-gray-600 text-sm">
      Creado por Daniel Castillejo. Construido con Next.js
    </span>
    <div className="flex items-center">
      <div className="transition duration-300 hover:bg-gray-900 hover:text-white text-gray-600 rounded-full mx-2">
        <a href="https:\\github.com\dkast" className="p-2 block">
          <GitHub></GitHub>
        </a>
      </div>
      <div className="transition duration-300 hover:bg-blue-400 hover:text-white text-gray-600 rounded-full mx-2">
        <a href="https:\\twitter.com\dkast" className="p-2 block">
          <Twitter></Twitter>
        </a>
      </div>
      <div className="transition duration-300 hover:bg-pink-600 hover:text-white text-gray-600 rounded-full mx-2">
        <a href="https:\\instragram.com\dkast" className="p-2 block">
          <Instagram></Instagram>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
