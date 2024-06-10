import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Logo from "./Logo";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="flex flex-col justify-center items-center w-full border-dark font-medium text-lg 
     dark:text-light sm:text-base gap-12 dark:bg-light/10 bg-dark/10 "
    >
      <div className="flex flex-col w-full justify-center items-center">
        <div className="h-80 py-12 w-full flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-6">
            <Logo />
            <p className="text-2xl font-bold">Frontend Developer</p>
          </div>
          <div className="flex justify-center items-center gap-9">
            <Link href="https://github.com/rosmildoLopes" target={"_blank"}>
              <p className="text-4xl hover:-translate-y-2 transition-all duration-300">
                <BsGithub />
              </p>
            </Link>
            <Link href="mailto:lopesrosmildo@gmail.com" target={"_blank"}>
              <p className="text-4xl hover:-translate-y-2 transition-all duration-300">
                <IoMdMail />
              </p>
            </Link>
            <Link href="https://www.linkedin.com/in/rosmildolopes/" target={"_blank"}>
              <p className="text-4xl hover:-translate-y-2 transition-all duration-300">
                <FaLinkedin />
              </p>
            </Link>
          </div>
        </div>
        <span className="bg-light dark:bg-dark w-full p-5 text-center text-sm">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
