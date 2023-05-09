import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import HireMe from "../components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex justify-center items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="w-full flex items-center justify-between">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Rosmi-Lopes"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex !items-center bg-dark text-light p-2.5 px-6 font-semibold text-lg rounded-lg
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                "
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:lopesrosmildo@gmail.com"
                  target={"_blank"}
                  className="ml-4 underline text-lg font-medium capitalize text-dark"
                >
                  Contact{" "}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute bottom-16 right-8 inline-block w-24">
          <Image src={lightBulb} alt="Light Bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
