"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiSolidFilePdf } from "react-icons/bi";
import { BiSolidMessage } from "react-icons/bi";

export default function Intro() {
  return (
    <section
      id="inicio"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/memoji-wink.png"
            alt="Alejandro Memoji Winking"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 p-3 bg-yellow-200 rounded-full object-cover shadow-xl"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-5 mt-9 px-4 font-semibold sm:text-2xl text-xl text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ¡Hola! soy Alejandro Amorós🤙
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-center">
          <motion.span className="font-bold bg-yellow-200 mx-auto sm:text-3xl text-xl px-1 m-3">
            Desarrollador Web
          </motion.span>
        </p>
        <motion.h2 className="mb-8 mt-4 sm:px-16 max-w-4xl mx-auto text-center !leading-[1.4] text-3xl sm:text-5xl px-0 font-bold">
          <span className="font-bold px-1">Construyendo</span> aplicaciones web
          full-stack, frontend & backend.
        </motion.h2>
        <motion.p className="px-4 text-center !leading-[1.5] sm:text-xl text-lg">
          Especializado en tecnologías Frontend como{" "}
          <span className="font-bold text-purple-500">React & Next.js</span> ⚛️
        </motion.p>
        <motion.p className="mb-8 px-4 text-center sm:text-xl text-lg">
          Creando interfaces creativas, intuitivas & responsivas.
        </motion.p>
      </motion.div>
      <motion.div
        className="flex justify-center gap-2 px-4 text-white text-[1.5rem] font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-yellow-300 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          <BiSolidMessage />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="bg-yellow-300 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          <BiSolidFilePdf />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-yellow-300 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="bg-yellow-300 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
