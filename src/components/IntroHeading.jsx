import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import StringLine from "./StringLine";

function IntroHeading() {
  useGSAP(() => {
    gsap.from(".heading span", {
      delay: 0.5,
      opacity: 0,
      duration: 0.2,
      ease: "bounce.out",
      stagger: 0.05,
    });
    gsap.from(".section1 .desc", {
      y: 100,
      delay: 1.5,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  const renderLetters = text => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`letter inline-block text-[8vw] uppercase leading-[1] tracking-tighter hover:text-[#e65b05]`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="px-[5vw]">
      <div className="section1 relative h-[100vh] w-full pt-[20vh] font-otamanopee">
        <div className="heading text-[8vw] leading-[0.7] tracking-tight">
          {renderLetters("Hello,")}
          <br></br>
          <div className="flex gap-[2.5vw]">
            <h2>{renderLetters("I'M")} </h2>
            <h2>{renderLetters("Bilal")} </h2>
            <h2>{renderLetters("Haider")}</h2>
          </div>
        </div>
        <h4 className="desc mt-[1.5vw] text-[1.5vw] uppercase text-gray-600">
          Professional Full Stack Developer | Polyglot Engineer | Devops
        </h4>
        <div className="mt-16">
          <StringLine />
        </div>
      </div>
      <div className="relative h-[100vh] w-full font-otamanopee">
        <div className="flex w-full justify-center">
          <h1 className="text-[4vw]">About Me</h1>
        </div>
        <div className="w-fulll mt-20 flex items-center justify-center gap-10">
          <div className="w-[35vw] text-lg">
            <p>
              My story starts in 2019 with a Bachelor's degree in Computer Science from Comsats University. Through
              collaborations with local and international clients, I honed my technical and project management skills,
              securing 2nd place in the University FYP Expo.
            </p>
            <p className="mt-2">
              With a robust background in full stack development and project leadership, I specialize in delivering
              comprehensive, high-quality solutions. My expertise spans the entire product lifecycle, from initial
              design through to development, deployment, and final delivery. I ensure each project meets the highest
              standards of functionality, quality and user experience.
            </p>
            <p className="mt-2">
              Driven by a passion for innovation, I continuously seek new challenges to expand my skill set. Currently,
              I am working on highly optimized projects that demand visually appealing and efficient web solutions.
            </p>
          </div>
          <div className="z-0 h-[16rem] w-[16rem] overflow-hidden rounded-full bg-transparent md:h-[20rem] md:w-[20rem]">
            <img className="rounded-full" src="./images/dp.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroHeading;
