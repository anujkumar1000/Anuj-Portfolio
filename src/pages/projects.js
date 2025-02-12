import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/job-portal.png";
import project2 from "../../public/images/projects/ai-finance.png";
import project3 from "../../public/images/projects/chat-app.png";
import project4 from "../../public/images/projects/jira-clone.png";
import project5 from "../../public/images/projects/journal-app.png";
import project6 from "../../public/images/projects/shop-app.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  rounded-br-3xl dark:bg-light 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] 
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
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

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
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
        <title>AnujKumar | Projects Page</title>
        <meta name="description" content="Projects Page" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Job Portal Application"
                img={project1}
                summary="Developed and implemented a scalable job portal application using React and Tailwind CSS, optimizing performance and user
                interface design. Deployed the application on Vercel with a live link, enhancing user engagement and reducing the bounce rate. Integrated Cloudinary for efficient image management and Supabase for backend services, leveraging JavaScript to enhance data
                storage, optimize media handling, and improve overall application performance."
                link="https://job-portal-azure-five.vercel.app/"
                github="https://github.com/anujkumar1000/Job-Portal"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ai-Finance Application"
                img={project2}
                link="https://ai-finance-platform-five.vercel.app/"
                github="https://github.com/anujkumar1000/Ai-Finance-platform"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Jira Clone Application"
                img={project4}
                link="https://jira-clone-beryl.vercel.app/"
                github="https://github.com/anujkumar1000/jira-clone"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Redis Chat Application"
                img={project3}
                summary="A real-time chat application built using TypeScript and Redis, enabling fast and scalable message handling. Redis is used for efficient data storage and pub/sub messaging to manage live chats. The app supports multiple users and ensures quick message delivery with minimal latency."
                link="https://redis-chat-app-vert.vercel.app/auth"
                github="https://github.com/anujkumar1000/redis-chat-app"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Journal Application"
                img={project5}
                link="https://journal-app-three-snowy.vercel.app/"
                github="https://github.com/anujkumar1000/Journal-app"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Shopr Application"
                img={project6}
                link="https://shop-app-virid-eta.vercel.app/"
                github="https://github.com/anujkumar1000/Shop-app"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
