import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Skills() {
  useEffect(() => {}, []);
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col items-center bg-primary font-otamanopee">
        <h3 className="mt-10 text-[4vw]">Skills</h3>
        <p className="mt-10 text-[2.5vw] leading-[0.5] tracking-tighter">Ready to explore my skillset?</p>
        <p className="mt-4 text-[2.5vw] tracking-tighter">Lets See my gears ! </p>
        <div className="w-[80%]">
          <DotLottieReact src="./lotties/skills.lottie" loop autoplay />

        </div>
      </section>
    </>
  );
}

export default Skills;
