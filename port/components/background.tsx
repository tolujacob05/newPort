import { Home } from "@/app/home/page";
import { Slider } from "./slider";
import WidthLayout from "./width-layout";

export default function Background() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <WidthLayout>
          <div className="flex flex-col items-center justify-center space-y-20 lg:space-y-40 z-20">
            <Home />
            <Slider />
          </div>
        </WidthLayout>

        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-20 right-20 animate-[one_8s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-60 left-60 animate-[one_10s_linear_infinite] bg-[rgba(217, 22, 22, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-40 right-40 animate-[one_3s_linear_infinite] bg-[rgba(214, 14, 14, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-66 left-30 animate-[one_7s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-90 right-10 animate-[one_9s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-30 left-60 animate-[one_5s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-70 right-20 animate-[one_8s_linear_infinite] bg-[rgba(194, 6, 6, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-75 left-60 animate-[one_10s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-50 right-50 animate-[one_6s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-45 left-20 animate-[one_10s_linear_infinite] bg-[rgba(227, 4, 4, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-10 right-90 animate-[one_9s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-20 left-70 animate-[one_7s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-20 right-20 animate-[one_8s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-60 left-5 animate-[one_6s_linear_infinite] bg-[rgba(185, 8, 8, 0.5)]"></div>
        <div className="absolute h-20 w-20 border-2 border-white/70 rounded-full top-90 right-80 animate-[one_9s_linear_infinite] bg-[rgba(255, 255, 255, 0.5)]"></div>
      </div>
    </>
  );
}
