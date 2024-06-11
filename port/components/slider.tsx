"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

const sliderData = [
  {
    id: 1,
    text: "Music Generation",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704283577/BirbleAI/landing-page/xsnpfvk0oq7rgnp7ne2k.jpg",
  },
  {
    id: 3,
    text: "Media Created",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704283544/BirbleAI/landing-page/hfqkaw3bxhyj73f7ylqb.jpg",
  },
  {
    id: 4,
    text: "Conversation",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704283543/BirbleAI/landing-page/nqgfpakts7ajevrb0qgb.jpg",
  },
  {
    id: 5,
    text: "Image Generation",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704282866/BirbleAI/landing-page/piblnbmda6f8tj0z2uq2.jpg",
  },
  {
    id: 6,
    text: "Image Generation",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704392154/BirbleAI/landing-page/nstvsqbc5rsnyjnq9ncs.png",
  },
  {
    id: 7,
    text: "Image Generation",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704392152/BirbleAI/landing-page/xtsnn5rldqbbro7ol29s.png",
  },
  {
    id: 8,
    text: "Image Generation",
    pic: "https://res.cloudinary.com/dshjmgwpl/image/upload/v1704392139/BirbleAI/landing-page/o7fhbtkv2auapn4roijg.png",
  },
];

export const Slider = () => {
  return (
    // <div className="flex relative flex-col justify-center items-center py-8 min-h-[50vh] md:min-h-screen text-center">

    <div className="relative w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.35}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
      >
        {sliderData.map((ele, ind) => {
          return (
            <SwiperSlide
              key={"second-section-" + ind}
              className="flex relative justify-center items-center rounded-2xl aspect-video"
            >
              <Image
                src={ele.pic}
                alt="image-slider-slide"
                fill
                className="object-contain mx-auto rounded-2xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    // </div>
  );
};
