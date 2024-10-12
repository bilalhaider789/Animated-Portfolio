import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function Phantom({ index, title, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <>
      <div className="sticky top-10 flex h-[100vh] w-full items-center justify-center">
        <motion.div
          style={{
            scale,
            top: `calc(-3% + ${index * 45}px)`,
            backgroundImage: `url('/images/greenbg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative h-[65vh] w-[70vw] rounded-[40px] border-8 border-white shadow-xl"
        >
          <div className="relative top-[5rem] flex w-full justify-between">
            <div className="w-[45%] pl-[3rem] pr-[1rem] font-otamanopee">
              <h3
                className="relative cursor-pointer text-[2rem] hover:text-seconday"
                onClick={() => openNewTab("https://phantom-3d-bilal-haider-dev.vercel.app/")}
              >
                <span className="absolute left-[-2rem]">⇒</span> Phantom-3D
              </h3>
              <div className="mt-2 text-[1.2rem]">
                <p>
                  This project was a fun and engaging learning experience where I selected a robot model from the
                  internet and animated it using GSAP. I focused on integrating and applying key concepts from Three.js,
                  React Three Fiber, react-drei, and GSAP to create smooth and realistic animations.
                </p>
                <p className="mt-2">
                  The project helped solidify my understanding of 3D rendering, scene composition, and animation
                  workflows in React. 
                </p>
                <p className="mt-2">
                  Visit it live <span
                    onClick={() => openNewTab("https://phantom-3d-bilal-haider-dev.vercel.app/")}
                    className="cursor-pointer text-seconday"
                  >
                    here
                  </span>{" "}
                  or get the
                  <span
                    onClick={() => openNewTab("https://github.com/bilalhaider789/phantom3D")}
                    className="cursor-pointer text-seconday"
                  >
                    {" "} source code.
                  </span>
                </p>
              </div>
            </div>
            <div className="relative flex w-[55%] items-center">
              <div className="absolute left-0 top-0 z-10 w-[33vw] shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img
                  src="./images/projects/phantom2.webp"
                  className="rounded-lg border-[1px] border-b-white border-r-white"
                  alt="Intelli Lines"
                />
              </div>
              <div className="absolute left-[4rem] top-[8rem] z-20 w-[33vw] shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img
                  src="./images/projects/phantom1.webp"
                  className="rounded-lg border-[1px] border-l-white border-t-white"
                  alt="Intelli Sum"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Phantom;
