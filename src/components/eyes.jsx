import { useEffect, useRef, useState } from "react";

function Eyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  useEffect(() => {
    window.addEventListener("mousemove", e => {
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
        <div className="eyes hidden h-screen w-full overflow-hidden xl:block">
          <div
            data-scroll
            data-scroll-speed="-0.7"
            style={{ backgroundImage: "url('/images/eyes-background.webp')" }}
            className="relative h-full w-full bg-cover bg-center"
          >
            <div className="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] gap-10">
              <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-zinc-100">
                <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-900">
                  <div
                    ref={leftEyeRef}
                    className="line absolute left-1/2 top-1/2 w-full translate-x-[-50%] translate-y-[-50%]"
                  >
                    <div className="h-10 w-10 rounded-full bg-zinc-100"></div>
                  </div>
                </div>
              </div>
              <div className="flex h-[15vw] w-[15vw] items-center justify-center rounded-full bg-zinc-100">
                <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-900">
                  <div
                    ref={rightEyeRef}
                    className="line absolute left-1/2 top-1/2 w-full translate-x-[-50%] translate-y-[-50%]"
                  >
                    <div className="h-10 w-10 rounded-full bg-zinc-100"></div>
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
