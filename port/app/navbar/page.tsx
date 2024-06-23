"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Hamburger from "hamburger-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const navRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();

    if (latest > (previous as number) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();

    if (latest > (previous as number) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const rings = 13;

  return (
    <div className="relative">
      <div className="absolute right-0 w-28 h-28 md:w-40 md:h-40 rounded-l-full top-0 bg-[#006D67] blur-3xl"></div>
      <motion.nav
        ref={navRef}
        variants={{
          visible: {
            x: "-50%",
            y: 0,
            origin: "center",
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
          hidden: {
            x: "-50%",
            y: -100,
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial={{
          x: "-50%",
          y: -100,
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "fixed left-1/2 flex items-center justify-between w-11/12 max-w-screen-xl  px-6 py-3 lg:py-2  bg-[#080D1A] bg-opacity-40 shadow-md z-50  backdrop-blur-md rounded-b-3xl",
          { isNavOpen: "justify-center" } // Center the navigation when it's closed
        )}
      >
        <div className="h-12">
          <Link
            href="/"
            className={cn("flex flex-row  items-center content-start", {
              "absolute top-0 left-0 px-6 py-4": isNavOpen,
              "w-auto": !isNavOpen,
            })}
            prefetch={false}
          >
            <h1 className="relative top-3 text-xl text-white">TOLU_JACOB</h1>
          </Link>
          <div className="absolute right-5 top-3 lg:hidden">
            <Hamburger
              toggled={isNavOpen}
              rounded
              toggle={setIsNavOpen}
              size={28}
              label="Show menu"
              color="#0ECF7A"
            />
          </div>
        </div>

        <nav className=" flex w-full justify-center items-center">
          <section className="flex lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                transition={{ duration: 1, ease: "easeInOut" }}
                className={cn({ "": isNavOpen, hidden: !isNavOpen })}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: isNavOpen ? 1 : 0,
                    y: isNavOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="flex flex-col gap-14 justify-between pt-28 pb-6 min-h-64">
                    <Link href={"/"}>
                      <Button onClick={() => setIsNavOpen(false)}>HOME</Button>
                    </Link>

                    <Link href={""}>
                      <Button onClick={() => setIsNavOpen(false)}>BASE</Button>
                    </Link>

                    <Link href={"/slider"}>
                      <Button onClick={() => setIsNavOpen(false)}>
                        WORKSHOP
                      </Button>
                    </Link>

                    <a href="/resume.pdf" download="resume">
                      <button className="relative text-green cursor-pointer py-2 px-4 border-2 border-green-accentOne rounded-md perspective-8 text-sm font-medium tracking-wider shadow-[inset_0px_0px_0.5em_0px_var(--glow-color),_0px_0px_0.5em_0px_var(--glow-color)] animate-[border-flicker_2s_linear_infinite] hover:animate-none hover:text-muted-foregroundTwo hover:border-muted-foregroundTwo">
                        <span className="relative inline-block mr-[-0.2em] text-shadow-[0_0_0.125em_hsla(0,0%,100%,0.3),_0_0_0.45em_var(--green-accentOne)] animate-[text-flicker_3s_linear_infinite]">
                          DOWNLOAD
                          <span className="ml-2 opacity-50 animate-[faulty-flicker_2s_linear_infinite]">
                            CV
                          </span>
                        </span>
                      </button>
                    </a>
                  </ul>

                  <div className="pt-20">
                    <p className="text-muted-foregroundOne text-center py-6">
                      Quick Connect
                    </p>

                    <ul className="flex items-center justify-center border gap-14 px-6 py-4 border-muted-foregroundTwo bg-[#080D1A]/50 rounded-lg w-full">
                      <li>
                        <a href="https://www.github.com/tolujacob05">
                          <Image
                            src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718117597/portfolio/Vector5_ape0cq.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="mailto:tolujacob05@gmail.com">
                          <Image
                            src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718117582/portfolio/Vector4_zjfv2b.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/akinjare-toluwase">
                          <Image
                            src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718117571/portfolio/Vector3_ms8chz.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/tolu_jacob05">
                          <Image
                            src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718117562/portfolio/Vector2_ylmdsv.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </section>
        </nav>
        <div className=" items-center gap-x-2 hidden lg:flex">
          <Link href={"/"}>
            <Button variant={"link"} className="px-6">
              HOME
            </Button>
          </Link>
          <Link href={""}>
            <Button variant={"link"} className="px-6">
              BASE
            </Button>
          </Link>
          <Link href={"/slider"}>
            <Button variant={"link"} className="px-6">
              WORKSHOP
            </Button>
          </Link>

          <Link href={""}>
            <Button variant={"link"} className="px-6">
              REPO
            </Button>
          </Link>

          <a href="/resume.pdf" download="resume">
            <button className="relative text-green cursor-pointer py-2 px-4 border-2 border-green-accentOne rounded-md perspective-8 text-sm font-medium tracking-wider shadow-[inset_0px_0px_0.5em_0px_var(--glow-color),_0px_0px_0.5em_0px_var(--glow-color)] animate-[border-flicker_2s_linear_infinite] hover:animate-none hover:text-muted-foregroundTwo hover:border-muted-foregroundTwo">
              <span className="relative inline-block mr-[-0.2em] text-shadow-[0_0_0.125em_hsla(0,0%,100%,0.3),_0_0_0.45em_var(--green-accentOne)] animate-[text-flicker_3s_linear_infinite]">
                DOWNLOAD
                <span className="ml-2 opacity-50 animate-[faulty-flicker_2s_linear_infinite]">
                  CV
                </span>
              </span>
            </button>
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
