"use client";
import Typical from "react-typical";
import { Comment } from "./comment";


const Demo = () => {
  const stars = Array.from({ length: 300 }, (_, i) => (
    <div key={i} className="star"></div>
  ));

  return (
    <>
      <div className="mt-20 lg:mt-0 relative z-20">
        <h1 className="text-muted text-4xl">TOOLS</h1>
        <p className="text-muted-foregroundTwo"> IDEs and Frameworks</p>

        <div className="flex flex-col pt-10">
          <div className="xl:relative xl:z-20">
            <p className="text-base text-muted-foregroundTwo typewriter">
              {/*<Typical*/}
              {/*    loop={Infinity}*/}
              {/*    wrapper="b"*/}
              {/*    steps={[*/}
              {/*      'Visual Studio Code',*/}
              {/*      1000,*/}
              {/*      'Intellij IDEA',*/}
              {/*      1000,*/}
              {/*      'Figma',*/}
              {/*      1000,*/}
              {/*      'React',*/}
              {/*      1000,*/}
              {/*      'Nextjs',*/}
              {/*        1000,*/}
              {/*        'Vue',*/}
              {/*        1000,*/}
              {/*        'Sass/Scss',*/}
              {/*        1000,*/}
              {/*        'Nodejs',*/}
              {/*        1000,*/}
              {/*        'Html & css',*/}
              {/*        1000,*/}
              {/*        'Tailwind css'*/}
              {/*    ]}*/}
              {/*/>*/}
            </p>
          </div>

          <div className="pt-20">
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
