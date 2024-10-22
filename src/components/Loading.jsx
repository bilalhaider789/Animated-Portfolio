import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Loading() {
  const [loader, setLoader] = useState(0);
  const startLoader = () => {
    setLoader(prevLoader => {
      if (prevLoader >= 100) return 100;
      const newLoader = prevLoader + Math.floor(Math.random() * 10) + 2;
      if (newLoader > 100) return 100;
      return newLoader;
    });

    let delay = Math.floor(Math.random() * 50) + 25;
    setTimeout(() => {
      setLoader(prevLoader => {
        if (prevLoader < 100) {
          startLoader();
        }
        return prevLoader;
      });
    }, 50);
  };
  useEffect(() => {
    startLoader();
    return () => clearTimeout(startLoader);
  }, []);

  useGSAP(() => {
    gsap.to(".bar", {
      delay: 1.5,
      height: 0,
      duration: 3.5,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
      onComplete: () => {
        gsap.set(".overlay", { display: "none" });
      },
    });
  });

  return (
    <div className="overlay fixed z-[200] flex h-[100vh] w-[100vw]">
      <div className="bar text-white1 absolute bottom-0 right-[2vw] text-[10vw] font-bold">{loader}</div>
      <div className="bar text-white1 absolute left-[2vw] top-0 text-[5vw] font-bold">Loading ...</div>

      <div className="bar h-[110vh] w-[10vw] bg-secondary font-otamanopee"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
      <div className="bar h-[110vh] w-[10vw] bg-secondary"></div>
    </div>
  );
}
