import { useEffect, useRef, useState } from "react";

function Eyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      const rotation = angle - 180;
      if (leftEyeRef.current) {
        leftEyeRef.current.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        rightEyeRef.current.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      }
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <>
      <div>
      <div className=" eyes w-full h-screen overflow-hidden ">
        <div
          data-scroll
          data-scroll-speed="-0.7"
          className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
        >
          <div className="absolute flex gap-10 top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]">
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
              <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full ">
                <div
                  ref={leftEyeRef}
                  className="absolute line w-full top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
              <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full ">
                <div
                  ref={rightEyeRef}
                  className="absolute line w-full top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Eyes;
