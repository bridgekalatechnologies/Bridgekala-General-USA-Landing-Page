import Performancesection from "../Performancesection";
import HeroSection from "../HeroSection";

export default function () {
  return (
    <div className="w-screen flex flex-col items-center gap-5 p-10 Montserratfont">
      <HeroSection/>
      <Performancesection />
    </div>
  );
}
