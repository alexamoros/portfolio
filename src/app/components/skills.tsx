"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { renderIcons } from "@/lib/icons";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Habilidades", 0.5);
  return (
    <section ref={ref} className="mb-28 max-w-[45rem] scroll-mt-28 sm:mb-40">
      <SectionHeading>Mis habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-5xl">
        {renderIcons()}
      </ul>
    </section>
  );
}
