import React from "react";

export default function WhyChooseUs() {
  const cards = [
    { img: "/chooseUs/advertising.svg", text: "Performance First Marketing" },
    { img: "/chooseUs/puzzle.svg", text: "High-Conversion Creative Strategy" },
    { img: "/chooseUs/cameraman.svg", text: "End-to-End Branding + Content Production" },
    { img: "/chooseUs/rising.svg", text: "Data-Led Growth Systems" },
  ];
  return (
    <div className="text-center">
      <h1 className="font-bold text-[27px]">Why Choose Us</h1>
      <h2 className="text-[#9000FF] text-[12px] font-medium">
        Trusted by Brands Across India & Abroad
      </h2>
      <h3 className="text-[10px]">
        We build growth systems that deliver predictable ROI month after month.
      </h3>
      <div className="grid grid-cols-2 gap-2 justify-self-center">
        {cards.map((card, i) => {
          return (
            <div
              key={i}
              className="w-32 h-35 flex flex-col justify-center items-center gap-3"
            >
              <img
                className="border border-[#9000FF] size-10 rounded-lg p-1"
                src={card.img}
                alt=""
              />
              <h1 className="text-[10px] font-medium">{card.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
