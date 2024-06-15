"use client";

import { useEffect, useMemo } from "react";

const Demo = () => {
  // const words = useMemo(
  //   () => [
  //     "Gretel-ACTGAN",
  //     "Gretel-ACTGAN",
  //     "Gretel-ACTGAN",
  //     "Gretel-ACTGAN",
  //     "Gretel-ACTGAN",
  //     "Gretel-ACTGAN",
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   const cardList = document.getElementById("card-list");
  //   if (cardList) {
  //     cardList.style.setProperty("--count", words.length.toString());

  //     const listItems = cardList.querySelectorAll("li");
  //     listItems.forEach((li, index) => {
  //       if (li instanceof HTMLElement) {
  //         li.style.setProperty(
  //           "animation-delay",
  //           `calc((var(--rotate-speed) / var(--count)) * ${-index}s)`
  //         );
  //         const card = li.querySelector(".card");
  //         if (card instanceof HTMLElement) {
  //           card.style.setProperty(
  //             "animation-delay",
  //             `calc((var(--rotate-speed) / var(--count)) * ${-index}s)`
  //           );
  //         }
  //       }
  //     });
  //   }
  // }, [words]);

  const pieces = [
    { text: "Warp drive", tip: "Yes, commander!" },
    { text: "Teleport", tip: "Beam me up!" },
    { text: "Fusion core", tip: "Engineering!" },
    { text: "Laser target", tip: "Charge laz0rs!" },
    { text: "Shields", tip: "Status report!" },
    ...Array(31).fill({ text: "", tip: "" }),
  ];

  return (
    // <div className="relative mx-auto aspect-square">
    //   <div className="relative w-full h-full">
    //     <ul
    //       id="card-list"
    //       className="relative flex items-center justify-center w-full h-full outline outline-dotted outline-magenta"
    //     >
    //       {words.map((word, index) => (
    //         <li
    //           key={index}
    //           className="absolute top-1/2 transform -translate-y-1/2 w-auto animate-rotateCW"
    //         >
    //           <div className="card w-3/4 flex flex-col items-start p-4 gap-2 bg-white shadow-md rounded-lg animate-rotateCCW">
    //             <a href="#">
    //               <span className="model-name font-medium text-lg leading-6 text-indigo-600 block">
    //                 {word}
    //               </span>
    //               <span>
    //                 Model for generating highly dimensional, mostly numeric,
    //                 tabular data
    //               </span>
    //             </a>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //     <div className="last-circle absolute w-2/3 aspect-square left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-800 opacity-25 rounded-full shadow-md"></div>
    //     <div className="second-circle absolute w-2/5 aspect-square left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 opacity-50 rounded-full shadow-md"></div>
    //   </div>
    //   <div className="mask absolute w-1/2 top-0 bottom-0 bg-gradient-radial from-indigo-100 to-indigo-600 animate-pulseGlow"></div>
    //   <div className="center-circle absolute w-56 aspect-square left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-700 shadow-md rounded-full"></div>
    // </div>

    <div className="relative">
      {/* Targets */}
      <div className="target top left bg-black absolute"></div>
      <div className="target top right bg-black absolute"></div>
      <div className="target bottom left bg-black absolute"></div>
      <div className="target bottom right bg-black absolute"></div>

      {/* HUD */}
      <div className="hud bg-black">
        {/* Orange Circle */}
        <div className="orange bg-orange-500">
          <div className="notches">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className={`notch notch${index + 1} bg-orange-500`}
              ></div>
            ))}
          </div>
          <div className="circle outer1 bg-orange-500 border-dotted border-2 border-orange-500"></div>
          <div className="circle outer2 bg-orange-500 border-2 border-orange-500"></div>
          <div className="circle outer3 bg-orange-500 border-dotted border-2 border-orange-500"></div>
          <div className="circle inner1 bg-orange-500 border-2 border-orange-500"></div>
          <div className="circle inner2 bg-orange-500 border-2 border-orange-500"></div>
          <div className="topnotches">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className={`notch notch${index + 1} bg-orange-500`}
              ></div>
            ))}
          </div>
          <div className="bottomnotches">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className={`notch notch${index + 1} bg-orange-500`}
              ></div>
            ))}
          </div>
          <div className="circle inner3 bg-orange-500 border-dashed border-2 border-orange-500"></div>
          <div className="center">
            <div className="top left bg-orange-500"></div>
            <div className="top right bg-orange-500"></div>
            <div className="bottom left bg-orange-500"></div>
            <div className="bottom right bg-orange-500"></div>
          </div>
        </div>

        {/* Blue Circle */}
        <div className="blue bg-blue-500">
          <div className="inner1 bg-blue-500 border-2 border-blue-500"></div>
          <div className="inner2 bg-blue-500 border-2 border-blue-500"></div>
          <div className="notches">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className={`notch notch${index + 1} bg-blue-500`}
              ></div>
            ))}
          </div>
        </div>

        {/* Callouts */}
        <div className="callout left bg-black border-b border-orange-500">
          <div className="title">AH-64E</div>
          <div className="body">N606SP</div>
        </div>
        <div className="callout right bg-black border-b border-orange-500">
          <div className="title">1239 m</div>
          <div className="body">275 km/h</div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
