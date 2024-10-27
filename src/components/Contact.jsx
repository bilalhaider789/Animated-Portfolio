import { useRef, useState } from "react";
import AnimatedButton from "./atomic/AnimatedButton";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Contact() {
  const [result, setResult] = useState(false);

  const submitEmail = async event => {
    event.preventDefault();
    setResult(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "dfb3d99e-713c-4b43-91db-2ce06efcd7a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const openURL = url => {
    window.open(url, "_blank");
  };

  return (
    <>
      {result && (
        <div className="fixed left-0 top-0 z-[500] flex h-screen w-[100vw] items-center justify-center bg-black bg-opacity-50">
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-xl bg-white p-12 font-poppins">
            <IoMdCheckmarkCircleOutline className="h-[10vw] w-[10vw] text-secondary" />
            <p className="mt-6 text-[1.2vw]">Your message has been successfully sent</p>
            <button
              className="mt-4 rounded-md bg-secondary px-12 py-2 text-[1.4vw] text-white"
              onClick={() => setResult(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <div className="flex w-full flex-col items-center bg-orange font-otamanopee text-white" id="contact">
        <h1 className="mt-6 text-[2rem] font-medium tracking-widest md:text-[3rem] xl:text-[3.2vw]">CONTACT</h1>
        <div className="mb-24 mt-16 flex w-full flex-col items-center gap-[10%] xl:flex-row xl:justify-center">
          <form
            className="flex w-[80%] flex-col items-start md:w-[50%] xl:w-[30%] xl:text-[1.1vw]"
            onSubmit={submitEmail}
          >
            <input
              placeholder="Name"
              type="text"
              name="name"
              required
              className="w-full border-0 bg-transparent p-1 text-white placeholder-white focus:outline-none"
            />
            <div className="h-[2px] w-full bg-white"></div>
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
              className="mt-6 w-full border-0 bg-transparent p-1 text-white placeholder-white focus:outline-none"
            />
            <div className="h-[2px] w-full bg-white"></div>
            <textarea
              placeholder="Message"
              name="message"
              rows={5}
              required
              className="mt-8 w-full rounded-md border-2 border-white bg-transparent p-2 placeholder-white focus:outline-none"
            ></textarea>
            <div className="mt-6 flex w-full justify-end xl:mt-[1vw]">
              <AnimatedButton
                text="Click Me"
                bgColor="transparent"
                textColor="white"
                hoverColor="white"
                hoverTextColor="#e65b05"
                type="submit"
              />
            </div>
          </form>
          <div className="mt-6 flex w-[80%] justify-end md:w-[50%] xl:mt-0 xl:w-fit">
            <div className="flex flex-col gap-5 xl:text-[1vw]">
              <p className="flex cursor-pointer items-center gap-2" onClick={() => (window.location.href = "mailto:")}>
                <img src="./icons/mail.svg" className="w-7"></img>
                bilalhaider1311@gmail.com
              </p>
              <p
                className="flex cursor-pointer items-center gap-2"
                onClick={() => openURL("https://github.com/bilalhaider789")}
              >
                <img src="./icons/github-white.svg" className="w-8"></img>
                github.com/bilalhaider789
              </p>
              <p
                className="flex cursor-pointer items-center gap-2"
                onClick={() => openURL("https://www.linkedin.com/in/muhammad-bilal-haider-8233931b9/")}
              >
                <img src="./icons/linkedin-white.svg" className="w-8"></img>
                linkedin.com/MuhammadBilalHaider
              </p>
              <p
                className="flex cursor-pointer items-center gap-2"
                onClick={() => openURL("https://www.linkedin.com/in/muhammad-bilal-haider-8233931b9/")}
              >
                <img src="./icons/whatsapp.svg" className="w-8"></img>
                WhatsApp/+923157960542
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 font-poppins text-sm md:text-md xl:text-[0.9vw] tracking-wide text-center px-6">
          Designed & Developed by Bilal Haider | This page was built with react.js, gsap, framer-motion, locomotive &
          tailwind css.
        </div>
      </div>
    </>
  );
}
