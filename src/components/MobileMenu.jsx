"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DarkModeToggle from "./DarkModeToggle";
import TextModeToggle from "./TextModeToggle";
import Link from "./Link";

const MobileMenu = ({ isText, setIsText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { scaleY: 0, scaleX: 0 }, // Offscreen
    visible: {
      scaleY: 1,
      scaleX: 1,
      originY: "top", // Fully on-screen
      originX: "right",
      transition: {
        ease: "easeInOut",
        when: "beforeChildren", // Ensures inner items animate after the menu
      },
    },
    exit: {
      scaleY: 0, // Offscreen again
      scaleX: 0, // Offscreen again
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        // when: "afterChildren", // Ensures inner items exit first
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scaleY: 0 }, // Start below with 0 opacity
    visible: (custom) => ({
      opacity: 1,
      scaleY: 1,
      originY: "top",
      transition: { duration: 0.5, delay: custom * 0.5 },
    }), // Fade in and slide up
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: { duration: 0.1 },
    }, // Fade out and slide down
  };
  return (
    <div>
      <div>
        <div className=" md:w-[33vw] flex justify-end">
          <button
            className="rounded-[50%] h-8 w-8 bg-zinc-100 dark:bg-neutral-700 flex items-center justify-center"
            onClick={handleMenu}
          >
            <svg
              width="22"
              height="10"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="stroke-black dark:stroke-white"
                y1="1"
                x2="22"
                y2="1"
                stroke="black"
                stroke-width="1"
              />
              {!isOpen && (
                <line
                  y1="10"
                  x2="22"
                  y2="10"
                  stroke={`${isOpen ? "white" : "black"}`}
                  stroke-width="1"
                />
              )}
            </svg>

            {/* {isOpen ? "CLOSE" : "MENU"} */}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              className=" absolute top-[40px] left-2 right-2 p-6 bg-zinc-100 dark:bg-neutral-700 rounded-lg text-zinc-500/60 dark:text-zinc-300 w-[97vw] md:w-fit h-fit  m-auto mt-2 md:mt-2 md:mr-2 z-1111"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div className="flex flex-col gap-4">
                <motion.div
                  className="text-sm tracking-tight border-b dark:border-zinc-500 pb-6"
                  custom={0.5}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h3 className="text-black dark:text-white mb-3">Settings</h3>
                  <TextModeToggle isText={isText} setIsText={setIsText} />
                  <DarkModeToggle />
                </motion.div>
                <motion.div
                  custom={1}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h3 className="text-black dark:text-white mb-3">Contact</h3>
                  <Link
                    url="mailto:deecaulcrick@gmail.com"
                    text="M deecaulcrick@gmail.com"
                  />
                  <div className="flex gap-2 mt-2">
                    <Link
                      url="https://linkedin.com/in/deborah-caulcrick"
                      text="LinkedIn /"
                    />
                    <Link
                      url="https://github.com/deecaulcrick"
                      text="Github /"
                    />
                    <Link
                      url="https://twitter.com/deecaulcrick"
                      text="Twitter"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenu;
