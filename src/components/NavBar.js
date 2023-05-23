import Link from "next/link";
import Logo from "./Logo";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-3`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="w-full px-32 py-8 font-medium flex justify-between items-center text-dark dark:text-light
      relative z-10 lg:px-16 md:px-12  sm:px-8"
      >
        <button
          className="justify-center items-center flex-col hidden lg:flex "
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm transition-all duration-300 ease-out -translate-y-0.5 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5 ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          ></span>
        </button>
        {/* Desktop Menu */}
        <div className="w-full flex items-center justify-between lg:hidden">
          <nav className="flex justify-between">
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="ml-4" />
          </nav>
          {/* icons */}
          <nav className="flex justify-center items-center flex-wrap">
            <motion.a
              href="https://github.com/rosmildoLopes"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mr-3 w-6"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rosmildolopes/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 w-6"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/LopesRosmildo"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="ml-3 w-6"
            >
              <TwitterIcon />
            </motion.a>

            <button
              className={`ml-5 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-light" />
              )}
            </button>
          </nav>
        </div>
        {/* Mobile Menu */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col items-center justify-between fixed
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75
        rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex justify-center items-center flex-col">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={handleClick}
              />
            </nav>
            {/* icons */}
            <nav className="flex justify-center items-center flex-wrap mt-3">
              <motion.a
                href="https://github.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mr-3 w-6 bg-light dark:bg-dark rounded-full sm:mx-1"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mx-3 w-6 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="ml-3 w-6 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>

              <button
                className={`ml-5 flex items-center justify-center rounded-full p-1 font-lg sm:mx-1
        ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? (
                  <SunIcon className="fill-light" />
                ) : (
                  <MoonIcon className="fill-dark" />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
