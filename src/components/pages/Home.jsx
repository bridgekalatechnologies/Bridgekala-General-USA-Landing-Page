import Performancesection from "../Performancesection";
import HeroSection from "../HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Services from "../Services";
import HowWeWork from "../HowWeWork";
import OurProjects from "../OurProjects";
import AboutUs from "../AboutUs";
import { AppleCardsCarouselDemo } from "../AppleCardsCarouselDemo";

export default function () {
  return (
    <div className="w-screen flex flex-col items-center gap-5 p-10 Montserratfont">
      <HeroSection />
      <Performancesection />
      <WhyChooseUs />
      <Services />
      <HowWeWork />
      <OurProjects />
      <AboutUs />
      <AppleCardsCarouselDemo />
    </div>
  );
}
