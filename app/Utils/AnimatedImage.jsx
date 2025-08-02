"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedImage() {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        scale: 0.95,
        rotation: -10,
        x: 80,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Animation starts earlier
          end: "bottom 70%", // End position
          scrub: false, // smooth animation (set true if scroll-linked)
          once: true, // Run animation only once
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="">
      <div ref={imageRef}>
        <Image
          src="/austin-distel-mpN7xjKQ_Ns-unsplash.jpg"
          alt="Editor workspace"
          width={384} // w-96 = 384px
          height={256} // h-64 = 256px
          className="object-cover rounded-2xl shadow-2xl transition-all duration-500"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
