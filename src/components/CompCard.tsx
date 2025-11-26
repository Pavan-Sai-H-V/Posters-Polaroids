import React from "react";
import { Compare } from "@/components/ui/compare";
import TrueFocus from "./TrueFocus";
export function CompCard() {
  return (
    <div className="p-2 md:p-4 lg:mt-10 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
      <div className="text-center mb-2 md:mb-4">
        <TrueFocus
          sentence="WhatsApp Doorstep"
          manualMode={false}
          blurAmount={5}
          borderColor="green"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <Compare
        firstImage="/image.png"
        secondImage="/delivery.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[250px] md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
