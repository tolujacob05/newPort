const Demo = () => {
  const stars = Array.from({ length: 300 }, (_, i) => (
    <div key={i} className="star"></div>
  ));

  return (
    <>
      <div className="mt-20 lg:mt-0 relative z-20 flex flex-col xl:flex-row items-center xl:justify-between gap-20 xl:gap-0">
        <div className="xl:relative xl:z-20">
          <h1 className="text-muted text-4xl overflow-hidden border-r-4 border-primary whitespace-nowrap mx-auto tracking-widest animate-typing">
            FRAMEWORKS
          </h1>
        </div>

        {/* <div className="animation-example animate-[two_8s_linear_infinite]">
          <div className="item">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                GIT
              </h1>
            </div>
          </div>

          <div className="item">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                NEXT JS
              </h1>
            </div>
          </div>

          <div className="item">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                VUE JS
              </h1>
            </div>
          </div>

          <div className="item">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                NODE JS
              </h1>
            </div>
          </div>

          <div className="item -type2">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                REACT JS
              </h1>
            </div>
          </div>

          <div className="item -type2">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                TALIWIND CSS
              </h1>
            </div>
          </div>

          <div className="item -type2">
            <div className="line"></div>
            <div className="dot"></div>
            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                HTML CSS SCSS
              </h1>
            </div>
          </div>

          <div className="item -type2">
            <div className="line"></div>
            <div className="dot"></div>

            <div className="circle flex items-center justify-center">
              <h1 className="text-background px-4 text-center text-xs lg:text-base">
                TYPE
                <br />
                SCRIPT
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Demo;
