import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { render } from "react-dom";

function Skills() {
  const renderLetters = (text, colorIndex) => {
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
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col items-center font-otamanopee" id="skills">
        <h3 className="heading-lg mt-20 md:mt-10">{renderLetters("Skills")}</h3>
        <p className="paragraph-lg mt-10 leading-[0.5] tracking-tighter">Ready to explore my skillset?</p>
        <p className="paragraph-lg mt-4 tracking-tighter">Lets See my gears ! </p>
        <div className="flex h-full w-full items-center justify-center xl:block xl:h-fit xl:w-[80%]">
          <DotLottieReact src="./lotties/skills.lottie" loop autoplay className="scale-[200%] xl:mt-0 xl:scale-100" />
        </div>
      </section>
    </>
  );
}

export default Skills;
