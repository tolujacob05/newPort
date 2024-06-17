import Image from "next/image";

const Demo = () => {
  return (
    <div className="relative pt-10 lg:pt-0 z-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28">
      <div className="lg:relative lg:z-20">
        <h1 className="text-muted-foregroundTwo text-lg lg:text-4xl overflow-hidden border-r-4 border-primary whitespace-nowrap mx-auto tracking-widest animate-typing">
          Framework and tools
        </h1>
      </div>

      <div className="animation-example animate-[one_8s_linear_infinite]">
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">SCSS</h1>
          </div>
        </div>
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              NEXT JS
            </h1>
          </div>
        </div>
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              REACT JS
            </h1>
          </div>
        </div>
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              NODE JS
            </h1>
          </div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              VUE JS
            </h1>
          </div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              TALIWIND CSS
            </h1>
          </div>
        </div>
        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              HTML & CSS
            </h1>
          </div>
        </div>

        <div className="item -type2">
          <div className="line"></div>
          <div className="dot"></div>

          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">
              TYPE
              <br />
              SCRIPT
            </h1>
          </div>
        </div>

        {/* <div className="center">
          <div
            className="rounded-full w-full"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718643568/portfolio/rwirst6dh3nv5t6wyelk.jpg"
              layout="fill"
              objectFit="cover"
              alt="Juno Image"
              className="rounded-full"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Demo;
