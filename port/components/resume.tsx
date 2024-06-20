import Image from "next/image";
import { Button } from "./ui/button";
import WidthLayout from "./width-layout";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { SVGProps } from "react";

const Resume = (props: SVGProps<SVGSVGElement>) => {
  return (
    <>
      <div className="relative z-20 flex flex-col items-start justify-start space-y-6">
        <section>
          <h1 className="text-muted text-4xl">RESUME</h1>
          <p className="text-muted-foregroundTwo">Career Journey</p>
        </section>

        <section className="grid grid-cols-2 lg:flex lg:gap-4 gap-10">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-2 items-center justify-start">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                    {...props}
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      color="currentColor"
                    >
                      <path d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22M8 4V2m8 2V2"></path>
                      <path d="M14.018 9.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239s2.848.61 3.906 2.24c.068.105.087.234.025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.772-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.042-.238.026-.344"></path>
                    </g>
                  </svg>
                </div>

                <span className="text-base text-muted-foregroundTwo md:text-lg hover:text-muted">
                  Summary
                </span>
              </div>
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

              <WidthLayout>
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="flex gap-2 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                          {...props}
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            color="currentColor"
                          >
                            <path d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22M8 4V2m8 2V2"></path>
                            <path d="M14.018 9.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239s2.848.61 3.906 2.24c.068.105.087.234.025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.772-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.042-.238.026-.344"></path>
                          </g>
                        </svg>
                      </div>

                      <p className="text-base text-green lg:text-2xl">
                        Summary
                      </p>
                    </div>

                    <p className="text-muted-foregroundTwo text-xs lg:text-base">
                      Experienced web developer specializing in React and
                      Typescript with expertise in agile methodologies. Strong
                      problem-solving skills, very attentive to details and a
                      keen interest in continuous learning. Prioritizes
                      considering business needs and constraints when
                      problem-solving.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base text-green lg:text-2xl">
                      PROGRAMMING
                    </p>

                    <p className="text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                      Next JS, JavaScript, TypeScript, React, Vue, Git, Scss,
                      Figma, Adobe Node.Js
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base text-green lg:text-2xl">
                      DATABASES & TOOLS
                    </p>

                    <p className="text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                      HTML, Mongo DB, GitHub
                    </p>
                  </div>
                </div>
              </WidthLayout>

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

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-2 items-center justify-start">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                    {...props}
                  >
                    <rect
                      width={33}
                      height={36.471}
                      x={7.5}
                      y={7.029}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      rx={4}
                      ry={4}
                    ></rect>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.41 7.029V4.5m19.18 2.529V4.5M7.5 16.947h33m-25.482 8.937h18.834m-18.834 7.57h12.989"
                    ></path>
                  </svg>
                </div>

                <span className="text-base text-muted-foregroundTwo md:text-lg hover:text-muted">
                  Experience
                </span>
              </div>
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

              <WidthLayout>
                <div className="space-y-10">
                  <div className="flex gap-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                        className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                        {...props}
                      >
                        <rect
                          width={33}
                          height={36.471}
                          x={7.5}
                          y={7.029}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          rx={4}
                          ry={4}
                        ></rect>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.41 7.029V4.5m19.18 2.529V4.5M7.5 16.947h33m-25.482 8.937h18.834m-18.834 7.57h12.989"
                        ></path>
                      </svg>
                    </div>

                    <p className="text-base text-green lg:text-4xl">
                      Experience
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex gap-1 items-end">
                        <p className="text-base text-green lg:text-2xl">
                          Seamfix Ltd
                        </p>
                        <span className="text-muted-foregroundTwo text-xs">
                          Lagos, Nigeria
                        </span>
                      </div>

                      <div className="flex gap-1 items-center justify-between">
                        <p className="text-muted-foregroundTwo text-xs lg:text-base">
                          Web Developer
                        </p>
                        <span className="text-muted-foregroundTwo text-xs">
                          June, 2022 - December, 2022
                        </span>
                      </div>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                      <li>
                        Tackled technical challenges and found creative
                        solutions while building an ecommerce app so as to
                        ensure functionality and user satisfaction.
                      </li>
                      <li>
                        Involved in various fireside chats that improves
                        communication skills, interaction, time management and
                        networking.
                      </li>
                      <li>
                        Had an extensive and understanding session about
                        pixelperfect layouts in order for a polished user
                        experience.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex gap-1 items-end">
                        <p className="text-base text-green lg:text-2xl">
                          Weesher
                        </p>
                        <span className="text-muted-foregroundTwo text-xs">
                          Lagos, Nigeria
                        </span>
                      </div>

                      <div className="flex gap-1 items-center justify-between">
                        <p className="text-muted-foregroundTwo text-xs lg:text-base">
                          Web Developer
                        </p>
                        <span className="text-muted-foregroundTwo text-xs">
                          Janurary, 2023 - Present
                        </span>
                      </div>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                      <li>
                        Developed and maintained responsive user interfaces for
                        a high traffic e-commerce platform using React and
                        Redux.
                      </li>
                      <li>
                        Optimized website performance for faster loading times
                        and improved user engagement.
                      </li>
                      <li>
                        Collaborated with designers and backend developers to
                        deliver features on time and within budget.
                      </li>
                      <li>
                        Assisted senior developers in integrating fronted
                        components with backend APIs.
                      </li>
                    </ul>
                  </div>
                </div>
              </WidthLayout>

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

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-2 items-center justify-start">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                    {...props}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M4.495 12.995L2.992 14.55c-.54.56-.81.839-.904 1.076c-.213.54-.03 1.138.433 1.422c.204.124.57.163 1.305.24c.414.044.622.066.795.133c.389.149.69.462.835.864c.064.18.085.394.127.823c.075.76.113 1.14.233 1.351c.274.48.853.669 1.374.448c.228-.096.498-.376 1.039-.935l2.482-2.57a8.508 8.508 0 0 1-6.216-4.408m8.795 4.409l2.482 2.57c.54.56.81.839 1.038.936c.521.22 1.1.031 1.374-.449c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076l-1.503-1.556a8.508 8.508 0 0 1-6.216 4.408"
                    ></path>
                  </svg>
                </div>

                <span className="text-base text-muted-foregroundTwo md:text-lg hover:text-muted">
                  Certification
                </span>
              </div>
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

              <WidthLayout>
                <div className="space-y-10">
                  <div className="flex gap-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                        {...props}
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M4.495 12.995L2.992 14.55c-.54.56-.81.839-.904 1.076c-.213.54-.03 1.138.433 1.422c.204.124.57.163 1.305.24c.414.044.622.066.795.133c.389.149.69.462.835.864c.064.18.085.394.127.823c.075.76.113 1.14.233 1.351c.274.48.853.669 1.374.448c.228-.096.498-.376 1.039-.935l2.482-2.57a8.508 8.508 0 0 1-6.216-4.408m8.795 4.409l2.482 2.57c.54.56.81.839 1.038.936c.521.22 1.1.031 1.374-.449c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076l-1.503-1.556a8.508 8.508 0 0 1-6.216 4.408"
                        ></path>
                      </svg>
                    </div>

                    <span className="text-base text-muted-foregroundTwo md:text-lg hover:text-muted">
                      Certification
                    </span>
                  </div>

                  <ul className="list-disc pl-5 text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                    <div className="space-y-4">
                      <li>Certificate of Completion - Seamfix NextGen</li>

                      <div
                        className="relative w-full"
                        style={{ aspectRatio: "16 / 9" }}
                      >
                        <Image
                          src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718702427/portfolio/Screenshot_20230202_165005_Office_f7jfks.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="Juno Image"
                        />
                      </div>
                    </div>
                  </ul>

                  <ul className="list-disc pl-5 text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                    <div className="space-y-4">
                      <li>
                        Certificate of completion - The complete Javascript
                        course 2023 by Jonas Schmedtmann
                      </li>

                      <div
                        className="relative w-full"
                        style={{ aspectRatio: "16 / 9" }}
                      >
                        <Image
                          src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718702636/portfolio/JAVASCRIPTCERTIFICATE_kiw5fl.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="Juno Image"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </WidthLayout>

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

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-2 items-center justify-start">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                    className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                    {...props}
                  >
                    <path
                      fill="currentColor"
                      d="M7.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
                    ></path>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                      clipRule="evenodd"
                    ></path>
                    <path fill="currentColor" d="M8 15v-3H7v3z"></path>
                  </svg>
                </div>

                <span className="text-base text-muted-foregroundTwo md:text-lg hover:text-muted">
                  Education
                </span>
              </div>
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

              <WidthLayout>
                <div className="space-y-10">
                  <div className="flex gap-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 15 15"
                        className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                        {...props}
                      >
                        <path
                          fill="currentColor"
                          d="M7.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
                        ></path>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="m12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                          clipRule="evenodd"
                        ></path>
                        <path fill="currentColor" d="M8 15v-3H7v3z"></path>
                      </svg>
                    </div>

                    <p className="text-base text-green lg:text-4xl">
                      Education
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl text-muted">
                      Bachelors of Science, Human Anatomy
                    </p>
                    <p className="text-base text-muted-foregroundTwo">
                      AFe Babalola University, Ado-Ekiti
                    </p>
                  </div>
                </div>
              </WidthLayout>

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

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-2 items-center justify-start">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                    {...props}
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m23.417 29.67l6.663-6.662m-6.678-.015l5.46 5.46M9.44 26.34h9.422m3.175-12.179h9.423M14.15 9.428v9.466m-4.71-4.733h9.422"
                    ></path>
                    <circle
                      cx={14.151}
                      cy={23.028}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={14.151}
                      cy={29.432}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={34.274}
                      cy={34.433}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={31.046}
                      cy={34.433}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={34.274}
                      cy={34.433}
                      r={8.067}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M26.258 35.079H8.348c-1.49 0-2.69-1.2-2.69-2.69V8.19c0-1.49 1.2-2.689 2.69-2.689H32.55c1.49 0 2.689 1.2 2.689 2.689v18.177"
                    ></path>
                    <circle
                      cx={37.497}
                      cy={34.433}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={34.274}
                      cy={31.21}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={31.046}
                      cy={31.21}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={37.497}
                      cy={31.21}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={34.274}
                      cy={37.656}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={31.046}
                      cy={37.656}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx={37.497}
                      cy={37.656}
                      r={0.75}
                      fill="currentColor"
                    ></circle>
                  </svg>
                </div>

                <span className="text-base text-muted-foregroundTwo md:text-lg hover:text-muted">
                  Skills & Interests
                </span>
              </div>
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

              <WidthLayout>
                <div className="space-y-10">
                  <div className="flex gap-2 items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                        className="text-background bg-green rounded-sm text-3xl lg:text-4xl p-2"
                        {...props}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m23.417 29.67l6.663-6.662m-6.678-.015l5.46 5.46M9.44 26.34h9.422m3.175-12.179h9.423M14.15 9.428v9.466m-4.71-4.733h9.422"
                        ></path>
                        <circle
                          cx={14.151}
                          cy={23.028}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={14.151}
                          cy={29.432}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={34.274}
                          cy={34.433}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={31.046}
                          cy={34.433}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={34.274}
                          cy={34.433}
                          r={8.067}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M26.258 35.079H8.348c-1.49 0-2.69-1.2-2.69-2.69V8.19c0-1.49 1.2-2.689 2.69-2.689H32.55c1.49 0 2.689 1.2 2.689 2.689v18.177"
                        ></path>
                        <circle
                          cx={37.497}
                          cy={34.433}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={34.274}
                          cy={31.21}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={31.046}
                          cy={31.21}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={37.497}
                          cy={31.21}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={34.274}
                          cy={37.656}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={31.046}
                          cy={37.656}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx={37.497}
                          cy={37.656}
                          r={0.75}
                          fill="currentColor"
                        ></circle>
                      </svg>
                    </div>

                    <p className="text-base text-green lg:text-4xl">
                      Skills & Interests
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-green lg:text-2xl">SOFTWARE</p>

                    <p className="text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                      Discord, Zoom, Slack, Microsoft Office (Word, Excel,
                      PowerPoint, Excel) Google Drive ( Docs, Slides, Sheets).
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-green lg:text-2xl">
                      INTERESTS
                    </p>

                    <p className="text-xs text-muted-foregroundTwo lg:text-base border-background bg-background p-4 rounded-sm">
                      Football, Leadership, Reading
                    </p>
                  </div>
                </div>
              </WidthLayout>

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
        </section>
      </div>
    </>
  );
};

export default Resume;
