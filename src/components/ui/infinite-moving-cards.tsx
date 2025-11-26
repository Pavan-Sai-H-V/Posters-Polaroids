import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    reviewImages?: string[];
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-200 dark:border-slate-800 px-8 py-6 md:w-[450px] bg-white dark:bg-zinc-900 shadow-sm"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>

              {/* User Info & Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-100 dark:border-slate-700">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <span className="relative z-20 text-sm leading-[1.6] text-slate-700 dark:text-slate-300 font-normal">
                "{item.quote}"
              </span>

              {/* Review Images (Polaroid Style) */}
              {item.reviewImages && (
                <div className="flex gap-4 mt-6 justify-center">
                  {item.reviewImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "relative w-32 aspect-[3/4] bg-white p-2 shadow-md transition-transform duration-300 hover:scale-105 hover:z-10",
                        idx === 0 ? "-rotate-3" : "rotate-3 translate-y-2"
                      )}
                    >
                      <div className="relative w-full h-[85%] overflow-hidden bg-gray-100">
                        <Image
                          src={img}
                          alt="Review photo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="h-[15%]"></div>
                    </div>
                  ))}
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
