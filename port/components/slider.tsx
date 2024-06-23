"use client";

import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import WidthLayout from "./width-layout";
import Image from "next/image";
import { useState } from "react";
import { Natours } from "./natours";
import { Pizza } from "./pizza";
import { Juno } from "./juno";
import { Blog } from "./blog";

const profiles = [
  {
    name: "Blog 🚀",
    description:
      "Get your up to date information on diverse industries for free 😉",
    framework: "Tools used: React, css",
    link: "https://weehlr-eilp-pw21w07ju-tolu-jacobs-projects.vercel.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204452/portfolio/zorhotxd4nvzbm6g7gmz.png",
  },
  {
    name: "Pizza 🍕",
    description: "Order, get and keep track of your pizza at your convinience",
    framework: "Tools used: React, tailwind css",
    link: "https://leafy-cupcake-a4c936.netlify.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204468/portfolio/c7ze5qzxc359wihxtaun.png",
  },
  {
    name: "Juno",
    description:
      "Home for Young Professionals where you can work, play and network all under one roof. Enjoy intentional designed co-living space where you can live your own way",
    framework: "Tools used: React, css, express",
    link: "https://heartfelt-wisp-0bbe65.netlify.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204459/portfolio/z6uwfum2tg8q45o7uuqy.png",
  },

  {
    name: "Natours",
    description:
      "A tour guide fused with necessary information on your prefered destination 😁",
    framework: "Tools used: Html, scss.",
    link: "https://tourmaline-cactus-4c16b8.netlify.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204477/portfolio/nddeam2fi4nery2k44zd.png",
  },
];

export const Slider = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (cardIndex: number) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <div className="mt-10 lg:mt-0 lg:space-y-6">
        <h1 className="text-muted text-start text-4xl" id="slider">
          WorkShop
        </h1>

        <div className="w-full z-20 justify-center h-[500px] gap-2 hidden lg:flex">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="profile w-full rounded-lg transition-all duration-500 ease-in-out cursor-pointer shadow-lg relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${profile.img})` }}
            >
              <div className="content text-white text-2xl flex items-end p-4 opacity-0 flex-col h-full justify-end bg-gradient-to-t from-[rgba(2,2,46,0.675)] to-transparent translate-y-full transition-all duration-500 delay-200 invisible">
                <h2>{profile.name}</h2>
                <div className="flex gap-6">
                  <WidthLayout>
                    <Dialog>
                      <DialogTrigger asChild>
                        <span className="text-base text-muted-foregroundOne md:text-lg hover:bg-[#F5F5F5]">
                          view
                        </span>
                      </DialogTrigger>

                      <DialogContent className="bg-[#161822] border-[#161822] ">
                        <DialogClose asChild>
                          <div className="hidden md:block">
                            <Button
                              type="button"
                              variant="outline"
                              className="bg-[#E6E7E8] float-right rounded-xl"
                            >
                              Close <span className="text-black ml-1">X</span>
                            </Button>
                          </div>
                        </DialogClose>

                        {profile.name === "Blog 🚀" ? (
                          <Blog />
                        ) : profile.name === "Pizza 🍕" ? (
                          <Pizza />
                        ) : profile.name === "Juno" ? (
                          <Juno />
                        ) : profile.name === "Natours" ? (
                          <Natours />
                        ) : (
                          ""
                        )}

                        <DialogFooter>
                          <div className="px-4 py-3 pt-5 w-full flex flex-col items-center gap-3 md:flex-row md:justify-end">
                            <div className="w-full md:hidden">
                              <DialogClose asChild>
                                <Button
                                  type="submit"
                                  className="h-14 text-base text-[#dadce4] md:text-lg w-full"
                                >
                                  Cancel
                                </Button>
                              </DialogClose>
                            </div>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </WidthLayout>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-x-2 items-end justify-start mt-6 lg:pt-6 relative z-20 hidden lg:flex">
          <div className="h-6 w-6 bg-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-6 w-6 bg-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-6 w-6 bg-green rounded-full animate-bounce"></div>
        </div>
      </div>

      <div>
        <div className="container flex flex-col md:grid md:grid-cols-2 gap-10 space-y-20 md:space-y-0 lg:hidden">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="box-card w-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="animate-[animate_8s_linear_infinite]"></span>
              <div className="w-full">
                <div className="card">
                  <div className="face face1 ">
                    <div className="content flex flex-col gap-4">
                      <h2 className="text-primary text-2xl">{profile.name}</h2>
                      <p className="text-primary text-base">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-20 face face2 h-full flex justify-center items-center transition-all duration-300">
                    {hoveredCard === index ? (
                      <WidthLayout>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex">
                              <div
                                x-data="{}"
                                x-init="$nextTick(() => {
                                  let ul = $refs.logos;
                                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                  ul.nextSibling.setAttribute('aria-hidden', 'true');
                              })"
                                className="relative z-20 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                              >
                                <ul
                                  x-ref="logos"
                                  className="flex w-full items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-muted-foregroundTwo"
                                >
                                  {profile.framework}
                                </ul>
                              </div>

                              <button className="border border-primary-hueOne rounded-lg p-3 text-base text-muted-foregroundOne md:text-lg hover:bg-primary-hueOne">
                                view
                              </button>
                            </div>
                          </DialogTrigger>

                          <DialogContent className="bg-[#161822] border-[#161822]">
                            {profile.name === "Natours" ? (
                              <Natours />
                            ) : profile.name === "Pizza 🍕" ? (
                              <Pizza />
                            ) : profile.name === "Juno" ? (
                              <Juno />
                            ) : profile.name === "Blog 🚀" ? (
                              <Blog />
                            ) : (
                              ""
                            )}

                            <DialogClose asChild>
                              <div className="hidden md:block">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="bg-[#E6E7E8] float-right rounded-xl"
                                >
                                  Close{" "}
                                  <span className="text-black ml-1">X</span>
                                </Button>
                              </div>
                            </DialogClose>

                            <DialogFooter>
                              <div className="px-4 py-3 pt-5 w-full flex flex-col items-center gap-3 md:flex-row md:justify-end">
                                <div className="w-full md:hidden">
                                  <DialogClose asChild>
                                    <Button
                                      type="submit"
                                      className="h-14 text-base text-[#dadce4] md:text-lg w-full"
                                    >
                                      Cancel
                                    </Button>
                                  </DialogClose>
                                </div>
                              </div>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </WidthLayout>
                    ) : (
                      <h2 className="cursor-pointer text-xl transition-all duration-300">
                        {profile.name}
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-2 items-end justify-start pt-6 lg:pt-4 relative z-20 lg:hidden">
          <div className="h-6 w-6 bg-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-6 w-6 bg-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-6 w-6 bg-green rounded-full animate-bounce"></div>
        </div>
      </div>
    </>
  );
};
