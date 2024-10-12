import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillImage from "./SkillImage";

function Frontend() {
  useEffect(() => {}, []);
  const skills1 = [
    {
      icon: "html.svg",
      name: "Html-5",
    },
    {
      icon: "css.svg",
      name: "CSS-3",
    },
    {
      icon: "js.svg",
      name: "JavaScript",
    },
    {
      icon: "ts.svg",
      name: "TypeScript",
    },
    {
      icon: "vue.svg",
      name: "Vue.js",
    },
    {
      icon: "react.svg",
      name: "React.js",
    },
    {
      icon: "next.svg",
      name: "Next.js",
    },
  ];
  const skills2 = [
    {
      icon: "tailwind.svg",
      name: "Tailwind",
    },
    {
      icon: "material.svg",
      name: "Material UI",
    },
    {
      icon: "framer.svg",
      name: "Framer Motion",
    },
    {
      icon: "gsap.svg",
      name: "GSAP",
    },
    {
      icon: "threejs.svg",
      name: "Three.js & React Three Fiber",
    },
  ];
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col bg-primary">
        <h3 className="mt-14 font-otamanopee text-[4vw]">Frontend</h3>
        <div className="flex w-full justify-between">
          <div className="font-poppins mt-10 w-full text-[1.5vw] tracking-tight">
            <p className="flex gap-2">
              <span className="block">●</span> Building highly interactive and functional web apps with React, Next.js,
              and Vue.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Leveraging state-of-the-art animations using GSAP, Framer Motion, and
              Three.js.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Designing responsive interfaces using TailwindCSS and modern CSS
              frameworks.
            </p>

            <p className="flex gap-2">
              <span className="block">●</span> Developing real-time, streaming applications with efficient & bulk of
              data handling.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Ensuring cross-browser compatibility, performance optimization, and
              accessibility compliance in all projects.
            </p>
          </div>
          <div className="mt-[-5vh] w-[80%]">
            <DotLottieReact src="./lotties/frontend.lottie" loop autoplay />
          </div>
        </div>
        <div className="font-poppins mt-12 w-full font-semibold text-white">
          <div className="flex w-full justify-center gap-5">
            {skills1.map((element, key) => {
              return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
            })}
          </div>
          <div className="flex w-full justify-center gap-5 mt-6">
            {skills2.map((element, key) => {
              return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Frontend;
