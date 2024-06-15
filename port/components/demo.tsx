"use client";

import { useEffect, useMemo } from "react";

const RotatingCards = () => {
  const words = useMemo(
    () => [
      "Gretel-ACTGAN",
      "Gretel-ACTGAN",
      "Gretel-ACTGAN",
      "Gretel-ACTGAN",
      "Gretel-ACTGAN",
      "Gretel-ACTGAN",
    ],
    []
  );

  useEffect(() => {
    const cardList = document.getElementById("card-list");
    if (cardList) {
      cardList.style.setProperty("--count", words.length.toString());

      const listItems = cardList.querySelectorAll("li");
      listItems.forEach((li, index) => {
        if (li instanceof HTMLElement) {
          li.style.setProperty(
            "animation-delay",
            `calc((var(--rotate-speed) / var(--count)) * ${-index}s)`
          );
          const card = li.querySelector(".card");
          if (card instanceof HTMLElement) {
            card.style.setProperty(
              "animation-delay",
              `calc((var(--rotate-speed) / var(--count)) * ${-index}s)`
            );
          }
        }
      });
    }
  }, [words]);

  return (
    <div className="relative mx-auto aspect-square">
      <div className="relative w-full h-full">
        <ul
          id="card-list"
          className="relative flex items-center justify-center w-full h-full outline outline-dotted outline-magenta"
        >
          {words.map((word, index) => (
            <li
              key={index}
              className="absolute top-1/2 transform -translate-y-1/2 w-auto animate-rotateCW"
            >
              <div className="card w-3/4 flex flex-col items-start p-4 gap-2 bg-white shadow-md rounded-lg animate-rotateCCW">
                <a href="#">
                  <span className="model-name font-medium text-lg leading-6 text-indigo-600 block">
                    {word}
                  </span>
                  <span>
                    Model for generating highly dimensional, mostly numeric,
                    tabular data
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="last-circle absolute w-2/3 aspect-square left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-800 opacity-25 rounded-full shadow-md"></div> */}
        {/* <div className="second-circle absolute w-2/5 aspect-square left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 opacity-50 rounded-full shadow-md"></div> */}
      </div>
      {/* <div className="mask absolute w-1/2 top-0 bottom-0 bg-gradient-radial from-indigo-100 to-indigo-600 animate-pulseGlow"></div> */}
      {/* <div className="center-circle absolute w-56 aspect-square left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-700 shadow-md rounded-full"></div> */}
    </div>
  );
};

export default RotatingCards;
