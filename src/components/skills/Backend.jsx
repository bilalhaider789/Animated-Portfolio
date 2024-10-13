import { useEffect, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillImage from "./SkillImage";

function Backend() {
  useEffect(() => {}, []);
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
  return (
    <>
      <section className="flex h-[100vh] w-[100vw] flex-col bg-primary">
        <h3 className="mt-14 font-otamanopee text-[4vw]">Backend</h3>
        <div className="flex w-full justify-between">
          <div className="mt-10 w-full font-poppins text-[1.5vw] tracking-tight">
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
          <div className="mt-[-5vh] w-[80%]">
            <DotLottieReact src="./lotties/backend2.lottie" loop autoplay />
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

export default Backend;
