import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillImage from "./SkillImage";

function Backend() {
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
      icon: "node.svg",
      name: "Node.js",
    },
    {
      icon: "nestjs.svg",
      name: "Nest.js",
    },
    {
      icon: "flask.svg",
      name: "Flask",
    },
    {
      icon: "sequelize.svg",
      name: "Sequelize ORM",
    },
    {
      icon: "prisma.svg",
      name: "Prisma ORM",
    },
    {
      icon: "influxdb.svg",
      name: "Influx DB",
    },
    {
      icon: "postgress.svg",
      name: "PostgresSQL",
    },
    {
      icon: "mongo.svg",
      name: "MongoDB.js",
    },
  ];
  const skills2 = [
    {
      icon: "mysql.svg",
      name: "MySQL DB",
    },
    {
      icon: "firebase.svg",
      name: "FireBase",
    },
    {
      icon: "mqtt.svg",
      name: "MQTT",
    },
    {
      icon: "kafka.svg",
      name: "Kafka",
    },
    {
      icon: "golang.svg",
      name: "GoLang",
    },
    {
      icon: "grpc.svg",
      name: "Grpc",
    },
  ];
  const smallScreenSkills = [
    [
      {
        icon: "node.svg",
        name: "Node.js",
      },
      {
        icon: "nestjs.svg",
        name: "Nest.js",
      },
      {
        icon: "flask.svg",
        name: "Flask",
      },
      {
        icon: "sequelize.svg",
        name: "Sequelize ORM",
      },
      {
        icon: "prisma.svg",
        name: "Prisma ORM",
      },
    ],
    [
      {
        icon: "influxdb.svg",
        name: "Influx DB",
      },
      {
        icon: "postgress.svg",
        name: "PostgresSQL",
      },
      {
        icon: "mongo.svg",
        name: "MongoDB.js",
      },
      {
        icon: "mysql.svg",
        name: "MySQL DB",
      },
      {
        icon: "firebase.svg",
        name: "FireBase",
      },
    ],
    [
      {
        icon: "mqtt.svg",
        name: "MQTT",
      },
      {
        icon: "kafka.svg",
        name: "Kafka",
      },
      {
        icon: "golang.svg",
        name: "GoLang",
      },
      {
        icon: "grpc.svg",
        name: "Grpc",
      },
    ],
  ];
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col">
        <h3 className="mt-20 md:mt-[5vw]">{renderLetters("Backend")} </h3>
        <div className="mt-8 flex w-full justify-between md:mt-[3vw]">
          <div className="w-full pr-8 font-poppins text-[1.2rem] tracking-tight md:text-[1.5rem] xl:pr-0 xl:text-[1.5vw]">
            <p className="flex gap-2">
              <span className="block">●</span> Building scalable & robust server-side applications using modern
              frameworks and architectures.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Building secure RESTful APIs using express, nest.js & flask.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Designing & Developing complex microservices architecture using MQTT &
              Kafka.
            </p>

            <p className="flex gap-2">
              <span className="block">●</span> Handling & Developing realtime system using time-series databases.
            </p>
            <p className="flex gap-2">
              <span className="block">●</span> Specialized in relational, and non-relational databases for optimal data
              storage and retrieval.
            </p>
          </div>
          <div className="mt-[-5vw] hidden w-[80%] xl:block">
            <DotLottieReact src="./lotties/backend2.lottie" loop autoplay />
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

export default Backend;
