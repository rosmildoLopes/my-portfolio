import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/https:/www.linkedin.com/in/rosmildolopes/"
        className="shadow-md shadow-primaryDark hover:shadow-slate-900  dark:hover:shadow-slate-200 px-5 py-3 text-center bg-dark text-light dark:text-light 
        border border-solid border-transparent flex justify-center items-center rounded-full font-bold text-4xl
        "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgb(182,62,150)",
            "rgba(125, 22, 190, 0.8)",
            "rgba(27, 21, 91, 0.8)",
            "rgba(255, 0, 91, 0.8)",
            "#121212",
          ],
          transition: { duration: 1.5, repeat: Infinity },
        }}
      >
        Rosmildo Lopes
      </MotionLink>
    </div>
  );
};

export default Logo;
