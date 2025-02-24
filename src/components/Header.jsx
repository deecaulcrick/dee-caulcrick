"use client";

import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
  easeInOut,
  useTransform,
} from "motion/react";

import AnimatedLogo from "./AnimatedLogo";
import AnimatedDee from "./AnimatedDee";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";
import TextModeToggle from "./TextModeToggle";

const Header = ({ setIsText, isText, isDark, setIsDark }) => {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      windowHeight: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }

      // Initialize size on mount
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Clean up
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  const { width, windowHeight } = useWindowSize();
  const pathname = usePathname();

  const { scrollY } = useScroll();

  const [hasBorder, setHasBorder] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("stay");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasBorder(latest > 5);
    const diff = latest - scrollY.getPrevious();
    if (latest > 70) {
      setScrollDirection(diff > 0 ? "down" : "up");
    }
    // console.log(scrollDirection, latest, diff);
  });

  // element height
  const elementRef = useRef(null);
  const targetRef = useRef(null);

  // console.log(logoHeight);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }

    // Optional: Update height on window resize
    const handleResize = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const headerHeight =
    width <= 768 ? 50 : 768 < width < 1023 ? 120 : width >= 1024 ? 150 : 150;
  const { scrollYProgress } = useScroll();
  const logoHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    [headerHeight, 50]
  );

  return (
    <section className="px-4 h-fit w-full bg-green-400">
      <div className="w-full fixed top-0 left-0 bg-red-400">
        <motion.div
          layout
          animate={{
            zIndex: 99,
          }}
          className=" z-99 w-full top-0 left-0 px-4 darkMode"
        >
          <motion.div
            ref={elementRef}
            layout
            animate={{
              zIndex: 99,
            }}
            className={` grid grid-cols-12 border-b borderStyle pt-4  relative h-fit darkMode`}
          >
            <div className="col-span-6">
              <div className="">
                <AnimatedDee logoHeight={logoHeight} />
                {/* <Deborah className="w-full " /> */}
              </div>
            </div>
            <div className="col-span-6">
              <div className="">
                <AnimatedLogo
                  logoHeight={logoHeight}
                  className=" w-full"
                  scrollDirection={scrollDirection}
                  height={height}
                />
                {/* <Caulcrick className="-ml-6 w-full " /> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
        <AnimatePresence>
          <div>
            <motion.div
              ref={targetRef}
              initial={{
                y: 0,
                zIndex: 10,
              }}
              animate={{
                y:
                  scrollDirection == "up"
                    ? 0
                    : scrollDirection == "stay"
                    ? 0
                    : -height,
              }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
              style={{
                translateY: 0,
              }}
              className="text-sm text-zinc-500 leading-none z-10 w-full  absolute  px-4  dark:text-zinc-400 darkMode"
            >
              <motion.div
                // style={{
                //   borderBottom:
                //     isDark && hasBorder
                //       ? "1px solid #3f3f46"
                //       : hasBorder
                //       ? "1px solid #d4d4d8"
                //       : "",
                // }}
                animate={{
                  borderBottom:
                    isDark && hasBorder
                      ? "1px solid #3f3f46"
                      : !isDark && hasBorder
                      ? "1px solid #d4d4d8"
                      : "",

                  transition: { ease: easeInOut },
                }}
                className="grid grid-cols-2 md:grid-cols-4 py-3 text-zinc-500 dark:text-zinc-400"
              >
                <div className="hidden md:block ">
                  <p>
                    Independent <br />
                    Developer
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <Link
                        href="/about"
                        className={`${
                          pathname === "/about"
                            ? "text-black dark:text-white"
                            : ""
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className={`${
                          pathname === "/" ? "text-black dark:text-white" : ""
                        }`}
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <ul>
                    <li>
                      <TextModeToggle setIsText={setIsText} isText={isText} />{" "}
                    </li>
                    <li>
                      <DarkModeToggle setIsDark={setIsDark} isDark={isDark} />{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="md:hidden">
                    <MobileMenu isText={isText} setIsText={setIsText} />
                  </div>
                  <p className="text-right hidden md:grid">
                    {`${width} x ${windowHeight}`}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
      {/* <div className="h-20 bg-pink-400"></div> */}
    </section>
  );
};

export default Header;

const FadeEffect = ({ firstLetter, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h1
      ref={ref}
      className=" uppercase text-center text-5xl font-bold tracking-tighter md:text-[7.2rem] lg:text-[10.5rem] leading-none"
    >
      {firstLetter}
      <AnimatePresence>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </h1>
  );
};
