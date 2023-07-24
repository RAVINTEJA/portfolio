import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ link, name, githubLink, imgURL }) => {
    return (
      <article className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark  xs:p-4 ">
        <div
          // className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
          className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light"
        ></div>
        <Link
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
          href={`${link}`}
        >
          <Image
            alt="Employee Management System"
            width="1280"
            height="720"
            decoding="async"
            data-nimg="1"
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={imgURL}
          />
        </Link>
        <div className="flex w-full flex-col items-start justify-between mt-4">
          <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
            Web Site Template
          </span>
          <Link
            target="_blank"
            className="underline-offset-2 hover:underline"
            href={`${link}`}
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-3xl xs:text-2xl">
              {name}
            </h2>
          </Link>
          <div className="flex w-full items-center  justify-between">
            <Link
              target="_blank"
              className="rounded text-lg font-medium underline md:text-lg "
              aria-label="Crypto Screener Application"
              href={`${link}`}
            >
              Visit
            </Link>
            <Link
              target="_blank"
              className="w-10"
              aria-label={`View ${name} on GitHub`}
              href={`${githubLink}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                className="w-full h-auto undefined"
              >
                <path fill="none" d="M0 0h512v512H0z"></path>
                <path
                  fill="currentColor"
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  };

  
const FeaturedProject = ({ link, name, description, githubLink, imgURL }) => {
    return (
      <article className="relative p-8 flex  md:flex-col w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl  dark:border-light dark:bg-dark  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4  ">
        <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] ">
          {" "}
        </div>
        
        <Link
          target="_blank"
          className="md:w-full w-1/2 cursor-pointer overflow-hidden rounded-xl"
          href={`${link}`}
        >
          <Image
            alt=""
            width="1280"
            height="720"
            decoding="async"
            data-nimg="1"
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={imgURL}
          />
        </Link>
        <div className="flex md:w-full flex-col items-start justify-between  p-5 pl-6 w-1/2 lg:pt-6">
          <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
            Featured Project
          </span>
          <Link
            target="_blank"
            className="underline-offset-2 hover:underline"
            href={`${link}`}
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
              {name}
            </h2>
          </Link>
          <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {description}
          </p>
          <div className="mt-2 flex items-center">
            <Link
              target="_blank"
              className="w-10"
              aria-label={`View ${name} on GitHub`}
              href={`${githubLink}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                className="w-full h-auto undefined"
              >
                <path fill="none" d="M0 0h512v512H0z"></path>
                <path
                  fill="currentColor"
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base "
              aria-label="Crypto Screener Application"
              href={`${link}`}
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    );
  };

// export both FeaturedProject and ProjectCard
export { FeaturedProject, ProjectCard };
  