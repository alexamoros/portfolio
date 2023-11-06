import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandMongodb,
} from "react-icons/tb";

const iconComponents = {
  TbBrandHtml5: <TbBrandHtml5 />,
  TbBrandCss3: <TbBrandCss3 />,
  TbBrandTailwind: <TbBrandTailwind />,
  TbBrandJavascript: <TbBrandJavascript />,
  TbBrandTypescript: <TbBrandTypescript />,
  TbBrandReact: <TbBrandReact />,
  TbBrandRedux: <TbBrandRedux />,
  TbBrandNextjs: <TbBrandNextjs />,
  TbBrandNodejs: <TbBrandNodejs />,
  TbBrandPhp: <TbBrandPhp />,
  TbBrandLaravel: <TbBrandLaravel />,
  TbBrandMysql: <TbBrandMysql />,
  TbBrandMongodb: <TbBrandMongodb />,
};

const iconBackgroundColors = {
  TbBrandHtml5: "bg-orange-400 rounded-2xl",
  TbBrandCss3: "bg-blue-400 rounded-2xl",
  TbBrandTailwind: "bg-blue-400 rounded-2xl",
  TbBrandJavascript: "bg-yellow-400 rounded-2xl",
  TbBrandTypescript: "bg-purple-400 rounded-2xl",
  TbBrandReact: "bg-blue-400 rounded-2xl",
  TbBrandRedux: "bg-purple-400 rounded-2xl",
  TbBrandNextjs: "bg-gray-400 rounded-2xl",
  TbBrandNodejs: "bg-green-400 rounded-2xl",
  TbBrandPhp: "bg-purple-400 rounded-2xl",
  TbBrandLaravel: "bg-orange-400 rounded-2xl",
  TbBrandMysql: "bg-blue-400 rounded-2xl",
  TbBrandMongodb: "bg-green-400 rounded-2xl",
};

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

export const renderIcons = () => {
  return (
    <>
      {skillsData.map((iconName, index) => (
        <motion.div
          key={iconName}
          className={iconBackgroundColors[iconName]}
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          <li className="text-white !aspect-square h-20 w-20 flex justify-center items-center">
            {iconComponents[iconName]}
          </li>
        </motion.div>
      ))}
    </>
  );
};
