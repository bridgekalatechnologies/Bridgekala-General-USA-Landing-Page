import { CircleCheck } from "lucide-react";

export default function Services() {
  const servicesData = [
    "Meta Ads",
    "Google Ads",
    "Influencer Marketing",
    "Social Media Management",
    "Website Management",
    "Shoots & Creatives",
    "Landing Pages",
    "Strategy",
    "Performance",
    "Revenue",
  ];
  return (
    <div className="text-center bgGradient text-white w-screen rounded-lg p-5 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">
        We Don't Sell Services. <br /> We Sell Results.
      </h1>
      <h2 className="text-[12px]">But if you really want a list…</h2>
      <div className="w-full flex flex-col items-center gap-3">
        {servicesData.map((service, i) => {
          return (
            <div className="flex justify-center bg-white text-black w-70 rounded-4xl p-1">
              <div
                key={i}
                className="flex items-center gap-2 text-[12px] w-60 pl-8"
              >
                <CircleCheck className="text-white bg-[#19cc19] rounded-full size-4" />{" "}
                {service}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-[11px]">
          We're technically a full-service agency. But the truth is:
        </h1>
        <h2 className="text-[11px] font-semibold">
          NONE OF THIS MATTERS IF IT DOESN'T DRIVE GROWTH.
        </h2>
      </div>
    </div>
  );
}
