"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import dragAnimation from "../../../animations/VFUdfdWyzW.json";

// Utility: SplitText Component
const SplitText = ({ text }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-2" initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}>
          {word}
        </motion.span>
      ))}
    </>
  );
};

// Animated Image Component
const AnimatedImage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        scale: 0.85,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        x: -150,
        scale: 1,
        opacity: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ x: -150, opacity: 0, scale: 1 }} className="relative  rounded-xl shadow-lg overflow-hidden">
      <Image src="/asset/campaign-creators-qCi_MzVODoU-unsplash.jpg" alt="Editor" width={500} height={350} className="object-cover rounded" />
    </motion.div>
  );
};

const Banner2 = () => {
  return (
    <section className="relative h-screen bg-[#f6f7fb] border-b-2 border-gray-200 py-32 px-6 overflow-hidden">
      {/* Background shape */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200 rounded-full opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[#0e1628] leading-tight py-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <SplitText text="Empower your vision" />
            <br />
            <span className="">
              <SplitText text="with the smartest IT" />
            </span>
            <br />
            <SplitText text="solutions by " />
            <span className="text-blue-600">
              <SplitText text="Triple-I" />
            </span>
          </motion.h1>

          <motion.p className="text-gray-500 text-lg mt-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }} viewport={{ once: true }}>
            Easily build websites, landing pages, pop-ups, alert bars, and beyond.
          </motion.p>

          <motion.button
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg overflow-hidden relative group"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
              y: 0,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.span className="relative z-10 flex items-center gap-2" initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              Get Started Now
              <motion.span initial={{ x: 0 }} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                →
              </motion.span>
            </motion.span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
          </motion.button>
        </div>

        {/* Right Section */}
        <div className="relative w-full">
          <AnimatedImage />

          {/* Floating Product Card */}
          <motion.div className="absolute bottom-[-150px] left-24 bg-white border-2 border-blue-100 shadow-md rounded-lg max-w-44 z-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} viewport={{ once: false }}>
            <Image src="/bannerImage/3d-rendering-vibrant-neon-cactus-desert.jpg" alt="Product" width={176} height={250} className="rounded h-40 object-cover" />
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

      {/* Optional Lottie Animation */}
      <Lottie animationData={dragAnimation} className="absolute bottom-5/12 right-50 opacity-70 z-0" />
    </section>
  );
};

export default Banner2;
