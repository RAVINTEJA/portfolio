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
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {

  const [theme, setTheme] = useThemeSwitcher();
  return (
    <>
      <Head>
        <title>Ravin Teja</title>
        <meta name="description" content="Portfolio Website" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen pt-0 text-dark 2xl:-my-16 md:my-0 bg-light dark:bg-dark dark:text-light">
        <Layout className="p-32 pt-0  lg:p-8 lg:pt-0 2xl:pb-8 2xl:px-16">
          <div className="flex items-start justify-between w-full lg:justify-center md:flex-col">
            <div className="w-1/2 p-0  ex:hidden md:inline-block md:w-full">
              <Image
                src="/images/main.png"
                alt="Ravin Teja"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 gap-4 lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                // className="text-6xl text-left md:text-xl md:text-center "
                className="inline-block w-full text-6xl font-bold text-left capitalize lg:text-center ex:text-6xl md:text-5xl sm:text-3xl xs:text-2xl xl:text-5xl 2xl:text-4xl "
              ></AnimatedText>
              <p className="font-medium text-left  lg:text-center md:text-base xs:text-sm">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1z9S5X8lq4nFtA4iRjsAhEFtQEipHFd5m/view?usp=sharing"
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
                <Link href="mailto:ravintejac@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-24 md:top-4 md:right-4 bottom-8 right-8 h-max lg:w-20 exmd:w-12 xs:w-8 bg-light dark:bg-dark">
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="flex items-center justify-center p-1 ml-3 rounded-full sm:ml-2 bg-light dark:bg-dark"
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
