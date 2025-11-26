import React from "react";

export default function AboutUs({ onScrollToForm }) {
  return (
    <div className="bgGradient w-screen rounded-lg text-white text-center p-5 flex flex-col items-center gap-3">
      <div>
        <h1 className="font-bold text-2xl leading-6">About Us</h1>
        <h2 className="text-[10px] font-medium">Storytelling Version</h2>
      </div>
      <img className="bg-gray-300 w-65 h-40 rounded-lg" src="" alt="" />
      <div className="px-10 text-[9px] text-left flex flex-col gap-2">
        <div>
          Every great business begins with a spark — an idea, a purpose, a
          dream. But somewhere along the journey, most founders hit the same
          wall:{" "}
          <span className="font-semibold">
            marketing stops working, ads stop converting, and growth becomes
            unpredictable.
          </span>
        </div>
        <div>
          BridgeKala was built to fix that. We started with one belief:{" "}
          <span className="font-semibold">
            Businesses don’t fail because of bad products. They fail because of
            broken marketing systems.
          </span>
        </div>
      </div>
      <button onClick={onScrollToForm} className="bg-white text-[#9000FF] w-55 font-bold rounded-3xl mt-3 animate-float">
        Book Free Strategy Call
      </button>
    </div>
  );
}
