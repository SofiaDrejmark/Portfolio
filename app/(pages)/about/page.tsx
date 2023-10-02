"use client";
import { motion } from "framer-motion";
import { ubuntu } from "@/app/layout";
export default function About() {
  return (
    <div className="w-full h-full text-base  ">
      <motion.section
        className="pt-36 flex items-center justify-center "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="bg-[#6533cb] rounded-full h-[135px] w-[135px] flex justify-center items-center shadow-lg">
          <img
            alt="profile_picture"
            src="/bilden.jpg"
            className="opacity-90 hover:opacity-75 grayscale rounded-full h-32 w-32 object-cover shadow-lg"
          />
        </div>
      </motion.section>
      <div className="flex flex-col md:flex-row justify-center pt-10 pb-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full p-4 md:w-[70%]"
        >
          {" "}
          <h2
            className={`${ubuntu.className} text-xl font-bold text-[#6533cb]`}
          >
            Hi there! I'm Sofia, a Frontend Developer, based in Stockholm,
            Sweden.
          </h2>
          <p className=" pt-8 text-gray-600 text-base">
            Welcome to my world of web wizardry! 🚀 Over the last couple of
            years, I've been on an incredible journey through the world of
            JavaScript, with React as my trusty sidekick.
          </p>
          <p className=" pt-8 text-gray-600 text-base">
            My quest for knowledge has led me to master various frameworks and
            wield the magic of CSS to conjure up stunning, responsive web
            experiences.
          </p>
          <p className="pt-8 text-gray-600 text-base">
            During my 6-month internship at Sverok, I played a pivotal role in
            frontend development and UX/UI design for an Adminpanel and a
            website. The website is anticipated to launch soon and will also
            feature a downloadable game. 🌟
          </p>
          <p className="pt-8 text-gray-600 text-base">
            In my bag of tricks, you'll find an array of powerful spells,
            including JavaScript, TypeScript, React, Next.js, WordPress, SQL
            databases, Cloud Databases, and more! I'm dedicated to delivering
            high-quality web solutions that not only work flawlessly but also
            look great and are easy to use. 🎨✨
          </p>
          <p className="pt-8 text-gray-600 text-base">
            Currently, I'm weaving my magic for a company on a project called
            "Wish and Want," where I'm crafting an e-commerce masterpiece within
            the WordPress universe. Stay tuned for some enchanting updates! 🛒🌌
          </p>
        </motion.section>
      </div>
      <footer className="bg-[#6533cb] text-[#ffffff] py-4 text-center ">
        <p>
          &copy; {new Date().getFullYear()} Sofia Drejmark. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
