import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);

  const submitEmail = e => {
    e.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);
  };
  const openURL = url => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex w-full flex-col items-center bg-orange font-otamanopee text-white" id="contact">
      <h1 className="mt-6 text-[3.2vw] font-medium tracking-widest">CONTACT</h1>
      <div className="mb-24 mt-16 flex w-full justify-center gap-[10%]">
        <form className="flex w-[30%] flex-col items-start text-[1.1vw]" onSubmit={submitEmail}>
          <input
            placeholder="Name"
            type="text"
            className="w-full border-0 bg-transparent p-1 text-white placeholder-white focus:outline-none"
            onChange={e => setName(e.target.value)}
          />
          <div className="h-[2px] w-full bg-white"></div>
          <input
            placeholder="Email"
            type="email"
            className="mt-6 w-full border-0 bg-transparent p-1 text-white placeholder-white focus:outline-none"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="h-[2px] w-full bg-white"></div>
          <textarea
            placeholder="Message"
            rows={5}
            className="mt-8 w-full rounded-md border-2 border-white bg-transparent p-2 placeholder-white focus:outline-none"
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <div className="flex w-full justify-end">
            <button className="mt-6 cursor-pointer rounded-md border-[2px] border-white px-12 py-4" type="submit">
              Send Message
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-5 text-[1vw]">
          <p className="flex cursor-pointer items-center gap-2" onClick={() => (window.location.href = "mailto:")}>
            {/* <MdEmail className="scale-125" /> */}
            <img src="./icons/mail.svg" className="w-7"></img>
            bilalhaider1311@gmail.com
          </p>
          <p
            className="flex cursor-pointer items-center gap-2"
            onClick={() => openURL("https://github.com/bilalhaider789")}
          >
            {/* <FaGithub className="scale-125" /> */}
            <img src="./icons/github-white.svg" className="w-8"></img>
            github.com/bilalhaider789
          </p>
          <p
            className="flex cursor-pointer items-center gap-2"
            onClick={() => openURL("https://www.linkedin.com/in/muhammad-bilal-haider-8233931b9/")}
          >
            {/* <FaLinkedin className="scale-125" /> */}
            <img src="./icons/linkedin-white.svg" className="w-8"></img>
            linkedin.com/MuhammadBilalHaider
          </p>
        </div>
      </div>
      <div className="mb-8 font-poppins text-[0.9vw] tracking-wide">
        Designed & Developed by Bilal Haider | This page was built with react.js, gsap, framer-motion, locomotive & tailwind css.
      </div>
    </div>
  );
}
