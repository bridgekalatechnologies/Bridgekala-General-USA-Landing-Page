import { Lightbulb, Puzzle, Scale3D, Search } from "lucide-react";

export default function HowWeWork() {
  return (
    <div className="text-center flex flex-col gap-5">
      <div>
        <h1 className="text-[#9000FF] font-bold text-[27px]">HOW WE WORK</h1>
        <h2 className="text-[12px] font-medium">
          Our Simple 4-Step Growth System
        </h2>
      </div>
      {/* cards */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-6">
          {/* first */}
          <div className="text-start text-white w-fit relative">
            <div className="bg-[#9000FF] p-3 rounded-xl w-35 h-22">
              <h1 className="text-[8px] font-medium">Step 1</h1>
              <h2 className="text-[8px] font-bold">Strategy & Planning</h2>
              <p className="text-[8px]">
                We analyze your brand, and business goals to create a clear
                growth roadmap.
              </p>
            </div>
            <div className="border-2 border-white absolute w-fit rounded-full -bottom-2 -right-3">
              <Search className="bg-[#9000FF] text-white rounded-full p-1" />
            </div>
          </div>
          {/* second */}
          <div className="text-start text-white w-fit relative">
            <div className="bg-[#9000FF] p-3 rounded-xl w-35 h-22">
              <h1 className="text-[8px] font-medium">Step 2</h1>
              <h2 className="text-[8px] font-bold">Content Production</h2>
              <p className="text-[8px]">
                We produce high-quality content and creatives that build
                authority.
              </p>
            </div>
            <div className="border-2 border-white absolute w-fit rounded-full -bottom-2 -left-3">
              <Puzzle className="bg-[#9000FF] text-white rounded-full p-1" />
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          {/* third */}
          <div className="text-start text-white w-fit relative">
            <div className="bg-[#9000FF] p-3 rounded-xl w-35 h-22">
              <h1 className="text-[8px] font-medium">Step 3</h1>
              <h2 className="text-[8px] font-bold">Performance Marketing</h2>
              <p className="text-[8px]">
                data-driven advertising across Meta and Google to convert
                attention into leads.
              </p>
            </div>
            <div className="border-2 border-white absolute w-fit rounded-full -top-2 -right-3">
              <Lightbulb className="bg-[#9000FF] text-white rounded-full p-1" />
            </div>
          </div>
          {/* fourth */}
          <div className="text-start text-white w-fit relative">
            <div className="bg-[#9000FF] p-3 rounded-xl w-35 h-22">
              <h1 className="text-[8px] font-medium">Step 4</h1>
              <h2 className="text-[8px] font-bold">Sales & Automation</h2>
              <p className="text-[8px]">
                We build funnels and CRM flows that
                convert leads into consistent revenue.
              </p>
            </div>
            <div className="border-2 border-white absolute w-fit rounded-full -top-2 -left-3">
              <Scale3D className="bg-[#9000FF] text-white rounded-full p-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
