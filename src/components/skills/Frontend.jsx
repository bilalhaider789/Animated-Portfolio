import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillImage from "./SkillImage";

function Frontend() {
  const [screenSize, setScreenSize] = useState(false);

  const getScreenSize = () => {
    if (window.innerWidth < 640) return true;
    return false;
  };

  useEffect(() => {
    setScreenSize(getScreenSize());
    function handleResize() {
      setScreenSize(getScreenSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      icon: "fabric.png",
      name: "Fabric.js",
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

  const smallScreenSkills = [
    [
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
    ],
    [
      {
        icon: "react.svg",
        name: "React.js",
      },
      {
        icon: "next.svg",
        name: "Next.js",
      },
      {
        icon: "fabric.png",
        name: "Fabric.js",
      },
      {
        icon: "tailwind.svg",
        name: "Tailwind",
      },
      {
        icon: "material.svg",
        name: "Material UI",
      },
    ],
    [
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
    ],
  ];
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col">
        <h3 className="mt-20 md:mt-[5vw]">{renderLetters("Frontend")}</h3>
        <div className="mt-8 flex w-full justify-between md:mt-[3vw]">
          <div className="w-full pr-8 font-poppins text-[1.2rem] tracking-tight md:text-[1.5rem] xl:pr-0 xl:text-[1.5vw]">
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
          <div className="mt-[-5vw] hidden w-[80%] xl:block">
            <DotLottieReact src="./lotties/frontend.lottie" loop autoplay />
          </div>
        </div>
        {!screenSize && (
          <div className="mt-[8vh] mb-10 flex h-full w-full flex-col justify-center font-poppins font-semibold text-white">
            <div className="flex w-full justify-center gap-5">
              {skills1.map((element, key) => {
                return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
              })}
            </div>
            <div className="mt-6 flex w-full justify-center gap-5">
              {skills2.map((element, key) => {
                return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
              })}
            </div>
          </div>
        )}
        {screenSize && (
          <div className="mt-[8vh] flex h-full w-full flex-col gap-5 font-poppins font-semibold text-white">
            {smallScreenSkills.map((skillSet, key) => {
              return (
                <div className="flex w-full justify-center gap-1 md:gap-5" key={key}>
                  {skillSet.map((element, key) => {
                    return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
                  })}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Frontend;
