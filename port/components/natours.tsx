import Image from "next/image";
import WidthLayout from "./width-layout";

export const Natours = () => {
  return (
    <>
      <WidthLayout>
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <h1 className="text-muted text-2xl">Wealth Black App</h1>
            <p className="text-muted">
              This is an ongoing application for a client I wish to showcase.
              This application enables users to comfortably invest, track their investments, and monitor real-time profits.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1722439710/portfolio/Screenshot_2024-06-21_082234_hofsft.png"
              layout="fill"
              objectFit="cover"
              alt="Wealth Image"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="text-muted">repo</div>
            <a
              className="bg-primary px-4 h-6 rounded-xl"
              href="https://eugene-sankore.netlify.app"
            >
              Live Demo
            </a>
          </div>
        </div>
      </WidthLayout>
    </>
  );
};
