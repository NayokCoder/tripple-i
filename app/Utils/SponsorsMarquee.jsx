// SponsorsMarquee.jsx
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SponsorsMarquee = () => {
  const sponsors = ["/logos/navy.png", "/logos/army.png", "/logos/dell.png", "/logos/penn.png", "/logos/boeing.png", "/logos/bbc.png", "/logos/lucasfilm.png", "/logos/microsoft.png"];

  return (
    <div className="bg-gray-100 py-10 mt-40">
      <Marquee pauseOnHover speed={50}>
        <div className="flex items-center space-x-16 px-6">
          {sponsors.map((logo, index) => (
            <Image key={index} src={logo} alt={`sponsor-${index}`} width={120} height={48} className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" unoptimized />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SponsorsMarquee;
