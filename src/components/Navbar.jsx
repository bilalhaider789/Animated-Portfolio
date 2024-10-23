import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div
      className={`fixed left-0 top-0 z-[190] flex h-16 w-full justify-between items-center bg-transparent backdrop-blur-md transition-transform duration-700 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="cursor-pointer px-16 py-4 font-otamanopee text-[1.4vw] text-secondary">Muhammad Bilal Haider</div>
      <div className="flex cursor-pointer gap-[1.5vw] px-12 py-4 text-[1.1vw] font-semibold">
        {sections.map(section => (
          <p
            key={section.id}
            onClick={() => document.getElementById(section.id).scrollIntoView({ behavior: "smooth" })}
            className="hover:text-secondary"
          >
            {section.label}
          </p>
        ))}
      </div>
    </div>
  );
}
