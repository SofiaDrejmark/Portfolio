"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";

import Link from "next/link";
import { ubuntu } from "@/app/layout";
import { projectsData } from "./(pages)/projects/components/ProjectData";

export default function Home() {
  const controls = useAnimation();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ x: 0, opacity: 1 });
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [controls]);

  return (
    <div className="w-full h-full  bg-[#ffffff]">
      <section className="flex flex-col pt-[80px] justify-center items-center mt-20">
        <p className="text-xl text-gray-600 text-center font-medium">
          Hi, my name is Sofia. <br /> I'm a
          <span
            className={`${ubuntu.className} font-black text-3xl text-[#6533cb] mb-4`}
          >
            {" "}
            Frontend Developer
          </span>
        </p>
        <p className="text-xl text-gray-600 text-center font-medium">
          Shaping the web with{" "}
          <span className={`${ubuntu.className} text-2xl`}>JavaScript </span>and
          the latest web technologies.
        </p>
        <div className="bg-[#6533cb] rounded-full h-[135px] w-[135px] mt-8 flex justify-center items-center shadow-lg mb-20">
          <Link href="/about">
            {" "}
            <img
              alt="profile_picture"
              src="/bilden.jpg"
              className="opacity-90 hover:opacity-75 rounded-full h-32 w-32 grayscale object-cover shadow-lg"
            />
          </Link>
        </div>
      </section>
      <section className=" flex justify-center items-center text-xl py-4 px-4">
        <Link href="/about" className="">
          <p className="text-[#444444] font-medium">
            Curious about the mind behind the code?{" "}
            <span
              className={`${ubuntu.className} text-[#42d0ab] text-xl hover:text-[#6533cb] underline underline-offset-8`}
            >
              Discover more about me.
            </span>
          </p>
        </Link>
      </section>
      <section className="w-full  flex flex-col justify-center items-center py-20">
        <Link
          href="/projects"
          className={`${ubuntu.className} hover:text-[#42d0ab] mb-10 flex justify-center items-center text-xl  border border-[#ffffff] rounded-lg px-4 py-8`}
        >
          <p>Check out my recent projects!</p>
        </Link>
        <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-6 gap-10 max-w-[65%]">
          {projectsData.map((project) => (
            <li
              key={project.id}
              className="hover:opacity-75 z-2 shadow-lg border border-b-8 border-b-[#42d0ab] rounded-2xl flex flex-col bg-[#fdfcfc]"
            >
              <Link href={`/projects/${project.link}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-t-2xl h-[150px] object-top object-cover"
                />
                <section className="">
                  <h3
                    className={`${ubuntu.className} px-2 font-bold text-lg text-[#6533cb] pt-6 pb-6`}
                  >
                    {project.title}
                  </h3>

                  <div className="flex pb-4 px-2 justify-center items-center flex-col">
                    <p className={`text-sm text-[#444444]`}>
                      {project.shortDescription}
                    </p>
                  </div>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="bg-[#6533cb] text-[#ffffff] py-4 text-center bottom-0 w-full">
        <p>
          &copy; {new Date().getFullYear()} Sofia Drejmark. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
