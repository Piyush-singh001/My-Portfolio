import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full h-20 font-medium text-gray-400 flex flex-row items-center justify-between px-20 z-40 ${
        isScrolled
          ? "shadow-md bg-white text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="navbar-brand ml-5 text-gray-400 hover:text-black transition-all duration-700">
        <a href="/">My Portfolio</a>
      </div>
      <ul className="navbar-menu group flex flex-row space-x-4 gap-10 mr-10 text-gray-400">
        <li className="hover:text-black transition-all duration-700">
          <a href="#home">Home</a>
        </li>
        <li className=" hover:text-black transition-all duration-700">
          <a href="#about">About</a>
        </li>

        <li className=" hover:text-black transition-all duration-700">
          <a href="#skills">Skills</a>
        </li>
        <li className=" hover:text-black transition-all duration-700">
          <a href="#services">Services</a>
        </li>
        <li className=" hover:text-black transition-all duration-700">
          <a href="#projects">Projects</a>
        </li>
        <li className=" hover:text-black transition-all duration-700">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
