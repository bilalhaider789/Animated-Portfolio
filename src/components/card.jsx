import { useEffect, useRef, useState } from "react";

function Card({ title, description, src, link, color }) {
  useEffect(() => {
    console.log(title);
  }, []);
  return (
    <>
      <div className="sticky top-0 h-[100vh] w-full flex justify-center items-center">
        <div style={{ backgroundColor: color }} className=" h-full w-full">
          <img src={link} className="h-full w-full object-cover "></img>
        </div>
      </div>
    </>
  );
}

export default Card;
