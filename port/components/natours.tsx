import Image from "next/image";
import WidthLayout from "./width-layout";

export const Natours = () => {
  return (
    <>
      <WidthLayout>
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <h1 className="text-muted text-2xl">Natours</h1>
            <p className="text-muted">
              This is a demo application designed to cater to the needs of
              travelers seeking information, inspiration, and services for their
              journeys.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204477/portfolio/nddeam2fi4nery2k44zd.png"
              layout="fill"
              objectFit="cover"
              alt="Natours Image"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="text-muted">repo</div>
            <a
              className="bg-primary px-4 h-6 rounded-xl"
              href="https://tourmaline-cactus-4c16b8.netlify.app"
            >
              Live Demo
            </a>
          </div>
        </div>
      </WidthLayout>
    </>
  );
};
