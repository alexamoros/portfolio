"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades", 0.5);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Mis habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-5xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={skill.style}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <li className="text-white rounded-full h-20 w-20 flex justify-center items-center">
              {skill.icon}
            </li>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}
