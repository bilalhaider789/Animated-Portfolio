import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImagePage() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const images = document.querySelectorAll(".page2 img");

    images.forEach((img, idx) => {
      gsap.from(img, {
        scale: 0.7,
        duration: 1,
        opacity: 0.5,
        scrollTrigger: {
          trigger: img,
          start: "top 40%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });
  }, []);

  const images = [
    "https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=640&h=1067&fit=crop&crop=focalpoint&auto=format",
    ,
    "https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format",
    ,
    "https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format",
  ];

  return (
    <main className="page2 h-fit min-h-fit relative w-full py-[3vh] px-[1vh] flex flex-col md:flex-row justify-between items-center">
      {images.map((image, idx) => (
        <div className="image-div w-[100%]  md:h-full md:w-[32%] " key={idx}>
          <img
            className={`h-full w-full object-cover ${idx}`}
            src={image}
          ></img>
        </div>
      ))}
    </main>
  );
}
