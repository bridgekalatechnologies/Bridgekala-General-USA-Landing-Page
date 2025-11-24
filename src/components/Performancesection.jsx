import React from "react";

export default function Performancesection() {
  const cards = [
    "4.3x Avg Roas",
    "33 Days avg. time to profitability",
    "33 Days avg. time to profitability",
  ];
  return (
    <div className="bgGradient w-screen p-10 rounded-lg Montserratfont mt-5">
      <div className="w-full bg-white rounded-lg flex flex-col justify-center p-3 gap-3">
        <h1 className="text-[12px] font-medium text-center">
          The Only Numbers That Matter
        </h1>
        {cards.map((card, i) => {
          return (
            <div
              key={i}
              className="bgGradient text-white flex justify-center items-center text-center p-5 rounded-lg h-30 font-semibold w-full"
            >
              <h1 className="text-2xl">{card}</h1>
            </div>
          );
        })}
       <div>
         <p className="text-center text-[10px] font-semibold">REAL PERFORMANCE. NOT PROMISES.</p>
        <p className="text-center text-[8px] font-medium">(Updated 1 Jun, 2025)</p>
       </div>
      </div>
    </div>
  );
}
