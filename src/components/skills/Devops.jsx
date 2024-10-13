import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillImage from "./SkillImage";

function Devops() {
  useEffect(() => {}, []);
  const skills1 = [
    {
      icon: "docker.svg",
      name: "Docker Containerization",
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
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col bg-primary">
        <h3 className="mt-14 font-otamanopee text-[4vw]">DevOps</h3>
        <div className="flex w-full justify-between">
          <div className="mt-10 w-full font-poppins text-[1.5vw] tracking-tight">
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
              <span className="block">●</span> Configuring Nginx, handling DNS, and integrating SSL certificates.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Using Ansible for efficient, repeatable Infrastructure as Code.
            </p>
          </div>
          <div className="mt-[-5vh] w-[85%] scale-110">
            <DotLottieReact src="./lotties/devops2.lottie" loop autoplay />
          </div>
        </div>
        <div className="mt-12 w-full font-poppins font-semibold text-white">
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
      </section>
    </>
  );
}

export default Devops;
