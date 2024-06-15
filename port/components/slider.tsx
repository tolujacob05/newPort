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

const profiles = [
  {
    name: "Tours",
    link: "https://tourmaline-cactus-4c16b8.netlify.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204477/portfolio/nddeam2fi4nery2k44zd.png",
  },
  {
    name: "Pizza 🍕",
    link: "https://leafy-cupcake-a4c936.netlify.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204468/portfolio/c7ze5qzxc359wihxtaun.png",
  },
  {
    name: "Juno",
    link: "https://heartfelt-wisp-0bbe65.netlify.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204459/portfolio/z6uwfum2tg8q45o7uuqy.png",
  },
  {
    name: "Blog 🚀",
    link: "https://weehlr-eilp-pw21w07ju-tolu-jacobs-projects.vercel.app",
    img: "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204452/portfolio/zorhotxd4nvzbm6g7gmz.png",
  },
];

export const Slider = () => {
  return (
    <>
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

      <div className="container flex flex-col md:grid md:grid-cols-2 lg:hidden">
        <div className="box-card">
          <span className="animate-[animate_8s_linear_infinite]"></span>
          <div className="content flex flex-col w-full">
            <div className="w-full">
              <Image
                src={
                  "https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204477/portfolio/nddeam2fi4nery2k44zd.png"
                }
                width={100}
                height={100}
                alt=""
              />
            </div>

            <WidthLayout>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-base text-muted-foregroundOne md:text-lg hover:bg-[#F5F5F5]">
                    view
                  </button>
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

        <div className="box-card">
          <span className="animate-[animate_8s_linear_infinite]"></span>
          <div className="content flex flex-col w-full">
            <div>
              <h2>Card one</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <WidthLayout>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-base text-muted-foregroundOne md:text-lg hover:bg-[#F5F5F5]">
                    view
                  </button>
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

        <div className="box-card">
          <span className="animate-[animate_8s_linear_infinite]"></span>
          <div className="content flex flex-col">
            <div>
              <div
                className="relative w-80 h-96 bg-no-repeat bg-center bg-cover shadow-2xl"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80")',
                }}
              >
                <div className="absolute bottom-1/5 flex items-end p-4 text-white">
                  <span className="mr-5">
                    <i className="fas fa-eye mr-2"></i>2350
                  </span>
                  <span className="mr-5">
                    <i className="fas fa-comment-alt mr-2"></i>624
                  </span>
                  <span className="mr-5">
                    <i className="fas fa-download mr-2"></i>1470
                  </span>
                </div>
                <div className="absolute bottom-0 bg-blue-100 flex items-center p-5 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="people"
                    className="w-15 h-15 rounded-full object-cover mr-4"
                  />
                  <div className="text-blue-900">
                    <h2 className="text-xl mb-1">White Mountains</h2>
                    <p className="text-blue-500 text-sm">
                      by <b className="italic">Joseph Therrien</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <WidthLayout>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-base text-muted-foregroundOne md:text-lg hover:bg-[#F5F5F5]">
                    view
                  </button>
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

        <div className="box-card">
          <span></span>
          <div className="content flex flex-col">
            <div>
              <h2 className="text-background-tertiary">Card one</h2>
              <p className="text-background-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <WidthLayout>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-base text-muted-foregroundOne md:text-lg hover:bg-[#F5F5F5]">
                    view
                  </button>
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
    </>
  );
};
