import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillImage from "./SkillImage";

function Devops() {
  const [screenSize, setScreenSize] = useState(false);

  const getScreenSize = () => {
    if (window.innerWidth < 640) return true;
    return false;
  };

  useEffect(() => {
    setScreenSize(getScreenSize());
    function handleResize() {
      setScreenSize(getScreenSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderLetters = (text, colorIndex) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={colorIndex != undefined && index == colorIndex ? { color: "#e65b05 " } : {}}
        className={`letter heading-lg inline-block font-otamanopee hover:text-secondary ${colorIndex != undefined && index == colorIndex ? "bg-secondary" : ""}`}
      >
        {letter}
      </span>
    ));
  };
  const skills1 = [
    {
      icon: "docker.svg",
      name: "Docker Containerization",
    },
    {
      icon: "kubernetes.svg",
      name: "Kubernetes Orchestration",
    },
    {
      icon: "git.svg",
      name: "Git Version Control",
    },
    {
      icon: "gitlab.svg",
      name: "Gitlab CI-CD",
    },
    {
      icon: "github.svg",
      name: "Github Actions",
    },
    {
      icon: "aws.svg",
      name: "AWS",
    },
    {
      icon: "azure.svg",
      name: "Azure",
    },
    {
      icon: "jira.svg",
      name: "Jira",
    },
  ];
  const skills2 = [
    {
      icon: "linux.svg",
      name: "Linux & Bash Scripting",
    },
    {
      icon: "nginx.svg",
      name: "Nginx",
    },
    {
      icon: "ansible.svg",
      name: "Ansible",
    },
    {
      icon: "dns.svg",
      name: "DNS Records Management",
    },
    {
      icon: "lock.svg",
      name: "Certbot & SSL certificates ",
    },
  ];

  const smallScreenSkills = [
    [
      {
        icon: "docker.svg",
        name: "Docker Containerization",
      },
      {
        icon: "kubernetes.svg",
        name: "Kubernetes Orchestration",
      },
      {
        icon: "git.svg",
        name: "Git Version Control",
      },
      {
        icon: "gitlab.svg",
        name: "Gitlab CI-CD",
      },
      {
        icon: "github.svg",
        name: "Github Actions",
      },
    ],
    [
      {
        icon: "aws.svg",
        name: "AWS",
      },
      {
        icon: "azure.svg",
        name: "Azure",
      },
      {
        icon: "jira.svg",
        name: "Jira",
      },
      {
        icon: "linux.svg",
        name: "Linux & Bash Scripting",
      },
      {
        icon: "nginx.svg",
        name: "Nginx",
      },
    ],
    [
      {
        icon: "ansible.svg",
        name: "Ansible",
      },
      {
        icon: "dns.svg",
        name: "DNS Records Management",
      },
      {
        icon: "lock.svg",
        name: "Certbot & SSL certificates ",
      },
    ],
  ];
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col pl-4">
        <h3 className="mt-20 md:mt-[5vw]">{renderLetters("DevOps")}</h3>
        <div className="mt-8 flex w-full justify-between md:mt-[3vw]">
          <div className="w-full pr-8 font-poppins text-[1.2rem] tracking-tight md:text-[1.5rem] xl:pr-0 xl:text-[1.5vw]">
            <p className="flex gap-2">
              <span className="block">●</span> Containerizing apps with Docker for consistent environments.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Automating CI/CD with GitLab CI/CD, GitHub Actions for smooth &
              continuous deployments.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Managing scalable cloud infrastructure on AWS (EC2, ECS) and Azure.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Managing kubernetes cluster on Bare Metal and AKS.
            </p>

            <p className="flex gap-2">
              <span className="block">●</span> Configuring Nginx, handling DNS, and integrating SSL certificates.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Using Ansible for efficient, repeatable Infrastructure as Code.
            </p>
          </div>
          <div className="mt-[-5vw] hidden w-[85%] scale-110 xl:block">
            <DotLottieReact src="./lotties/devops2.lottie" loop autoplay />
          </div>
        </div>
        {!screenSize && (
          <div className="mb-10 mt-[8vh] flex h-full w-full flex-col justify-center font-poppins font-semibold text-white">
            <div className="flex w-full justify-center gap-5">
              {skills1.map((element, key) => {
                return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
              })}
            </div>
            <div className="mt-6 flex w-full justify-center gap-5">
              {skills2.map((element, key) => {
                return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
              })}
            </div>
          </div>
        )}
        {screenSize && (
          <div className="mt-[8vh] flex h-full w-full flex-col gap-5 font-poppins font-semibold text-white">
            {smallScreenSkills.map((skillSet, key) => {
              return (
                <div className="flex w-full justify-center gap-1 md:gap-5" key={key}>
                  {skillSet.map((element, key) => {
                    return <SkillImage imageName={element.icon} toolTip={element.name} key={key} />;
                  })}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Devops;
