import Performancesection from "../Performancesection";
import HeroSection from "../HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Services from "../Services";
import HowWeWork from "../HowWeWork";
import OurProjects from "../OurProjects";
import AboutUs from "../AboutUs";
import { AppleCardsCarouselDemo } from "../AppleCardsCarouselDemo";
import { Check } from "lucide-react";

export default function () {
  return (
    <div className="w-screen flex flex-col items-center gap-5 p-10 Montserratfont">
      <HeroSection />
      <Performancesection />
      <WhyChooseUs />
      <HowWeWork />
      <Services />
      <OurProjects />
      <AboutUs />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold w-45 leading-5">
          Stop Losing Customers to Better Marketing
        </h1>
        <h2 className="text-[12px] font-medium text-[#9000FF]">
          Your product might be good but if your marketing is weak, your
          competitors will win.
        </h2>
        <div className="bg-[#9000FF] text-white w-35 text-center rounded-xl mt-4">
          We help you:
        </div>
        <ul className="text-sm flex flex-col gap-2">
          <li className="flex gap-2">
            <Check className="size-5" /> Increase leads & enquiries{" "}
          </li>
          <li className="flex gap-2">
            <Check className="size-5" /> Reduce cost per lead{" "}
          </li>
          <li className="flex gap-2">
            <Check className="size-5" /> Improve conversion rates{" "}
          </li>
          <li className="flex gap-2">
            <Check className="size-5" /> Boost sales with strong funnels
          </li>
          <li className="flex gap-2">
            <Check className="size-5" /> Build long-term brand authority{" "}
          </li>
        </ul>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <div className="text-center">
          <h1 className="font-bold text-lg leading-4">Ready to Scale</h1>
          <h1 className="font-bold text-2xl text-[#9000FF]">Your Business?</h1>
        </div>
        <p className="text-center text-sm w-65">
          Let’s build a marketing system that grows your brand consistently.
        </p>
        <button className="bg-[#9000FF] rounded-xl py-1 text-white">Book Free Strategy Call</button>
      </div>
    </div>
  );
}
