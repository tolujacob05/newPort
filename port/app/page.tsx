import Image from "next/image";
// import { Home } from "./home/page";
import Background from "@/components/background";
import { Slider } from "@/components/slider";

export default function App() {
  return (
    <main className="min-h-screen">
      <Background />
      {/* <Home /> */}
      <Slider />
    </main>
  );
}
