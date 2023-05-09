import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Skills from "../components/Skills";
import profilePic from "../../public/images/profile/developer-pic-2.png";


const about = () => {
  return (
    <div>
      <Head>
        <title>Rosmildo Lopes | About Page</title>
        <meta name="description" description="about page" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Constantly seeking new challenges." className="mb-16" />
          <div className="grid grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col justify-start items-start">
              <h2 className="mb-4 text-dark/75 font-bold text-lg uppercase">
                About Me
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m Rosmildo Lopes, a FullStack developer with a passion for creating functional,
                efficient, and user-friendly digital experiences.
                I am always learning and working on my own projects to enhance my skills.                 
              </p>
              <p className="font-medium my-4">
              I strongly believe that coding is not just a job, but a way of life.
              I enjoy the challenge of solving complex problems 
              and I am always striving to improve my abilities.{" "}
              </p>
              <p className="font-medium ">
              Whether I&aposm into a new project or challenge, I bring my dedication
              to quality and user-centered thinking to every project I work on.
              I am highly motivated and capable of working as part of a team.
              I look forward to contributing my skills and expertise to your next project.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8"
            >
              <div className="absolute top-0 -right-3 rounded-[2rem] bg-dark w-[102%] h-[103%] -z-10" />
              <Image
                src={profilePic}
                alt="Profile pic of myself"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">40+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Poner ejemplos aca
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">60+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">30+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Poner otros ejemplos aca
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </div>
  );
};

export default about;
