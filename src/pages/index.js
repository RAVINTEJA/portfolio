import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/main.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import LightBulb from "../../public/images/lightbulb.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark bg-light dark:bg-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 p-8 lg:p-32 lg:pt-0">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
            <div className="w-full sm:w-0 lg:w-1/2 ">
              <Image
                src={profilePic}
                alt="Ravin Teja"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2  flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-xl md:text-6xl text-center lg:text-left "
              ></AnimatedText>
              <p className="my-4 text-xs text-center md:text-base lg:text-left font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center lg:self-start mt-2">
                <Link
                  href="/RavinTeja.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6
                  rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark
                  dark:hover:bg-dark dark:hover:text-light
                  border border-solid border-transparent hover:border-dark dark:hover:border-light"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:ravinteja.chilukamari@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute bottom-8 right-8 w-24 inline-block bg-light dark:bg-dark">
          <Image src={LightBulb} alt="Light Bulb" className="w-full h-auto" />
          </div>
      </main>
    </>
  );
}