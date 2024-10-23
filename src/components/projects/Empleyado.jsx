import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function Empleyado({ index, title, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const topValue = window.innerWidth >= 1800 ? `calc(-5% + ${index * 60}px)` : `calc(-3% + ${index * 45}px)`;

  useEffect(() => {
    console.log(title);
    console.log(index);
  }, []);
  return (
    <>
      <div className="sticky top-10 flex h-[100vh] w-full items-center justify-center">
        <motion.div
          style={{
            scale,
            top: topValue,
            backgroundImage: `url('/images/greenbg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative h-[29vw] w-[70vw] rounded-[40px] border-8 border-white shadow-xl"
        >
          <div className="relative top-[3vw] flex w-full justify-between">
            <div className="w-[45%] pl-[3vw] pr-[1rem] font-otamanopee">
              <h3 className="relative cursor-pointer text-[2vw] hover:text-secondary">
                <span className="absolute left-[-2vw]">⇒</span> Empleyado
              </h3>
              <div className="mt-2 text-[1vw]">
                <p>
                  Developed an employee management app for a US based client using Flutter and Firebase, aimed at
                  optimizing workforce administration within organization.
                </p>
                <p className="mt-2">
                  The app offers robust features such as attendance tracking, leave management, and real-time
                  sign-in/out monitoring. It also includes comprehensive employee profile management, ensuring all
                  essential data is easily accessible and organized.
                </p>
              </div>
            </div>
            <div className="relative -top-6 flex w-[45%] items-center">
              <div className="absolute left-0 top-[3vw] z-10 shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/empleyado2.webp" className="h-[22vw] w-auto rounded-lg" alt="Empleyado" />
              </div>
              <div className="absolute left-[17vw] top-[3vw] z-20 shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/empleyado1.webp" className="h-[22vw] w-auto rounded-lg" alt="Empleyado" />
              </div>
              <div className="absolute left-[8vw] top-0 z-20 shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/empleyado3.webp" className="h-[24vw] w-auto rounded-lg" alt="Empleyado" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Empleyado;
