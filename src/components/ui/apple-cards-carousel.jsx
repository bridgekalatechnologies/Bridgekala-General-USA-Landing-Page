"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  forwardRef,
} from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

// ⭐ FORWARD REF ADDED HERE ⭐
export const Carousel = forwardRef(function Carousel(
  { items, initialScroll = 0, onScroll },
  externalRef
) {
  const carouselRef = externalRef || useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    onScroll && onScroll();
  };

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft = initialScroll;
    checkScrollability();
  }, [initialScroll]);

  const handleCardClose = (index) => {
    if (!carouselRef.current) return;

    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 230 : 384;
    const gap = isMobile ? 4 : 8;

    const scrollPosition = (cardWidth + gap) * (index + 1);

    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="absolute right-0 h-auto w-[5%] bg-linear-to-l"></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                }}
                key={index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
});

export const Card = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={containerRef}
              className="relative mx-auto my-10 max-w-5xl bg-white rounded-3xl p-6 md:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="sticky top-4 right-0 ml-auto bg-black h-8 w-8 rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="text-neutral-100" />
              </button>

              <p className="text-base font-medium">{card.category}</p>

              <p className="mt-4 text-3xl md:text-5xl font-semibold text-neutral-700">
                {card.title}
              </p>

              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={handleOpen}
        className="relative flex flex-col h-65 w-46 md:h-160 md:w-96 rounded-3xl overflow-hidden bg-[#9000FF]"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 px-3 pt-5 text-left h-[32%]">
          <p className="text-white text-xl font-semibold">{card.category}</p>
          <p className="text-white text-[10px] md:text-3xl mt-">{card.title}</p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          className=" h-[68%] inset-0 object-cover  rounded-2xl"
        />
      </button>
    </>
  );
};

export const BlurImage = ({ src, className }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      onLoad={() => setLoading(false)}
      src={src}
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
    />
  );
};
