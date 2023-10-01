"use client";
import Link from "next/link";
import React from "react";
import { projectsData } from "./components/ProjectData";
import { motion } from "framer-motion";
import { ubuntu } from "@/app/layout";

export default function Projects() {
  return (
    <div className="h-full h-full">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <section className="h-[300px] w-full flex justify-end items-center flex-col">
          <p className="w-[60%] pb-10 text-center text-xl ">
            Here, I showcase a collection of projects that I've worked on
            recently, giving you a glimpse into my journey as a frontend
            developer. More projects are coming soon!
          </p>
        </section>
      </motion.div>

      <section className="flex justify-center items-center flex-col bg-[#fdfcfc] pb-20">
        <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-6 gap-10 max-w-[65%]">
          {projectsData.map((project) => (
            <li
              key={project.id}
              className="hover:opacity-75  shadow-lg border border-b-8 border-b-[#42d0ab] rounded-2xl flex flex-col bg-[#fdfcfc]"
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

      <footer className="bg-[#6533cb] text-[#ffffff] py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Sofia Drejmark. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
