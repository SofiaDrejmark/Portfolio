"use client";
import { projectsData } from "../components/ProjectData";
import { motion } from "framer-motion";
import Link from "next/link";
import { ubuntu } from "@/app/layout";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import React from "react";

interface ProjectProps {
  params: { project: string };
}

export default function Project({ params }: ProjectProps) {
  const project = projectsData.find((p) => p.link === `/${params.project}`);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isMainImageModalOpen, setIsMainImageModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string>("");
  const [selectedMainImage, setSelectedMainImage] = React.useState<string>("");

  const openModal = (image: string, isMainImage: boolean) => {
    if (isMainImage) {
      setSelectedMainImage(image);
      setIsMainImageModalOpen(true);
    } else {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center bg-[#f2f1f0]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {project ? (
        <motion.div
          className="w-full mb-6 pt-36 px-6 sm:px-20  bg-white pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            passHref
            className="w-[100px] underline text-[#444444] hover:text-[#d1d1d1] text-sm flex justify-start items-center py-4   flex flex-row justify-start items-center"
          >
            ALL PROJECTS
          </Link>

          <h2
            className={`${ubuntu.className} text-2xl font-bold text-[#6533cb] text-center pb-4`}
          >
            {project.title}
          </h2>

          <div className="flex justify-center items-center">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-[40%] md:w-[20%] object-cover rounded-lg shadow-lg cursor-pointer "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => openModal(project.image, true)}
            />
          </div>
          <div className="mt-8">
            <h3
              className={`${ubuntu.className} text-xl font-bold text-[#6533cb]`}
            >
              Project Description:
            </h3>
            {project.descriptions?.map((description, index) => (
              <p key={index} className="mt-4 text-gray-600">
                {description}
              </p>
            ))}
            <p
              className={`${ubuntu.className} flex justify-center items-center flex-row text-xl font-bold text-[#6533cb] mt-10`}
            >
              Source Code:{" "}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-10 w-10 ml-4"
                >
                  <AiFillGithub className="hover:text-[#6533cb] text-[#42d0ab]  h-8 w-8 hover:text-[#d0d0d0]" />
                </Link>
              )}
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-6 gap-10 max-w-[65%] ">
              <img
                src={project.image}
                alt="project_image"
                className="max-h-[200px] object-cover mb-2 m-2 shadow-lg cursor-pointer rounded-lg hover:opacity-40"
                onClick={() => openModal(project.image, true)}
              />
              {project.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="max-h-[200px] object-cover mb-2 m-2 shadow-lg cursor-pointer rounded-lg hover:opacity-40"
                  onClick={() => openModal(image, false)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-red-500 font-semibold text-center">
          Project not found
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#ffffff] border-2 border-[#42d0ab] p-4 shadow-lg w-[96%] sm:w-[50%] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-end mx-2 mr-2 mb-2 text-2xl cursor-pointer">
              <AiOutlineClose onClick={() => setIsModalOpen(false)} />
            </div>
            <img
              src={selectedImage}
              alt="Selected Project Image"
              className="w-full h-auto mb-4 object-contain"
            />
          </div>
        </div>
      )}
      {isMainImageModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-[#ffffff] border-2 border-[#42d0ab] p-4 shadow-lg w-[96%] sm:w-[50%] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-end mx-2 mr-2 mb-2 text-2xl cursor-pointer">
              <AiOutlineClose onClick={() => setIsMainImageModalOpen(false)} />
            </div>
            <img
              src={selectedMainImage}
              alt="Selected Main Project Image"
              className="w-full h-auto mb-4 object-contain"
            />
          </div>
        </div>
      )}
      <footer className="bg-[#6533cb] text-[#ffffff] py-4 text-center w-full">
        <p>
          &copy; {new Date().getFullYear()} Sofia Drejmark. All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
}
