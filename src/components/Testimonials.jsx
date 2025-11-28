import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      msg: "“We tripled our walk-ins in 45 days. BridgeKala became our marketing backbone.”",
      person: "– Founder, House of Rings",
    },
    {
      msg: "“Our entire brand identity & social media got transformed. Sales increased visibly.”",
      person: "– Founder, Designer Den",
    },
    {
      msg: "“BridgeKala handles everything — scripts, shoots, ads, website. No stress.”",
      person: "– Owner, Furniture Park",
    },
  ];

  return (
    <div className="bgGradient w-screen rounded-lg p-10">
      <div className="text-white text-center">
        <h1 className="font-bold text-[27px] leading-5">TESTIMONIALS</h1>
        <h2 className="text-[14px]">What Our Clients Say</h2>
      </div>

      <div className="w-full flex justify-center pt-5 gap-8 items-center">
        {/* LEFT BTN */}
        <button
          className="text-[#9000FF] bg-white size-fit rounded-full z-50"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft />
        </button>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-60 h-38"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
          }}
        >
          {testimonials.map((testimonial, i) => {
            return (
              <SwiperSlide key={i} className="bg-white rounded-xl p-5">
                <div className="font-medium text-[15px]">{testimonial.msg}</div>
                <h1 className="text-[10px]">{testimonial.person}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* RIGHT BTN */}
        <button
          className="text-[#9000FF] bg-white size-fit rounded-full z-50"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
