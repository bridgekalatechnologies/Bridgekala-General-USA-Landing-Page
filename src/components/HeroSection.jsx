import { motion } from "framer-motion";
import CtaBtn from "./CtaBtn";

export default function HeroSection({ onScrollToForm }) {
  const logos = [
    "/brands/1.webp",
    "/brands/2.webp",
    "/brands/3.webp",
    "/brands/4.webp",
    "/brands/6.webp",
    "/brands/5.webp",
    "/brands/7.webp",
  ];

  return (
    <>
      {/* slots */}
      <div className="bg-black text-white flex gap-2 justify-center items-center w-50 rounded-4xl p-2 h-fit mb-5">
        <span className="inline-block size-3 bg-[#4bf14b] rounded-full animate-pulse transition-all ease-in-out"></span>
        <span className="font-medium">2 Slots live</span>
      </div>

      {/* hero line */}
      <h1 className="text-center ChampionGothicfont text-2xl w-screen">
        Grow Your Business With{" "}
        <span className="text-[#9000FF]">High-Impact Marketing</span> that
        Delivers Real Sales
      </h1>

      {/* hero image */}
      <img
        className="bg-[#d8d3d3] w-full h-50 rounded-2xl"
        src="/heroimg.jpg"
        alt="Hero"
      />

      {/* hero paragraph */}
      <p className="text-center font-medium text-[11px] w-screen">
        From social media to performance ads{" "}
        <span className="text-[#9000FF] font-semibold block">
          we build brands, generate leads, and scale revenue
        </span>{" "}
        with proven marketing systems.
      </p>

      {/* brand logos */}
      <div className="relative w-full flex justify-center">
        {logos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="inline-block size-8 rounded-full"
            style={{ marginLeft: i === 0 ? 0 : -12 }} // perfect overlap
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.18,
              ease: "easeOut",
            }}
            alt="Brand"
          />
        ))}
      </div>

      <p className="text-center font-medium text-[12px]">
        Trusted by founders of <br /> 20+ breakout D2C brands
      </p>

      {/* CTA button */}
      <CtaBtn text="Book 4X Strategy Call" link="" onClick={onScrollToForm} />
    </>
  );
}
