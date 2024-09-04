"use client";
import Typical from "react-typical";
import { Comment } from "./comment";
import TypingEffect from "@/components/typingEffect";
import { useState } from "react";

const Demo = () => {
  const stars = Array.from({ length: 300 }, (_, i) => (
    <div key={i} className="star"></div>
  ));

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const listItems = [
    { name: "Git", width: "40%", shadow: "rgba(16,226,125,0.5)" },
    { name: "Vue", width: "45%", shadow: "rgba(236,237,243,0.5)" },
    { name: "Java", width: "50%", shadow: "rgba(33,51,156,0.5)" },
    { name: "Node", width: "55%", shadow: "rgba(16,226,125,0.5)" },
    { name: "React", width: "60%", shadow: "rgba(236,237,243,0.5)" },
    { name: "Nextjs", width: "65%", shadow: "rgba(33,51,156,0.5)" },
    { name: "GitHub", width: "70%", shadow: "rgba(16,226,125,0.5)" },
    { name: "HTML&CSS", width: "75%", shadow: "rgba(236,237,243,0.5)" },
    { name: "JavaScript", width: "80%", shadow: "rgba(33,51,156,0.5)" },
    { name: "Spring Boot", width: "85%", shadow: "rgba(16,226,125,0.5)" },
    { name: "Tailwind CSS", width: "90%", shadow: "rgba(236,237,243,0.5)" },
    { name: "Intellij IDEA", width: "95%", shadow: "rgba(33,51,156,0.5)" },
    {
      name: "Visual Studio Code",
      width: "100%",
      shadow: "rgba(16,226,125,0.5)",
    },
  ];

  const defaultTypingItems = [
    "Visual Studio Code",
    "Intellij IDEA",
    "React",
    "Nextjs",
    "Vue",
    "SCSS",
    "Tailwind CSS",
    "Figma",
    "HTML&CSS",
    "Node",
    "Java",
    "Spring boot",
  ];

  return (
    <>
      <div className="mt-20 lg:mt-0 relative z-20 space-y-6">
        <section>
          <h1 className="text-muted text-4xl">TOOLS</h1>
          <p className="text-muted-foregroundTwo"> IDEs and Frameworks</p>
        </section>

        <div className="flex flex-col gap-20">
          <div className="xl:relative xl:z-20 space-y-4">
            <p className="text-base text-muted-foregroundTwo typewriter">
              <TypingEffect
                dataPeriod={2000}
                dataType={
                  hoveredIndex !== null
                    ? [listItems[hoveredIndex].name]
                    : defaultTypingItems
                }
              />
            </p>

            <ul className="text-base text-muted-foregroundTwo space-y-2">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="w-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-md hover:p-1"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transition:
                      "box-shadow 0.3s ease-in-out, width 0.3s ease-in-out",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 4px ${6 + index * 2}px ${item.shadow}`
                        : "none",
                    width: hoveredIndex === index ? item.width : "50%",
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
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
