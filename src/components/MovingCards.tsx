"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const MovingCards = () => {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-transaparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  )
}

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImages: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=3000&auto=format&fit=crop"
    ],
    quote:
      "The quality of the polaroids is absolutely stunning. I love how they look on my bedroom wall. It's like a monthly surprise gift to myself!",
    name: "Alex Morgan",
    title: "Polaroid Subscriber",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImages: [
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=3000&auto=format&fit=crop"
    ],
    quote:
      "Uploading photos via WhatsApp is a game changer. No clunky apps, just send and forget. The prints arrive neatly packed every month.",
    name: "Sarah Chen",
    title: "Combo Plan User",
  },
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImages: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=3000&auto=format&fit=crop"
    ],
    quote: "I gifted a subscription to my girlfriend and she's obsessed. The A3 posters are high quality and the paper feels premium.",
    name: "David Park",
    title: "Gift Subscriber",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImages: [
      "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=3000&auto=format&fit=crop"
    ],
    quote:
      "Finally a way to get my photos off my phone and into the real world. The process is so seamless and the customer support is great.",
    name: "Emily Watson",
    title: "Monthly Subscriber",
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewImages: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=3000&auto=format&fit=crop"
    ],
    quote:
      "The best part is the surprise of opening the package. The curation and print quality are consistently excellent. Highly recommended!",
    name: "James Wilson",
    title: "Polaroid Fan",
  },
];

export default MovingCards