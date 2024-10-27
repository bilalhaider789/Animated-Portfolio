import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBarOpen, setNavbarOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && !navBarOpen) {
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

  const handleToggleNavbar = () => {
    setNavbarOpen(!navBarOpen);
  };

  useEffect(() => {
    if (navBarOpen) {
      gsap.from(".sect", {
        duration: 0.5,
        opacity: 0,
        x: 100,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [navBarOpen]);

  const sections = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = id => {
    setNavbarOpen(false);
    setShowNavbar(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`fixed left-0 top-0 z-[190] flex h-16 w-full items-center justify-between bg-transparent backdrop-blur-md transition-transform duration-700 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="cursor-pointer text-nowrap px-4 py-4 font-otamanopee text-secondary md:px-16 xl:text-[1.4vw]">
        Muhammad Bilal Haider
      </div>
      <div className="paragraph-md hidden cursor-pointer gap-[1.5vw] px-12 py-4 lg:flex">
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
      <div className="relative cursor-pointer px-4 lg:hidden">
        <div onClick={handleToggleNavbar}>
          {!navBarOpen && <img src="./icons/menu.svg" className="w-8" />}
          {navBarOpen && <img src="./icons/cross.svg" className="w-6" />}
        </div>
      </div>
      {navBarOpen && (
        <div className="absolute top-16 z-50 h-screen w-full bg-black/50 px-4 lg:hidden">
          <div className="flex h-fit w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-4 text-lg text-white md:gap-6 md:py-12">
            {sections.map(section => (
              <p key={section.id} onClick={() => scrollTo(section.id)} className="sect">
                {section.label}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
