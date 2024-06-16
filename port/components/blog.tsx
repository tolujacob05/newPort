import Image from "next/image";
import WidthLayout from "./width-layout";

export const Blog = () => {
  return (
    <>
      <WidthLayout>
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <h1 className="text-muted text-2xl">Blog 🚀</h1>
            <p className="text-muted text-base">
              Blog 🚀 is your ultimate destination for comprehensive insights on
              a wide range of topics. Whether you&apos;re a tech enthusiast, a
              foodie, a traveler, or someone interested in lifestyle tips, this
              blog has something for everyone. Stay updated with the latest
              trends, discover new hobbies, and enhance your daily life with
              practical advice and expert recommendations.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src="https://res.cloudinary.com/dno5bo4bx/image/upload/v1718204452/portfolio/zorhotxd4nvzbm6g7gmz.png"
              layout="fill"
              objectFit="cover"
              alt="Pizza Image"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="text-muted">repo</div>
            <a
              className="bg-primary px-4 h-6 rounded-xl"
              href="https://weehlr-eilp-pw21w07ju-tolu-jacobs-projects.vercel.app"
            >
              Live Demo
            </a>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-muted">Functionalities: </p>

            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>Get your latest news for free</li>
            </ul>
          </div>
        </div>
      </WidthLayout>
    </>
  );
};
