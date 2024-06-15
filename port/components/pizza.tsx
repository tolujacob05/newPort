import Image from "next/image";
import WidthLayout from "./width-layout";

export const Pizza = () => {
  return (
    <>
      <WidthLayout>
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <h1 className="text-muted text-2xl">Pizza</h1>
            <p className="text-muted text-base">
              This is a demo application designed to make delivery easy and
              reliable.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204468/portfolio/c7ze5qzxc359wihxtaun.png"
              layout="fill"
              objectFit="cover"
              alt="Pizza Image"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="text-muted">repo</div>
            <a
              className="bg-primary px-4 h-6 rounded-xl"
              href="https://leafy-cupcake-a4c936.netlify.app"
            >
              Live Demo
            </a>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted">Functionalities: </p>

            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>Order your pizza at your convinience</li>
              <li>Choose varieties of available pizza receipe</li>
              <li>Estimated delivery time is displayed in the app</li>
              <li>Registration is one second</li>
            </ul>
          </div>
        </div>
      </WidthLayout>
    </>
  );
};
