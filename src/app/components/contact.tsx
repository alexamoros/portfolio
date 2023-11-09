"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../../../server/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contacto", 0.5);
  return (
    <motion.section
      id="contacto"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contáctame</SectionHeading>
      <p className="text-gray-700">
        Por favor, contáctame directamente a través de mi correo{" "}
        <a className="underline" href="mailto:example@gmail.com">
          alejandroamoroslopez@gmail.com
        </a>{" "}
        o mediante este formulario
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu correo electrónico"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          required
          maxLength={500}
          placeholder="Tu mensaje"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Enviar{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
