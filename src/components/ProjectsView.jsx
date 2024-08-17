import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { projects } from "../assets/data";
import { motion, useScroll } from "framer-motion";
import IntelliLines from "./projects/IntelliLines";
import Empleyado from "./projects/Empleyado";
import Phantom from "./projects/Phantom";

function ProjectsView({ title, description, src, link, color }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    console.log(title);
  }, []);
  return (
    <>
      <div ref={container} className="relative">
        <div>
          <div className="sticky top-0 flex h-[25vh] w-full items-center justify-center">
            <div className="absolute top-10 font-otamanopee text-[4vw]">
              <span>My Work</span>
            </div>
          </div>

          <IntelliLines
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

          <Phantom
            key={2}
            index={2}
            {...projects[2]}
            progress={scrollYProgress}
            range={[2 * 0.3, 1]}
            targetScale={1 - (projects.length - 2) * 0.05}
          ></Phantom>

          {/*<Card
            key={4}
            index={4}
            {...projects[3]}
            progress={scrollYProgress}
            range={[3 * 0.3, 1]}
            targetScale={1 - (projects.length - 4) * 0.05}
          ></Card> */}
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
