import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

function Experience() {
  const [selected, setSelected] = useState(1);
  const renderLetters = (text, colorIndex) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={colorIndex != undefined && index == colorIndex ? { color: "#e65b05 " } : {}}
        className={`letter inline-block hover:text-secondary ${colorIndex != undefined && index == colorIndex ? "bg-secondary" : ""}`}
      >
        {letter}
      </span>
    ));
  };
  return (
    <section
      className="experience-full flex h-fit w-full items-center justify-center pb-[5vh] 2xl:pb-[10vh]"
      id="experience"
    >
      <div className="experience flex h-full w-full flex-col items-center">
        <h3 className="heading-lg mt-4 font-otamanopee">{renderLetters("Experience")}</h3>
        <div className="mt-16 flex w-full flex-col px-4 md:px-8 xl:flex-row xl:justify-start">
          <div className="flex w-full xl:hidden md:text-lg">
            <div
              className={`w-full border-black py-2 text-center hover:text-secondary ${selected == 1 ? "border-r-2 border-t-2 font-semibold text-secondary" : "border-b-2"}`}
              onClick={() => setSelected(1)}
            >
              <p>Cowlar Design Studio</p>
            </div>
            <div
              className={`w-full border-black py-2 text-center hover:text-secondary ${selected == 2 ? "border-x-2 border-t-2 font-semibold text-secondary" : "border-b-2"}`}
              onClick={() => setSelected(2)}
            >
              <p>Google DSC</p>
            </div>
            <div
              className={`w-full border-black py-2 text-center hover:text-secondary ${selected == 3 ? "border-l-2 border-t-2 font-semibold text-secondary" : "border-b-2"}`}
              onClick={() => setSelected(3)}
            >
              <p>Texinity Technology</p>
            </div>
          </div>
          <div className="hidden h-fit xl:flex">
            <div className="mr-12 hidden h-fit w-fit flex-col items-center justify-start text-nowrap text-[1.5vw] font-semibold xl:flex">
              <h1
                className={`cursor-pointer hover:text-secondary ${selected == 1 ? "text-secondary" : ""}`}
                onClick={() => setSelected(1)}
              >
                Cowlar Design Studio (YC-17)
              </h1>
              <div>
                <div className="mt-5 h-6 w-1 bg-black"></div>
                <div className="mt-3 h-6 w-1 bg-black"></div>
                <div className="mt-3 h-6 w-1 bg-black"></div>
                <div className="mt-3 h-6 w-1 bg-black"></div>
              </div>
              <h1
                className={`mt-5 cursor-pointer hover:text-secondary ${selected == 2 ? "text-secondary" : ""}`}
                onClick={() => setSelected(2)}
              >
                Google DSC Development Lead
              </h1>
              <div>
                <div className="mt-5 h-6 w-1 bg-black"></div>
                <div className="mt-3 h-6 w-1 bg-black"></div>
                <div className="mt-3 h-6 w-1 bg-black"></div>
                <div className="mt-3 h-6 w-1 bg-black"></div>
              </div>
              <h1
                className={`mt-5 cursor-pointer hover:text-secondary ${selected == 3 ? "text-secondary" : ""}`}
                onClick={() => setSelected(3)}
              >
                Texinity Technology
              </h1>
            </div>
            <div className="w-1 bg-black"></div>
          </div>
          <div className="mt-8 xl:mt-0">
            {selected == 1 && (
              <div className="paragraph-md xl:ml-14">
                <h3 className="heading-sm flex cursor-pointer items-center font-semibold underline hover:text-secondary">
                  <a href="https://cowlardesignstudio.com/" target="_blank" rel="noopener noreferrer">
                    Product Lead & Full Stack Polyglot Engineer ⦿ June, 2023 - Present{" "}
                  </a>
                  <FaExternalLinkAlt className="ml-2 scale-75" />
                </h3>
                <div className="mt-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> Frontend Components & Development:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span> Designed and implemented responsive user interfaces for web
                    applications ensuring optimal performance and user experience.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Implemented and managed live streaming , optimized image serving,
                    canvas drawings, complex state management & real-time data handling.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Contributed to the development and maintenance of cowlar's
                    component library, streamlining UI development and ensuring consistency across multiple projects.{" "}
                  </p>
                </div>
                <div>
                  <h3 className="mt-6 flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> Backend & System Design:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span> Design & developed backend consisting of REST apis and MQTT (IOT
                    communication).
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Implemented and manage SQL, no-SQL and time series databases on
                    backend.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Implemented comprehensive backend testing strategies, enhancing
                    system reliability and performance.
                  </p>
                </div>

                <div>
                  <h3 className="mt-6 flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> Cross-Disciplinary Expertise:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span> Designed and managed CI/CD pipelines of GitLab and GitHub, along
                    with runners for streamlined deployments.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Managed dockers, kubernetes clusters and Virtual Machines on
                    private cloud and Azure.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Collaborated with various teams including Mobile, Web, Embedded, AI
                    & Bussiness to enhance product development and ensure a cohesive outcome.
                  </p>
                </div>
              </div>
            )}

            {selected == 2 && (
              <div className="paragraph-md xl:ml-14">
                <h3 className="heading-sm flex cursor-pointer items-center font-semibold underline hover:text-secondary">
                  <a
                    href="https://gdg.community.dev/gdg-on-campus-comsats-university-islamabad-pakistan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GDSC Comsats Islamabad ⦿ August, 2022 - July, 2023
                  </a>
                  <FaExternalLinkAlt className="ml-2 scale-75" />
                </h3>
                <div className="mt-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> GDSC Core Team & Collaboration:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span> Served as a core team member of GDSC, coordinating various
                    activities.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Collaborated with national and international GDSC societies.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Facilitated discussions to strengthen connections between different
                    GDSC communities.
                  </p>
                </div>
                <div>
                  <h3 className="mt-6 flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> Workshops & Training:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span>Conducted workshops on Flutter, Python, and DataCamp courses,
                    offering hands-on training.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Led training sessions to share expertise and practical knowledge
                    with participants.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Organized events and guided my team in multiple competitions.
                  </p>
                </div>
              </div>
            )}

            {selected == 3 && (
              <div className="paragraph-md xl:ml-14">
                <h3 className="heading-sm flex cursor-pointer items-center font-semibold underline hover:text-secondary">
                  <a
                    href="https://www.texinity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Mobile & Web Intern ⦿ March, 2022 - May, 2022
                  </a>
                  <FaExternalLinkAlt className="ml-2 scale-75" />
                </h3>
                <div className="mt-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> Flutter Mobile Development:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span> Developed cross-platform mobile applications using Flutter to
                    deliver a seamless user experience on both iOS and Android devices.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Implemented advanced state management solutions, ensuring efficient
                    and scalable app behavior across complex user flows.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Integrated third-party services and APIs into Flutter, enhancing
                    functionality and interoperability with external systems and platforms.
                  </p>
                </div>
                <div>
                  <h3 className="mt-6 flex items-center gap-2 font-semibold">
                    <BiSolidRightArrow /> React.js & Next.js:
                  </h3>
                  <p className="flex gap-2">
                    <span className="block">•</span>Developed responsive and dynamic web applications using React and
                    React Hooks for efficient lifecycle management.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Engineered SEO-friendly websites with Next.js, implementing
                    server-side rendering and static site generation.
                  </p>
                  <p className="flex gap-2">
                    <span className="block">•</span> Learned the development of complex & dynamic UI with state
                    management for dynamic screens.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
