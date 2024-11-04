import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function AllProjects() {
  const [screenSize, setScreenSize] = useState(false);

  const getScreenSize = () => {
    if (window.innerWidth < 1280) return true;
    return false;
  };

  const renderLetters = (text, colorIndex) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={colorIndex != undefined && index == colorIndex ? { color: "#e65b05 " } : {}}
        className={`letter heading-lg inline-block font-otamanopee hover:text-secondary ${colorIndex != undefined && index == colorIndex ? "bg-secondary" : ""}`}
      >
        {letter}
      </span>
    ));
  };

  useEffect(() => {
    setScreenSize(getScreenSize());
    function handleResize() {
      setScreenSize(getScreenSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full flex justify-center gap-6 mb-8 mt-16">
        <span>{renderLetters("My")}</span> <span>{renderLetters("Work")}</span>
      </div>
      <div className="top-4 flex h-fit w-full items-center justify-center">
        <div
          style={{
            backgroundImage: `url('/images/bluebg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative w-[90vw] border-white p-4 shadow-xl xl:h-[29vw] xl:w-[70vw] xl:rounded-[40px] xl:border-8"
        >
          <div className="relative top-[3vw] flex w-full flex-col justify-between xl:flex-row">
            <div className="w-full pl-[3vw] pr-[1rem] font-otamanopee xl:w-[45%]">
              <h3
                className="relative cursor-pointer whitespace-nowrap text-3xl hover:text-secondary xl:text-[2vw]"
                onClick={() => openNewTab("https://intelli-lines.vercel.app/auth")}
              >
                <span className="absolute left-[-2vw]">⇒</span> <span className="ml-6 xl:ml-0">Intelli-Lines</span>
              </h3>
              <div className="paragraph-md mt-2">
                <p>
                  My Final Year Project by which I secured 2nd Position in Comsats Career Expo 2023 Amidst 200+
                  Projects. Its a Web App powered by AI that can summarize both videos and text into desired length.
                </p>
                <p className="mt-2">
                  It has an OCR, payment gateway, premium version, chrome extension, user & payments management, and
                  many more.
                </p>
                <p className="mt-2">
                  Intelli-lines also has a chrome extension that is able to generate summary & extract key points from
                  any video in just a few seconds. View the{" "}
                  <span
                    onClick={() => openNewTab("https://www.youtube.com/watch?v=-xwXv3JGKbA")}
                    className="cursor-pointer text-secondary"
                  >
                    live demo
                  </span>{" "}
                  or visit{" "}
                  <span
                    onClick={() => openNewTab("https://intelli-lines.vercel.app/auth")}
                    className="cursor-pointer text-secondary"
                  >
                    Intelli-lines.
                  </span>
                </p>
              </div>
            </div>
            <div className="h-85 mb-10 mt-8 flex w-full items-center justify-center md:mb-16">
              <div className="relative flex w-[95%] items-center justify-center">
                <div className="left-0 top-0 z-10 transform shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                  <img
                    src="./images/projects/intelli-lines.webp"
                    className="h-full max-h-full w-full max-w-full rounded-lg object-contain"
                    alt="Intelli Lines"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-10 mt-8 flex w-full items-center justify-center">
        <div
          style={{
            backgroundImage: `url('/images/greenbg.svg')`,
            backgroundSize: "cover",
          }}
          className="w-[90%]"
        >
          <div className="top-[3vw] flex w-full flex-col justify-between">
            <div className="w-full pl-[3vw] pr-[1rem] font-otamanopee">
              <h3 className="relative cursor-pointer text-3xl hover:text-secondary">
                <span className="absolute left-[-2vw]">⇒</span> <span className="ml-6">Empleyado</span>
              </h3>
              <div className="paragraph-md mt-2">
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
            <div className="relative my-6 flex h-fit w-full items-center justify-center gap-4 px-4">
              <div className="z-10 w-[90%] transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105 sm:w-[80%] md:w-[30%] lg:w-[20%]">
                <img src="./images/projects/empleyado2.webp" className="h-auto w-full rounded-lg" alt="Empleyado" />
              </div>
              <div className="z-20 w-[95%] transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105 sm:w-[85%] md:w-[32%] lg:w-[21%]">
                <img src="./images/projects/empleyado1.webp" className="h-auto w-full rounded-lg" alt="Empleyado" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-4 mt-8 flex h-fit w-full items-center justify-center">
        <div
          style={{
            backgroundImage: `url('/images/bluebg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative w-[90vw] border-white p-4 shadow-xl xl:h-[29vw] xl:w-[70vw] xl:rounded-[40px] xl:border-8"
        >
          <div className="relative top-[3vw] flex w-full flex-col justify-between xl:flex-row">
            <div className="w-full pl-[3vw] pr-[1rem] font-otamanopee xl:w-[45%]">
              <h3
                className="relative cursor-pointer whitespace-nowrap text-3xl hover:text-secondary xl:text-[2vw]"
                onClick={() => openNewTab("https://skylarknova.xyz")}
              >
                <span className="absolute left-[-2vw]">⇒</span> <span className="ml-6 xl:ml-0">SkyLark</span>
              </h3>
              <div className="paragraph-md mt-2">
                <p>
                  A blockchain-based marketing system that integrates embedded and smart wallets. Users can create
                  marketing campaigns, referred to as "activations,". Participants in these activations compete for
                  rewards.
                </p>
                <p className="mt-2">
                  The system leverages blockchain technology to enhance security and automation, ensuring fairness in
                  selecting the winner. Overall, it combines innovation with marketing, promoting active participation
                  through rewards.
                </p>
                <p className="mt-2">
                  Visit the live project
                  <span onClick={() => openNewTab("https://skylarknova.xyz")} className="cursor-pointer text-secondary">
                    {" "}
                    here.
                  </span>
                </p>
              </div>
            </div>
            <div className="h-85 mb-10 mt-8 flex w-full items-center justify-center md:mb-16">
              <div className="relative flex w-[95%] items-center justify-center">
                <div className="left-0 top-0 z-10 transform shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                  <img
                    src="./images/projects/skylark1.png"
                    className="h-full max-h-full w-full max-w-full rounded-lg object-contain"
                    alt="Intelli Lines"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-4 mt-8 flex h-fit w-full items-center justify-center">
        <div
          style={{
            backgroundImage: `url('/images/greenbg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative w-[90vw] border-white p-4 shadow-xl xl:h-[29vw] xl:w-[70vw] xl:rounded-[40px] xl:border-8"
        >
          <div className="relative top-[3vw] flex w-full flex-col justify-between xl:flex-row">
            <div className="w-full pl-[3vw] pr-[1rem] font-otamanopee xl:w-[45%]">
              <h3
                className="relative cursor-pointer whitespace-nowrap text-3xl hover:text-secondary xl:text-[2vw]"
                onClick={() => openNewTab("https://phantom-3d-bilal-haider-dev.vercel.app/")}
              >
                <span className="absolute left-[-2vw]">⇒</span> <span className="ml-6 xl:ml-0">Phantom-3D</span>
              </h3>
              <div className="paragraph-md mt-2">
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
                  Visit it live{" "}
                  <span
                    onClick={() => openNewTab("https://phantom-3d-bilal-haider-dev.vercel.app/")}
                    className="cursor-pointer text-secondary"
                  >
                    here
                  </span>{" "}
                  or get the
                  <span
                    onClick={() => openNewTab("https://github.com/bilalhaider789/phantom3D")}
                    className="cursor-pointer text-secondary"
                  >
                    {" "}
                    source code.
                  </span>
                </p>
              </div>
            </div>
            <div className="h-85 mb-10 mt-8 flex w-full items-center justify-center md:mb-16">
              <div className="relative flex w-[95%] items-center justify-center">
                <div className="left-0 top-0 z-10 transform shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                  <img
                    src="./images/projects/phantom1.webp"
                    className="h-full max-h-full w-full max-w-full rounded-lg object-contain"
                    alt="Intelli Lines"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProjects;
