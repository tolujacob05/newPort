import Image from "next/image";
import { Navbar } from "../navbar/page";
import WidthLayout from "@/components/width-layout";

export const Home = () => {
  return (
    <>
      <WidthLayout>
        <main className="relative flex flex-col lg:flex-row items-center justify-center pt-40 space-y-20 lg:space-x-20 z-20">
          <div className="flex flex-col h-full">
            <div className="text-[#A3B6D9] w-full text-xs md:text-xl h-full">
              Hi everyone, I am{" "}
              <div>
                <h5 className="text-3xl md:text-6xl w-18 md:w-full text-white">
                  Akinjare{" "}
                  <h5>
                    Toluwase Matthew{" "}
                    <span className="border w-0 border-[#0ECF7A] bg-[#0ECF7A] ml-2"></span>
                  </h5>
                </h5>
              </div>
            </div>

            <p className="text-[#A3B6D9] text-xs md:text-xl">
              a{" "}
              <span className="text-[#0ECF7A] text-xs md:text-xl">
                meticulous
              </span>{" "}
              developer{" "}
            </p>
          </div>

          <div className="absolute right-0 w-20 h-20 lg:w-40 lg:h-40 rounded-l-full bottom-2/6 bg-[#4D5BCE] blur-3xl"></div>

          <div className="box z-10 bg-[url('https://res.cloudinary.com/dno5bo4bx/image/upload/v1718038499/portfolio/IMG_0262_ttotuw.jpg')] bg-cover w-full"></div>

          <div className="relative space-y-6">
            <div className="flex gap-2">
              <h5 className="text-[#0ECF7A]">me·ticu·lous</h5>
              <div>
                <Image
                  src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718039661/portfolio/Vector_epovri.png"
                  width={20}
                  height={20}
                  alt="recorder"
                />
              </div>
            </div>
            <h5 className="text-white">/mɪˈtɪkjʊləs/</h5>
            <p className="text-muted-foregroundTwo text-sm z-10">
              {" "}
              A meticulous web developer means paying close attention to detail
              and being thorough in your work. Meticulous web developers pay
              careful attention to every aspect of their work, from code syntax
              to design elements.
            </p>

            <div className="flex space-x-2 items-end justify-end pt-2 pb-6 lg:pt-4 ">
              <div className="h-6 w-6 bg-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-6 w-6 bg-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-6 w-6 bg-green rounded-full animate-bounce"></div>
            </div>
          </div>
        </main>
      </WidthLayout>
    </>
  );
};
