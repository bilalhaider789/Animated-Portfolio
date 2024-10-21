import { GrInstagram } from "react-icons/gr";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SkillImage from "./skills/SkillImage";
export default function Socials() {
  const openURL = url => {
    window.open(url, "_blank");
  };
  return (
    <div className="fixed bottom-0 right-0 z-[9999] m-10 h-fit w-6">
      <div className="flex flex-col gap-10">
        <img
          src="./icons/instagram.svg"
          onClick={() => openURL("https://www.instagram.com/i_bilallhaider")}
          className="duration-900 scale-[2] transform cursor-pointer transition ease-out hover:-translate-y-2"
        ></img>
        <img
          src="./icons/linkedin.svg"
          onClick={() => openURL("https://www.linkedin.com/in/muhammad-bilal-haider-8233931b9/")}
          className="duration-900 scale-[2] transform cursor-pointer transition ease-out hover:-translate-y-2"
        ></img>
        <img
          src="./icons/github-vector.svg"
          onClick={() => openURL("https://github.com/bilalhaider789")}
          className="duration-900 scale-[2] transform cursor-pointer transition ease-out hover:-translate-y-2"
        ></img>
        <img
          src="./icons/twitter.svg"
          onClick={() => openURL("https://x.com/BilalRaven")}
          className="duration-900 scale-[2] transform cursor-pointer transition ease-out hover:-translate-y-2"
        ></img>

        {/* <GrInstagram className="scale-[2.5]" />
        <PiLinkedinLogoBold className="scale-[3]" />
        <FaGithub className="scale-[2.5]" />
        <FaTwitter className="scale-[2.5]" /> */}
      </div>
    </div>
  );
}
