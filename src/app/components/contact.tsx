"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../../../server/sendEmail";
import SubmitBtn from "./submit-btn";

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
          const { data, error } = await sendEmail(formData);
          if (error) {
            alert(error);
            return;
          }

          alert("Correo electrónico enviado con éxito");
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
