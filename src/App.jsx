import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import Eyes from "./components/eyes";
import { projects } from "./assets/data";
import Card from "./components/card";
import ImagePage from "./components/imagePage";
import Sections from "./components/sections";
import IntroHeading from "./components/IntroHeading";
import ProjectView from "./components/ProjectsView";
import StringLine from "./components/StringLine";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Loading from "./components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="main relative">
        <Loading />
        {/* <ImagePage></ImagePage> */}
        <Socials />
        <IntroHeading></IntroHeading>
        <Eyes></Eyes>
        <ProjectView></ProjectView>
        <StringLine />

        <Sections></Sections>
        <StringLine />

        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
