import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function Empleyado({ index, title, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  useEffect(() => {
    console.log(title);
    console.log(index);
  }, []);
  return (
    <>
      <div className="sticky top-16 flex h-[100vh] w-full items-center justify-center">
        <motion.div
          style={{
            scale,
            top: `calc(-3% + ${index * 35}px)`,
            backgroundImage: `url('/images/greenbg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative h-[65vh] w-[70vw] rounded-[40px] border-8 border-white shadow-xl"
        >
          <div className="relative top-[5rem] flex w-full justify-between">
            <div className="w-[45%] pl-[3rem] pr-[1rem] font-otamanopee">
              <h3 className="relative cursor-pointer text-[2rem] hover:text-seconday">
                <span className="absolute left-[-2rem]">⇒</span> Empleyado
              </h3>
              <div className="mt-2 text-[1.2rem]">
                <p>
                  Developed an employee management app for a US client using Flutter and Firebase, aimed at optimizing
                  workforce administration within organization.
                </p>
                <p className="mt-2">
                  The app offers robust features such as attendance tracking, leave management, and real-time
                  sign-in/out monitoring. It also includes comprehensive employee profile management, ensuring all
                  essential data is easily accessible and organized.
                </p>
              </div>
            </div>
            <div className="relative -top-6 flex w-[45%] items-center">
              <div className="absolute left-0 top-[4rem] z-10 shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/empleyado2.webp" className="h-[45vh] w-auto rounded-lg" alt="Empleyado" />
              </div>
              <div className="absolute left-[20rem] top-[4rem] z-20 shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/empleyado1.webp" className="h-[45vh] w-auto rounded-lg" alt="Empleyado" />
              </div>
              <div className="absolute left-[10rem] top-0 z-20 shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/empleyado3.webp" className="h-[45vh] w-auto rounded-lg" alt="Empleyado" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Empleyado;
