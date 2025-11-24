import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

export default function OurProjects() {
  return (
    <div className="w-screen p-12 flex flex-col items-center gap-2">
      <div>
        <h1 className="font-bold text-2xl text-black">OUR PROJECTS</h1>
        <h2 className="text-center text-[12px] text-[#9000FF]">
          Brands We’ve Scaled
        </h2>
      </div>
      <section className="w-full flex flex-col gap-3">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#9000FF] font-bold">Furniture Park</h1>
            <h2 className="text-[10px] font-medium">3X Walk-ins</h2>
          </div>
          <div className="flex">
            <CircleArrowLeft /> <CircleArrowRight />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <img src="" className="bg-[#d8d8d8] w-33 h-55 rounded-xl" alt="" />
          <img src="" className="bg-[#d8d8d8] w-33 h-55 rounded-xl" alt="" />
        </div>
        <div className="text-[10px] font-medium text-center">
          Created a full brand revamp + performance funnel generating consistent
          showroom traffic.
        </div>
      </section>
    </div>
  );
}
