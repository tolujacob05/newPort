import WidthLayout from "./width-layout";
import Image from "next/image";

export const Juno = () => {
  return (
    <>
      <WidthLayout>
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <h1 className="text-muted text-2xl">Juno</h1>
            <p className="text-muted text-base">
              Home for Young Professionals where you can work, play and network
              all under one roof. Enjoy intentional designed co-living space
              where you can live your own way
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204459/portfolio/z6uwfum2tg8q45o7uuqy.png"
              layout="fill"
              objectFit="cover"
              alt="Juno Image"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="text-muted">repo</div>
            <a
              className="bg-primary px-4 h-6 rounded-xl"
              href="https://heartfelt-wisp-0bbe65.netlify.app"
            >
              Live Demo
            </a>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted">Functionalities: </p>

            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>Book your cozy appartment on the app</li>
              <li>Choose varieties of appartment of choice</li>
              <li>Send message to the I.T team if problem is encountered</li>
              
            </ul>
          </div>
        </div>
      </WidthLayout>
    </>
  );
};
