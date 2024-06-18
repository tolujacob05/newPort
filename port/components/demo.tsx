import Image from "next/image";

const Demo = () => {
  return (
    <div className="relative pt-10 lg:pt-0 z-20 flex flex-col lg:flex-row lg:justify-evenly items-center justify-center gap-10">
      <div className="lg:relative lg:z-20">
        <h1 className="text-muted-foregroundTwo text-lg lg:text-4xl overflow-hidden border-r-4 border-primary whitespace-nowrap mx-auto tracking-widest animate-typing">
          Frameworks and tools
        </h1>
      </div>

      <div className="animation-example animate-[one_8s_linear_infinite]">
        <div className="item">
          <div className="line"></div>
          <div className="dot"></div>
          <div className="circle flex items-center justify-center">
            <h1 className="text-background px-4 text-center text-base">GIT</h1>
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
              VUE JS
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
              REACT JS
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
              HTML CSS SCSS
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
      </div>
    </div>
  );
};

export default Demo;
