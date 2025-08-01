// Banner2.jsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import dragAnimation from "../../../animations/VFUdfdWyzW.json";
import worldwide from "../../../animations/worldwide-team.json";

// Animation variants for cleaner code
const wordVariant = {
  hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.06,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      type: "tween",
    },
  }),
};

const SplitText = ({ text }) => {
  const words = text.split(" ");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={wordVariant}
          custom={i}
          style={{
            willChange: "transform, opacity, filter",
            backfaceVisibility: "hidden",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const AnimatedImage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        scale: 0.85,
        delay: 1,
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
          type: "tween",
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ x: -120, opacity: 0, scale: 0.95 }} className="relative rounded-xl  overflow-hidden">
      <Image
        src="/campaign-creators-qCi_MzVODoU-unsplash.jpg"
        alt="Editor workspace"
        width={500}
        height={350}
        className="object-cover rounded"
        priority
        unoptimized // If from external domain
      />

      {/* <Lottie animationData={worldwide} className=" w-full h-full" /> */}
    </motion.div>
  );
};

const Banner2 = () => {
  return (
    <section className="relative h-screen bg-[#f6f7fb] border-b-2 border-gray-200 py-32 px-6 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200 rounded-full opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0e1628] leading-tight py-4">
            <SplitText text="Empower your vision" />
            <br />
            <SplitText text="with the smartest IT" />
            <br />
            <SplitText text="solutions by" />
            <span className="text-blue-600">
              <SplitText text="Triple-I" />
            </span>
          </h1>

          <motion.p className="text-gray-500 text-lg mt-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            Easily build websites, landing pages, pop-ups, alert bars, and beyond.
          </motion.p>

          <motion.button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg relative group" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1 }} viewport={{ once: true }}>
            <motion.span className="relative z-10 flex items-center gap-2">Get Started Now →</motion.span>
          </motion.button>
        </div>

        {/* Right Side */}
        <div className="relative w-full">
          <AnimatedImage />

          {/* Product Card */}
          <motion.div className="absolute bottom-[-150px] left-24  border-2 border-blue-100 shadow-md rounded-lg max-w-44 z-10" initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.03, y: -3 }} transition={{ delay: 2.6, duration: 1.2 }} viewport={{ once: true }}>
            <Image
              src="/3d-rendering-vibrant-neon-cactus-desert.jpg"
              alt="Terra Craft Product"
              width={176}
              height={160}
              className="rounded object-cover"
              unoptimized // If you don't want Next.js optimization
            />
            <div className="p-3">
              <p className="text-sm mt-2 font-bold">Terra Craft</p>
              <p className="text-sm text-gray-700">
                $159.00 <span className="line-through text-gray-400">$79.00</span>
              </p>
              <button className="btn btn-primary rounded-xl btn-sm mt-2">Buy Now</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optional Lottie */}
      {/* <Lottie animationData={dragAnimation} className="absolute bottom-5/12 right-50 opacity-70 z-0" /> */}
      <div className="absolute top-24 -right-52 w-96 h-96 bg-blue-200 rounded-full opacity-20 z-0"></div>
    </section>
  );
};

export default Banner2;
