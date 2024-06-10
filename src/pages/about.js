import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Skills from "../components/Skills";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Rosmildo Lopes | About Page</title>
        <meta name="description" description="about page" />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Constantemente buscando nuevos desafíos."
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col justify-start items-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-dark/75 dark:text-light/75 font-bold text-lg uppercase">
                SOBRE MÍ
              </h2>
              <p className="font-medium ">
                Hola, soy Rosmildo Lopes, un desarrollador FullStack con pasión
                por crear experiencias digitales funcionales, eficientes y
                fáciles de usar. Siempre estoy aprendiendo y trabajando en mis
                propios proyectos para mejorar mis habilidades.
              </p>
              <p className="font-medium my-4">
                Creo firmemente que programar no es solo un trabajo, sino una
                forma de vida. Disfruto el desafío de resolver problemas
                complejos y siempre me esfuerzo por mejorar mis capacidades.
              </p>
              <p className="font-medium ">
                Soy un buen comunicador y trabajo bien en equipo, fomentando la
                colaboración. Soy adaptable, organizado y proactivo, siempre
                buscando aprender y mejorar continuamente. Estas habilidades me
                permiten enfrentar desafíos y entregar proyectos de alta calidad
                a tiempo.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl w-[102%] h-[103%] -z-10" />
              <Image
                src={profilePic}
                alt="Profile pic of myself"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 
            xl:flex-row xl:items-center md:order-3 sm:flex-col"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-4xl font-bold md:text-3xl sm:text-2xl xs:text-2xl text-right">
                  Habilidades destacadas
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-right
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  React, Next, and TailwindCSS
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  10+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                md:text-lg sm:text-base xs:text-sm text-right "
                >
                  Proyectos completados
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  . . .
                </span>
                <h2
                  className="text-xl text-right font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Emocionado por aprender
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
