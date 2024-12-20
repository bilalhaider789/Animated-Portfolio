import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import StringLine from "./StringLine";

function IntroHeading() {
  useGSAP(() => {
    gsap.from(".heading span", {
      delay: 4,
      opacity: 0,
      duration: 0.2,
      ease: "bounce.out",
      stagger: 0.05,
    });
    gsap.from(".section1 .desc", {
      y: 100,
      delay: 5.5,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  const renderLetters = (text, colorIndex) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={colorIndex != undefined && index == colorIndex ? { color: "#e65b05 " } : {}}
        className={`letter inline-block uppercase leading-[1] tracking-tighter hover:text-secondary`}
      >
        {letter}
      </span>
    ));
  };

  const simpleRenderLetters = (text, colorIndex) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={colorIndex != undefined && index == colorIndex ? { color: "#e65b05 " } : {}}
        className={`letter inline-block font-otamanopee hover:text-secondary ${colorIndex != undefined && index == colorIndex ? "bg-secondary" : ""}`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="px-[5vw]">
      <div className="section1 relative h-[100vh] w-full pt-[30vh] font-otamanopee 2xl:pt-[30vh]">
        <div className="heading heading-xl leading-[0.7] tracking-tight">
          {renderLetters("Hello,", 0)}
          <br></br>
          <h2 className="md:hidden">{renderLetters("I'M", 0)} </h2>

          <div className="heading-xl flex gap-[1rem] md:gap-[2.5vw]">
            <h2 className="hidden md:block">{renderLetters("I'M", 0)} </h2>
            <h2>{renderLetters("Bilal")} </h2>
            <h2>{renderLetters("Haider")}</h2>
          </div>
        </div>
        <h4 className="desc heading-sm mt-[1.5vw] hidden uppercase text-gray-600 md:mt-[1.5vw] md:block">
          Product Lead / Full Stack Developer / Devops Engineer
        </h4>
        <div className="md:hidden">
          <h4 className="desc heading-sm mt-12 uppercase text-gray-600 md:mt-[1.5vw]">Product Lead</h4>
          <h4 className="desc heading-sm mt-[1.5vw] uppercase text-gray-600">Full Stack Developer</h4>
          <h4 className="desc heading-sm mt-[1.5vw] uppercase text-gray-600">DevOps Engineer</h4>
        </div>

        <div className="mt-24 3xl:mt-36" id="about">
          <StringLine />
        </div>
      </div>
      <div className="relative h-fit w-full font-otamanopee">
        <div className="flex w-full justify-center">
          <h1 className="heading-lg flex gap-6">
            <span>{simpleRenderLetters("About")}</span> <span>{simpleRenderLetters("Me")}</span>
          </h1>
        </div>
        <div className="mt-12 flex w-full flex-col-reverse items-center justify-center gap-10 mb-12 xl:mb-36 xl:mt-20 xl:flex-row">
          <div className="paragraph-md w-full xl:w-[35vw]">
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
          <div className="z-0 h-[16rem] w-[16rem] overflow-hidden rounded-full bg-transparent xl:h-[18vw] xl:w-[18vw]">
            <img className="rounded-full" src="./images/dp.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroHeading;
