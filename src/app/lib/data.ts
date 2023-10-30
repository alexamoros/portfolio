import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import serodeImg from "../../../public/serode-screenshot.png";

export const links = [
  {
    name: "Inicio",
    hash: "#inicio",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    company: "Finetwork",
    description:
      "Trabajé como Becario en Finetwork durante mis prácticas de DAW. Donde aprendí a usar NextJs, Stitches, GitLab, Figma, Sentry y más.",
    icon: React.createElement(CgWorkAlt),
    date: "marzo 2023 - junio 2023",
  },
  {
    title: "CV Skills",
    location: "Valencia",
    description:
      "Como parte de mi educación tuve la oportunidad de participar en la modalidad de Desarrollo Web. Creé una aplicación web (frontend y backend) desde cero y sin acceso a Internet",
    icon: React.createElement(FaReact),
    date: "abril 2023",
  },
  {
    title:
      "Ciclo formativo de Grado Superior de Desarrollo de Aplicaciones Web (DAW)",
    company: "IES Poeta Paco Mollà",
    description:
      "2 años en los que aprendí desde cero hasta ser un full-stack web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "septiembre 2021 - junio 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Serode",
    description:
      "Como proyecto final de DAW creé Serode junto con Alejandro Torcuato. Serode es una aplicación de gestión de tareas basada en kanban con drag and drop.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    imageUrl: serodeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Java",
  "PHP",
  "Laravel",
  "MySQL",
  "MongoDB",
  "Git",
] as const;
