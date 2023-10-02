"use client";
import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { ubuntu } from "../layout";

export default function Navbar() {
  const controls = useAnimation();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ x: 0, opacity: 1 });
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [controls]);

  return (
    <header className="z-10 w-full h-[80px] bg-[#ffffff] fixed border-b shadow-sm">
      <section className="h-full flex flex-row justify-between">
        <Link
          className={`${ubuntu.className} hover:text-[#42d0ab] text-[#6533cb] font-medium pt-10 pl-10 sm:pl-20 text-base sm:text-2xl `}
          href="/"
        >
          <p>Sofia Drejmark</p>
        </Link>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={controls}
          className="text-[#6533cb] font-semibold pt-10 pr-20 text-xl"
        >
          {" "}
          <Link
            className={`${ubuntu.className} hover:text-[#42d0ab] text-[#6533cb] font-semibold pt-10 pr-10 sm:pr-20 text-base sm:text-xl`}
            href="/contact"
          >
            <p>👋 SAY HELLO!</p>
          </Link>
        </motion.div>
      </section>
    </header>
  );
}
