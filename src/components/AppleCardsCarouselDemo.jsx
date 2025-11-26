"use client";

import React, { useRef, useState } from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  // REF OF THE REAL CAROUSEL
  const carouselRef = useRef(null);

  // BUTTON ENABLE/DISABLE STATE
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full py-5 text-[#9000FF]">
      <div>
        <h1 className="font-bold text-2xl">Our Team</h1>
       <div className="w-60">
         <span className="max-w-7xl mx-auto text-[10px] md:text-5xl">
          Access to high-Quality, Eco-Friendly products and services →
        </span>{" "}
        <button className="text-[7px] bg-[#9000FF] text-white px-3 py-1 rounded-lg">Contact Us</button>
       </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          className="h-10 w-10 flex items-center justify-center rounded-full bg-[#9000FF] disabled:opacity-40"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-white" />
        </button>

        <button
          className="h-10 w-10 flex items-center justify-center rounded-full bg-[#9000FF] disabled:opacity-40"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* ATTACH REF + ONSCROLL */}
      <Carousel ref={carouselRef} onScroll={checkScrollability} items={cards} />
    </div>
  );
}

const DummyContent = () => (
  <>
    {[...new Array(3)].map((_, index) => (
      <div key={index} className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, jot down a grocery list, and take class notes.
        </p>

        <img
          src="https://assets.aceternity.com/macbook.png"
          height="500"
          width="500"
          className="md:w-1/2 mx-auto object-contain"
        />
      </div>
    ))}
  </>
);

const data = [
  {
    category: "Name",
    title: "Employee Designation",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    content: <DummyContent />,
  },
  {
    category: "Name",
    title: "Employee Designation",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2",
    content: <DummyContent />,
  },
  {
     category: "Name",
    title: "Employee Designation",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc",
    content: <DummyContent />,
  },
  {
    category: "Name",
    title: "Employee Designation",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    content: <DummyContent />,
  },
  {
    category: "Name",
    title: "Employee Designation",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2",
    content: <DummyContent />,
  },
  {
     category: "Name",
    title: "Employee Designation",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc",
    content: <DummyContent />,
  },
];
