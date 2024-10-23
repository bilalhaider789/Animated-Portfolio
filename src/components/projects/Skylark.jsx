import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function Skylark({ index, title, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const topValue = window.innerWidth >= 1800 ? `calc(-5% + ${index * 60}px)` : `calc(-3% + ${index * 45}px)`;

  useEffect(() => {}, []);
  return (
    <>
      <div className="sticky top-10 flex h-[100vh] w-full items-center justify-center">
        <motion.div
          style={{
            scale,
            top: topValue,
            backgroundImage: `url('/images/bluebg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative h-[29vw] w-[70vw] rounded-[40px] border-8 border-white shadow-xl"
        >
          <div className="relative top-[3vw] flex w-full justify-between">
            <div className="w-[45%] pl-[3vw] pr-[1rem] font-otamanopee">
              <h3
                className="relative cursor-pointer text-[2vw] hover:text-secondary"
                onClick={() => openNewTab("https://skylarknova.xyz")}
              >
                <span className="absolute left-[-2vw]">⇒</span> SkyLark
              </h3>
              <div className="mt-2 text-[1vw]">
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
                    here
                  </span>
                </p>
              </div>
            </div>
            <div className="relative flex w-[55%] items-center">
              <div className="absolute left-0 top-0 z-10 w-[33vw] shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img
                  src="./images/projects/skylark2.png"
                  className="rounded-lg border-[1px] border-b-white border-r-white"
                  alt="Intelli Lines"
                />
              </div>
              <div className="absolute left-[3vw] top-[6vw] z-20 w-[33vw] shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img
                  src="./images/projects/skylark1.png"
                  className="border-t- white rounded-lg border-[1px] border-l-white"
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

export default Skylark;
