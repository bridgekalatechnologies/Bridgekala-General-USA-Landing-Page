import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useState } from "react";

export default function OurProjects() {
  // ARRAY OF OBJECTS
  const projects = [
    {
      title: "Power Chew",
      subtitle: "UK + Europe Expansion",
      description:
        "Complete digital marketing system: branding, ads, content & influencer-led funnel.",
      img: "/projects/powerchew.png",
      video: "/projects/powerchew.mp4",
    },
    {
      title: "Grandma Secret Recipe",
      subtitle: "4X ROI Capital",
      description:
        "Created a full brand revamp + performance funnel generating consistent showroom traffic.",
      img: "/projects/grandma.png",
      video: "/projects/grandma.mp4",
    },
    {
      title: "House of Rings",
      subtitle: "Franchise Growth",
      description:
        " Developed ads + content + strategy, helping them expand into multiple locations.",
      img: "/projects/hor.png",
      video: "/projects/hor.mp4",
    },
    {
      title: "Dynatone",
      subtitle: "Product Marketing System",
      description:
        "End-to-end content, web, and ads to scale their brand presence.",
      img: "/projects/dynatone.png",
      video: "/projects/dynatone.mp4",
    },
    {
      title: "New Age Diamonds",
      subtitle: "Luxury Positioning",
      description:
        "Storytelling + campaigns + footfall strategy across all stores.",
      img: "/projects/newage.png",
      video: "/projects/newage.mp4",
    },
  ];

  // Single index that switches whole project
  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[projectIndex];

  return (
    <div className="w-screen p-12 flex flex-col items-center gap-2">
      <div>
        <h1 className="font-bold text-2xl text-black">OUR PROJECTS</h1>
        <h2 className="text-center text-[12px] text-[#9000FF]">
          Brands We’ve Scaled
        </h2>
      </div>

      <section className="w-full flex flex-col gap-3">
        {/* Top section */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#9000FF] font-bold">{current.title}</h1>
            <h2 className="text-[10px] font-medium">{current.subtitle}</h2>
          </div>

          <div className="flex gap-1">
            <button onClick={prevProject}>
              <CircleArrowLeft className="cursor-pointer" />
            </button>
            <button onClick={nextProject}>
              <CircleArrowRight className="cursor-pointer" />
            </button>
          </div>
        </div>

        {/* IMAGES and VIDEOS */}
        <div className="flex w-full justify-between">
          <img
            src={current.img}
            className="bg-[#d8d8d8] w-33 h-55 rounded-xl"
            alt=""
          />
          <video
            src={current.video}
            className="bg-[#d8d8d8] w-33 h-55 rounded-xl"
            alt=""
            autoPlay
            muted
            playsInline
            webkit-playsinline
          ></video>
        </div>

        {/* DESCRIPTION */}
        <div className="text-[10px] font-medium text-center">
          {current.description}
        </div>
      </section>
    </div>
  );
}
