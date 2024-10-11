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

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  return (
    <>
      <div className="main">
        <IntroHeading></IntroHeading>
        <Eyes></Eyes>
        <ProjectView></ProjectView>
        {/* <ImagePage></ImagePage> */}
        <Sections></Sections>
        <div className="flex h-screen w-full items-center justify-center bg-neutral-400 text-[15vh] leading-[0.9] tracking-tighter">
          Thanks, <br></br> for Visiting
        </div>
      </div>
    </>
  );
}

export default App;
