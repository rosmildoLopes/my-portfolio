import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";
import project4 from "../../public/images/projects/project4.png";
import project8 from "../../public/images/projects/project8.png";
import project3 from "../../public/images/projects/project3.png";
import project5 from "../../public/images/projects/project5.png";
import project6 from "../../public/images/projects/project6.png";

import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="flex justify-between items-center w-full border border-solid 
    border-dark rounded-3xl bg-light dark:bg-dark dark:border-light shadow-2xl p-12 
    relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 rounded-[2.5rem] bg-dark dark:bg-light w-[101%] h-[103%]
      -z-10 rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto "
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex  flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="font-medium text-primary dark:text-primaryDark text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 fon text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-light dark:bg-light sm:px-4 sm:text-base
            dark:text-dark rounded-lg text-lg font-semibold p-2 px-6 ml-4"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col justify-center items-center rounded-2xl 
    bg-light dark:bg-dark dark:border-light p-6 relative border border-solid
    border-dark rounded-br-2xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 rounded-[1.5rem] dark:bg-light
      bg-dark w-[101%] h-[103%] -z-10 rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full max-h-[200x]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex  flex-col items-start justify-between mt-4">
        <span className="font-medium text-primary dark:text-primaryDark text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl sm:text-sm">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Rosmildo Lopes | Projects Page</title>
        <meta name="description" description="about page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="¡Conoce algunos de mis proyectos!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Billing App"
                img={project1}
                summary="Built with React and Tailwind CSS, utilizing the latest features and following 
                best practices for clean code."
                link="https://modern-website-tau.vercel.app/"
                github="https://github.com/rosmildoLopes/modern-website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                type="Project"
                title="HTML || CSS Calculator"
                img={project5}
                summary="Calculator"
                link="https://rosmildolopes.github.io/Calculator/"
                github="https://github.com/rosmildoLopes/Calculator"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                type="Project"
                title="To do List"
                img={project6}
                summary=""
                link="https://todo-list-rho-flax.vercel.app/"
                github="https://github.com/rosmildoLopes/todo-list"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="GPT-3 BLOG"
                img={project4}
                summary="A React application that implements various components and features using React and Vanilla CSS."
                link="https://gpt3-blog.vercel.app/"
                github="https://github.com/rosmildoLopes/gpt3-blog"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                type="Project"
                title="Weather App"
                img={project2}
                summary="Made with Next"
                link="https://next-weather-app-bice.vercel.app/"
                github="https://github.com/rosmildoLopes/next-weather-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                type="Project"
                title="Password Generator"
                img={project3}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="https://password-generator-teal-eight.vercel.app/"
                github="https://github.com/rosmildoLopes/generate-password"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                type="Project"
                title="React - Shopping Cart"
                img={project8}
                summary="Shopping Cart"
                link="https://rosmildolopes.github.io/react-shoppingcart/"
                github="https://github.com/rosmildoLopes/react-shoppingcart"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
