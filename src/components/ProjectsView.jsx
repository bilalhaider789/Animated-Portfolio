import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { projects } from "../assets/data";
import { motion, useScroll } from "framer-motion";
import IntelliLines from "./projects/IntelliLines";
import Empleyado from "./projects/Empleyado";
import Phantom from "./projects/Phantom";
import Skylark from "./projects/Skylark";

function ProjectsView({ title, description, src, link, color }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const renderLetters = (text, colorIndex) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={colorIndex != undefined && index == colorIndex ? { color: "#e65b05 " } : {}}
        className={`letter inline-block font-otamanopee text-[4vw] hover:text-secondary ${colorIndex != undefined && index == colorIndex ? "bg-secondary" : ""}`}
      >
        {letter}
      </span>
    ));
  };
  return (
    <>
      <div ref={container} className="relative">
        <div>
          <div className="sticky top-0 flex h-[25vh] w-full items-center justify-center">
            <div className="absolute top-10 flex gap-6">
              <span>{renderLetters("My")}</span> <span>{renderLetters("Work")}</span>
            </div>
          </div>

          <IntelliLines
            key={0}
            index={0}
            progress={scrollYProgress}
            range={[0 * 0.3, 1]}
            targetScale={1 - (projects.length - 0) * 0.05}
          ></IntelliLines>

          <Empleyado
            key={1}
            index={1}
            {...projects[1]}
            progress={scrollYProgress}
            range={[1 * 0.3, 1]}
            targetScale={1 - (projects.length - 1) * 0.05}
          ></Empleyado>
          <Skylark
            key={2}
            index={2}
            {...projects[2]}
            progress={scrollYProgress}
            range={[2 * 0.3, 1]}
            targetScale={1 - (projects.length - 2) * 0.05}
          ></Skylark>

          <Phantom
            key={3}
            index={3}
            {...projects[3]}
            progress={scrollYProgress}
            range={[3 * 0.3, 1]}
            targetScale={1 - (projects.length - 3) * 0.05}
          ></Phantom>

          {/* {projects.map((project, idx) => {
            const targetScale = 1 - (projects.length - idx) * 0.05;
            return (
              <Card
                key={idx}
                index={idx}
                {...project}
                progress={scrollYProgress}
                range={[idx * 0.3, 1]}
                targetScale={targetScale}
              ></Card>
            );
          })} */}
        </div>
      </div>
    </>
  );
}

export default ProjectsView;
