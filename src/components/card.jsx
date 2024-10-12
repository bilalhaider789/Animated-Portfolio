import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Card({ index, title, description, src, link, color, progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  useEffect(() => {
  }, []);
  return (
    <>
      <div className="sticky top-10 flex h-[100vh] w-full items-center justify-center">
        <motion.div
          style={{ scale, backgroundColor: color, top: `calc(-3% + ${index * 45}px)` }}
          className="relative h-[60vh] w-[70vw] rounded-lg"
        >
          <img src={link} className="h-full w-full rounded-lg object-cover"></img>
        </motion.div>
      </div>
    </>
  );
}

export default Card;
