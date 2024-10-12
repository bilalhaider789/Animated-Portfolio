import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function StringLine() {
  let finalPath = "M 100 100 Q 500 100 900 100";
  const [stringEnter, setStringEnter] = useState(false);
  const stringRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const string = stringRef.current;
    const svg = svgRef.current;

    const handleMouseMove = (dets) => {
      const rect = svg.getBoundingClientRect();
      const mouseY = (dets.clientY - rect.top) / rect.height;

      if (mouseY < 0.55 && mouseY > 0.45) {
        if (!stringEnter) {
          setStringEnter(true);
        }
      }
      if (!stringEnter) return;
      const mouseX = ((dets.clientX - rect.left) / rect.width) * 1000;
      let adjustedMouseY = mouseY;
      if (adjustedMouseY > 0.7 || adjustedMouseY < 0.25) {
        adjustedMouseY *= 250;
      } else {
        adjustedMouseY *= 200;
      }
      const path = `M 100 100 Q ${mouseX} ${adjustedMouseY} 900 100`;
      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      setStringEnter(false);
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1.2,0.1)",
      });
    };

    string.addEventListener("mousemove", handleMouseMove);
    string.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      string.removeEventListener("mousemove", handleMouseMove);
      string.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [stringEnter]);

  return (
    <div ref={stringRef} className="string bottom-10 flex h-[200px] w-full justify-center">
      <svg ref={svgRef} viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
        <path d="M 100 100 Q 500 100 900 100" stroke="black" fill="transparent" strokeWidth="2px" />
      </svg>
    </div>
  );
}

export default StringLine;

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";

// function StringLine() {
//   let finalPath = "M 100 100 Q 500 100 900 100";
//   const [stringEnter, setStringEnter] = useState(false);

//   useEffect(() => {
//     let string = document.querySelector(".string");
//     const svg = document.querySelector("svg");
//     const handleMouseMove = dets => {
//       const rect = svg.getBoundingClientRect();
//       const mouseY = (dets.clientY - rect.top) / rect.height;

//       if (mouseY < 0.55 && mouseY > 0.45) {
//         if (!stringEnter) {
//           setStringEnter(true);
//         }
//       }
//       if (!stringEnter) return;
//       const mouseX = ((dets.clientX - rect.left) / rect.width) * 1000;
//       let adjustedMouseY = mouseY;
//       if (adjustedMouseY > 0.7 || adjustedMouseY < 0.25) {
//         adjustedMouseY *= 250;
//       } else {
//         adjustedMouseY *= 200;
//       }
//       const path = `M 100 100 Q ${mouseX} ${adjustedMouseY} 900 100`;
//       gsap.to("svg path", {
//         attr: { d: path },
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     };

//     const handleMouseLeave = () => {
//       setStringEnter(false);
//       gsap.to("svg path", {
//         attr: { d: finalPath },
//         duration: 1.5,
//         ease: "elastic.out(1.2,0.1)",
//       });
//     };

//     string.addEventListener("mousemove", handleMouseMove);
//     string.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       string.removeEventListener("mousemove", handleMouseMove);
//       string.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [stringEnter]);

//   return (
//     <div className="string bottom-10 flex h-[200px] w-full justify-center">
//       <svg viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
//         <path d="M 100 100 Q 500 100 900 100" stroke="black" fill="transparent" strokeWidth="2px" />
//       </svg>
//     </div>
//   );
// }

// export default StringLine;
