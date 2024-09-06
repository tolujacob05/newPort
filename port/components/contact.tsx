"use client";
import { useState, type SVGProps } from "react";
import WidthLayout from "./width-layout";
import Link from "next/link";

const Contact = (props: SVGProps<SVGSVGElement>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="mt-20 lg:mt-0 relative z-20 lg:flex-col lg:self-end space-y-6 lg:space-y-4">
        <div className="">
          <h1 className="text-muted text-4xl lg:text-end">SOCIAL SPACE</h1>
          <p className="text-muted-foregroundTwo lg:text-end">
            C&apos;mon Lets network!
          </p>
        </div>

        <div className="parent w-full lg:w-[650px]">
          <div
            className={`card-contact cursor-pointer transition-all duration-500 ease-in-out ${
              isExpanded ? "h-full" : "h-92"
            }`}
          >
            <div className="logo">
              <span className="circle circle1"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
              <span className="circle circle4"></span>
              <span className="circle circle5">TJ</span>
            </div>
            <div className="glass"></div>
            <div className="content-card">
              <span className="title">Follow me 😉</span>
            </div>
            <div className="bottom pl-7 pt-6 ">
              <div
                className={`social-buttons-container flex flex-col gap-6 ${
                  isExpanded ? "expanded" : ""
                }`}
              >
                <Link href={"https://www.instagram.com/tolu_jacob"}>
                  <div className="flex gap-2 items-center">
                    <div className="social-button social-button1">
                      <svg
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                      </svg>
                    </div>
                    <p>Instagram</p>
                  </div>
                </Link>

                <Link href={"https://twitter.com/tolu_jacob05"}>
                  <div className="flex gap-2 items-center">
                    <div className="social-button social-button5">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </div>

                    <p>Twitter</p>
                  </div>
                </Link>

                <div className="flex gap-2 items-center">
                  <div className="social-button social-button3">
                    <svg
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,175.476,524.531,69.836ZM228.366,337.66c-29.5,0-53.573-26.979-53.573-60.258S198.679,217.2,228.366,217.2c30.185,0,53.86,26.264,53.573,60.452C281.939,310.681,257.866,337.66,228.366,337.66Zm183.3,0c-29.5,0-53.573-26.979-53.573-60.258S381.978,217.2,411.665,217.2c30.185,0,53.86,26.264,53.573,60.452C465.238,310.681,441.165,337.66,411.665,337.66Z"></path>
                    </svg>
                  </div>
                  <p>Discord</p>
                </div>

                <Link href={"https://www.github.com/tolujacob05"}>
                  <div className="flex gap-2 items-center">
                    <div className="social-button social-button4">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88.62.11.84-.27.84-.6 0-.3-.01-1.09-.02-2.13-3.43.74-4.15-1.65-4.15-1.65-.56-1.42-1.37-1.8-1.37-1.8-1.12-.77.08-.76.08-.76 1.24.09 1.9 1.27 1.9 1.27 1.1 1.89 2.88 1.34 3.58 1.03.11-.8.43-1.34.77-1.65-2.74-.31-5.62-1.37-5.62-6.1 0-1.35.47-2.46 1.23-3.33-.12-.31-.54-1.55.12-3.23 0 0 1.02-.33 3.34 1.26.98-.27 2.03-.4 3.08-.4s2.1.14 3.08.4c2.31-1.59 3.33-1.26 3.33-1.26.66 1.68.24 2.92.12 3.23.76.87 1.23 1.98 1.23 3.33 0 4.73-2.88 5.79-5.63 6.1.44.38.82 1.11.82 2.23 0 1.61-.01 2.91-.01 3.31 0 .33.22.72.85.6 4.77-.77 8.43-4.9 8.43-9.88 0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </div>
                    <p>Github</p>
                  </div>
                </Link>

                {isExpanded && (
                  <>
                    {/* Add more social button elements here as needed */}
                    <Link href={""}>
                      <div className="flex gap-2 items-center">
                        <div className="social-button social-button2">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg"
                          >
                            <path d="M23.994 12.183c0-6.285-5.113-11.398-11.398-11.398s-11.398 5.113-11.398 11.398c0 5.655 4.144 10.329 9.525 11.239v-7.95h-2.864v-3.289h2.864v-2.501c0-2.831 1.68-4.399 4.255-4.399 1.232 0 2.521.22 2.521.22v2.804h-1.42c-1.397 0-1.828.869-1.828 1.76v2.116h3.055l-.488 3.289h-2.567v7.95c5.381-.91 9.525-5.584 9.525-11.239z" />
                          </svg>
                        </div>
                        <p>Facebook</p>
                      </div>
                    </Link>

                    <Link
                      href={"https://www.linkedin.com/in/akinjare-toluwase"}
                    >
                      <div className="flex gap-2 items-center">
                        <div className="social-button social-button6">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg"
                          >
                            <path d="M21.5 6.25c-.77.34-1.6.57-2.46.68a4.49 4.49 0 0 0 1.97-2.48 8.95 8.95 0 0 1-2.84 1.08 4.48 4.48 0 0 0-7.64 3.06c0 .35.04.7.1 1.04a12.7 12.7 0 0 1-9.24-4.69 4.44 4.44 0 0 0-.6 2.25c0 1.56.79 2.93 2.01 3.73a4.5 4.5 0 0 1-2.03-.56v.05c0 2.18 1.55 4 3.6 4.42a4.51 4.51 0 0 1-2.02.08 4.49 4.49 0 0 0 4.19 3.12 9 9 0 0 1-5.57 1.92A9.15 9.15 0 0 1 2 18.66a12.72 12.72 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.4-.02-.6a9.15 9.15 0 0 0 2.25-2.33c-.83.37-1.72.62-2.65.74z" />
                          </svg>
                        </div>
                        <p>LinkedIn</p>
                      </div>
                    </Link>
                  </>
                )}

                <div className="flex justify-end w-full">
                  <div
                    className="px-10 py-3 text-primary cursor-pointer"
                    onClick={toggleExpand}
                  >
                    {isExpanded ? "Close" : "View More"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
