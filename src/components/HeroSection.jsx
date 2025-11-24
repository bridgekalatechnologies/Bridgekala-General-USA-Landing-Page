import CtaBtn from "./CtaBtn";

export default function HeroSection() {
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
      {/* hero-img */}
      <img
        className="bg-[#d8d3d3] w-full h-50 rounded-2xl"
        src="/heroimg.jpg"
        alt=""
      />

      {/* hero para */}
      <p className="text-center font-medium text-[11px] w-screen">
        From social media to performance ads{" "}
        <div className="text-[#9000FF] font-semibold">
          we build brands, generate leads, and scale revenue
        </div>{" "}
        with proven marketing systems.
      </p>
      {/* brands logo */}
      <div className="relative left-[8%] w-full flex justify-center">
        <img
          src="/brands/1.webp"
          className="inline-block bg-blue-600 size-8 rounded-full relative"
          alt=""
        />
        <img
          src="/brands/1.webp"
          className="inline-block bg-amber-600 size-8 rounded-full relative -left-2"
          alt=""
        />
        <img
          src="/brands/1.webp"
          className="inline-block bg-green-600 size-8 rounded-full relative -left-4"
          alt=""
        />
        <img
          src="/brands/1.webp"
          className="inline-block bg-red-600 size-8 rounded-full relative -left-6"
          alt=""
        />
        <img
          src="/brands/1.webp"
          className="inline-block bg-purple-600 size-8 rounded-full relative -left-7"
          alt=""
        />
        <img
          src="/brands/1.webp"
          className="inline-block bg-green-600 size-8 rounded-full relative -left-8"
          alt=""
        />
        <img
          src="/brands/1.webp"
          className="inline-block bg-blue-600 size-8 rounded-full relative -left-10"
          alt=""
        />
      </div>
      <p className="text-center font-medium text-[12px]">
        Trusted by founders of <br /> 20+ breakout D2C brands
      </p>

      <CtaBtn text="Book 4X Strategy Call" link="" />
    </>
  );
}
