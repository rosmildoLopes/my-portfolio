import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import project1 from "../../public/images/projects/project1.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="flex justify-between items-center w-full border border-solid 
    border-dark rounded-3xl bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl"
    >
      <div className="absolute top-0 -right-3 rounded-[2.5rem] bg-dark dark:bg-light w-[101%] h-[103%] -z-10 rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex  flex-col items-start justify-between pl-6">
        <span className="font-medium text-primary dark:text-primaryDark text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 fon text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-light dark:bg-light dark:text-dark rounded-lg text-lg font-semibold p-2 px-6 ml-4"
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
    border-dark rounded-br-2xl"
    >
      <div
        className="absolute top-0 -right-3 rounded-[1.5rem] dark:bg-light
      bg-dark w-[101%] h-[103%] -z-10 rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex  flex-col items-start justify-between mt-4">
        <span className="font-medium text-primary dark:text-primaryDark text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16"
            text="Imagination Trumps Knowledge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="E-commerce React"
                img={project1}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project"
                title="E-commerce React"
                img={project1}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project"
                title="E-commerce React"
                img={project1}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="E-commerce React"
                img={project1}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project"
                title="E-commerce React"
                img={project1}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Projects
                type="Project"
                title="E-commerce React"
                img={project1}
                summary="Simply description about the project 0that I made using aan API with ReactJS"
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
