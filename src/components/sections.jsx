import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./skills/Skills";
import Frontend from "./skills/Frontend";
import Backend from "./skills/Backend";
import Devops from "./skills/Devops";

function Sections() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <>
      <section className="outer relative overflow-x-hidden">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="inner relative flex h-[100vh] w-[400vw] overflow-hidden">
            <Skills />
            <Frontend/>
            <Backend />
            <Devops/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sections;
