import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow, MoonIcon, SunIcon } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import LightBulb from "/public/images/lightbulb.svg";
import LightBulbDark from "/public/images/lightbulbdark.svg";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

export default function Home() {

  const [theme, setTheme] = useThemeSwitcher();
  return (
    <>
      <Head>
        <title>Ravin Teja</title>
        <meta name="description" content="Portfolio Website" />
      </Head>
      <main className="flex items-center pt-0  text-dark 2xl:-my-16 md:my-0 bg-light  dark:bg-dark dark:text-light w-full min-h-screen">
        <Layout className=" lg:p-8 lg:pt-0 2xl:pb-8 2xl:px-16 p-32 pt-0">
          <div className="flex w-full items-start justify-between lg:justify-center md:flex-col">
            <div className=" w-1/2 ex:hidden p-0 md:inline-block md:w-full">
              <Image
                src="/images/main.png"
                alt="Ravin Teja"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <div className="flex w-1/2 gap-4 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                // className="md:text-xl text-6xl md:text-center text-left "
                className="inline-block text-6xl font-bold w-full capitalize  text-left  lg:text-center ex:text-6xl md:text-5xl sm:text-3xl xs:text-2xl xl:text-5xl 2xl:text-4xl "
              ></AnimatedText>
              <p className=" lg:text-center md:text-base xs:text-sm  text-left font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center lg:self-center self-start mt-2">
                <Link
                  href="/RavinTeja.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 xs:px-4
                  rounded-lg text-lg xs:text-base font-semibold
                  hover:bg-light hover:text-dark
                  dark:hover:bg-dark dark:hover:text-light
                  border border-solid border-transparent hover:border-dark dark:hover:border-light"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
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
        <div className="absolute md:top-4 md:right-4 bottom-8 right-8 w-24 h-max lg:w-20 exmd:w-12 xs:w-8 inline-block bg-light dark:bg-dark">
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="ml-3 sm:ml-2 flex items-center justify-center rounded-full p-1  bg-light dark:bg-dark"
          >
            {theme === "dark" ? (
              <Image src={LightBulb} alt="Light Bulb" className="w-full h-auto" onClick={() =>
                setTheme(
                  theme === "dark" ? "light" : "dark"
                )
              } />
            ) : (
              <Image src={LightBulbDark} alt="Light Bulb Dark" className="w-full h-auto" onClick={() =>
                setTheme(
                  theme === "dark" ? "light" : "dark"
                )
              } />
            )}
          </button>
        </div>
      </main>
    </>
  );
}
