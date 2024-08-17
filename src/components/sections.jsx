import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



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
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <>
      <section className="overflow-x-hidden relative outer bg-slate-900 text-white text-[15vh]">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="inner h-[100vh] w-[400vw] flex relative">
            <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center bg-slate-800">
              <h3>Skills</h3>
            </div>
            <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center bg-slate-600">
              <h3>FrontEnd</h3>
            </div>
            <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center bg-slate-400">
              <h3>Backend</h3>
            </div>
            <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center bg-slate-200">
              <h3>DevOps</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sections;
