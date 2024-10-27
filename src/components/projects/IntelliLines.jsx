import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
function IntelliLines({ index, title, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const topValue = window.innerWidth >= 1800 ? `calc(-5% + ${index * 60}px)` : `calc(-3% + ${index * 45}px)`;
  console.log(window.innerWidth);
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
            backgroundImage: `url('/images/bluebg.svg')`,

            backgroundSize: "cover",
          }}
          className="relative h-[29vw] w-[70vw] rounded-[40px] border-8 border-white shadow-xl"
        >
          <div className="relative top-[3vw] flex w-full justify-between">
            <div className="w-[45%] pl-[3vw] pr-[1rem] font-otamanopee">
              <h3
                className="relative cursor-pointer text-[2vw] hover:text-secondary"
                onClick={() => openNewTab("https://intelli-lines.vercel.app/auth")}
              >
                <span className="absolute left-[-2vw]">⇒</span> Intelli-Lines
              </h3>
              <div className="mt-2 text-[1vw]">
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
            <div className="relative flex w-[55%] items-center">
              <div className="absolute left-0 top-0 z-10 w-[33vw] shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/intelli-lines.webp" className="rounded-lg" alt="Intelli Lines" />
              </div>
              <div className="absolute left-[3vw] top-[8vw] z-20 w-[33vw] shadow-xl transition-transform duration-500 ease-in-out hover:z-30 hover:scale-105">
                <img src="./images/projects/intelli-sum.webp" className="rounded-lg" alt="Intelli Sum" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default IntelliLines;
