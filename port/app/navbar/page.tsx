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

export const Navbar = () => {
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

  return (
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
        "fixed left-1/2 flex items-center justify-between w-11/12 max-w-screen-xl  px-6 py-3 lg:py-2  bg-black/50 bg-opacity-40 shadow-md z-20  backdrop-blur-md rounded-b-3xl",
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
          <h1 className="relative top-3 text-xl text-[#FFFFF]">TOLU_JACOB</h1>
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
        <section className="MOBILE-MENU flex lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              transition={{ duration: 1, ease: "easeInOut" }}
              className={cn({ "": isNavOpen, hidden: !isNavOpen })}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isNavOpen ? 1 : 0, y: isNavOpen ? 0 : -20 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex flex-col items-center justify-between  pt-24 pb-6 min-h-64">
                  <Link href={"/"} prefetch={false}>
                    <Button onClick={() => setIsNavOpen(false)}>Home</Button>
                  </Link>

                  <Link href={"/about-us"} prefetch={false}>
                    <Button onClick={() => setIsNavOpen(false)}>
                      About Us
                    </Button>
                  </Link>

                  <Link href={"/faq"} prefetch={false}>
                    <Button onClick={() => setIsNavOpen(false)}>FAQ</Button>
                  </Link>

                  <Link href={"/contact"} prefetch={false}>
                    <Button onClick={() => setIsNavOpen(false)}>
                      Contact Us
                    </Button>
                  </Link>
                </ul>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </section>
      </nav>
      <div className=" items-center gap-x-2 hidden lg:flex">
        <Link href={"/"} prefetch={false}>
          <Button variant={"link"} className="px-6">
            Home
          </Button>
        </Link>
        <Link href={"/about-us"} prefetch={false}>
          <Button variant={"link"} className="px-6">
            About
          </Button>
        </Link>
        <Link href={"/faq"} prefetch={false}>
          <Button variant={"link"} className="px-6">
            FAQ
          </Button>
        </Link>

        <Link href={"/contact"} prefetch={false}>
          <Button variant={"link"} className="px-6">
            Contact Us
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
};
