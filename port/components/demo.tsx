"use client";
import Typical from "react-typical";
import { Comment } from "./comment";
import TypingEffect from "@/components/typingEffect";


const Demo = () => {
  const stars = Array.from({ length: 300 }, (_, i) => (
    <div key={i} className="star"></div>
  ));

  return (
    <>
      <div className="mt-20 lg:mt-0 relative z-20">
        <h1 className="text-muted text-4xl">TOOLS</h1>
        <p className="text-muted-foregroundTwo"> IDEs and Frameworks</p>

        <div className="flex flex-col gap-20 pt-10">
          <div className="xl:relative xl:z-20">
            <p className="text-base text-muted-foregroundTwo typewriter">
              <TypingEffect dataPeriod={2000} dataType={["Visual Studio Code", "Intellij IDEA", "React", "Nextjs", "Vue", "SCSS", "Tailwind CSS", "Figma", "HTML&CSS", "Node", ""]}/>
            </p>
          </div>

          <div>
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
