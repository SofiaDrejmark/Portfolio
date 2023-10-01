"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ubuntu } from "@/app/layout";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/Ai";
export default function Contact() {
  const [state, handleSubmit] = useForm("myContactForm");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="flex justify-center  h-full w-full">
        <p className="mt-20 md:mt-40 text-lg">
          Thank you for contacting me! 🎆🎇
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="bg-[#ffffff] pt-[180px] flex flex-col items-center lg:items-start lg:flex-row md:px-20 px-8">
        <section className=" flex  w-full flex-col lg:w-1/2 mb-10 md:mb-20 px-6">
          <h1
            className={`${ubuntu.className} text-2xl font-bold text-[#6533cb]`}
          >
            Contact Me
          </h1>
          <p className="text-lg pb-2">
            I'm open to collaborations and new opportunities. If you'd like to
            discuss a project, partnership, or if you're interested in hiring
            me, don't hesitate to get in touch. I look forward to hearing from
            you!
          </p>{" "}
          <p>
            If desired, I can also provide my CV and recommendations upon
            request.
          </p>
          <p className="flex flex-row mt-10 mb-4">
            Find me on LinkedIn
            <Link
              href="https://www.linkedin.com/in/sofia-drejmark-9798b4254"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-[#1316d8] h-5 w-5 hover:text-[#d0d0d0] ml-4" />
            </Link>
          </p>
          <p className="flex flex-row">
            Check out my GitHub
            <Link
              href="https://www.github.com/SofiaDrejmark"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-[#D9B850] h-5 w-5 hover:text-[#d0d0d0] ml-4" />
            </Link>
          </p>
        </section>
        <section className=" flex justify-center w-full md:mx-10 xl:mx-0 md:w-1/2 xl:w-[40%]">
          <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
            <label
              htmlFor="name"
              className={`${ubuntu.className} font-semibold mb-2`}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="border border-slate-400 mb-6 p-2 rounded-lg"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label
              htmlFor="email"
              className={`${ubuntu.className} font-semibold mb-2`}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className=" border border-slate-400 mb-6 p-2 rounded-lg"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label
              htmlFor="message"
              className={`${ubuntu.className} font-semibold mb-2`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="  border border-slate-400 mb-6 p-2 rounded-lg"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="hover:text-[#000000] bg-[#6533cb] text-[#ffffff] rounded-lg flex justify-center items-center  py-4 px-8 border border-slate-400 mb-6 text-xs w-[60px]"
            >
              SEND
            </button>
          </form>
        </section>
      </div>
      <footer className="bg-[#6533cb] text-[#ffffff] py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Sofia Drejmark. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
