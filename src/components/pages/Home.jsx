import Performancesection from "../Performancesection";
import HeroSection from "../HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Services from "../Services";
import HowWeWork from "../HowWeWork";

export default function () {
  return (
    <div className="w-screen flex flex-col items-center gap-5 p-10 Montserratfont">
      <HeroSection />
      <Performancesection />
      <WhyChooseUs />
      <Services />
      <HowWeWork />
    </div>
  );
}
