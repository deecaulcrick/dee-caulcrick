"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Dee from "@/assets/logo/Dee.svg";
import Caulcrick from "@/assets/logo/Caulcrick.svg";

const Logo = () => {
  return (
    <div
    // className="grid grid-cols-4 gap-40"
    >
      <div>
        <Dee />
      </div>
      {/* <div>
        <Caulcrick />
      </div> */}
    </div>
  );
};

export default Logo;

const FadeEffect = ({ FirstLetter, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex">
      <svg width="100%" viewBox="0 0 800 181">
        <div className="flex justify-between">
          <FirstLetter />
          {text.map((Letter, index) => (
            // <motion.span
            //   key={index}
            //   // initial={{ opacity: 0 }}
            //   // animate={{ opacity: 1 }}
            //   // transition={{ duration: 0.2, delay: index * 0.05 }}
            // >
            <Letter />
            // </motion.span>
          ))}
        </div>
      </svg>
    </div>
  );
};
