import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <main className="bg-blue-100 min-h-screen ">
      {/* Hero Section */}
      <section className="px-6 py-28 max-w-5xl mx-auto ">
        <h1 className="text-4xl md:text-5xl font-normal mb-4 text-gray-900">
          Welcome to Triple I: <br /> Your Partner in <br /> Innovative IT Solutions
        </h1>
        <p className="text-gray-600 max-w-2xl  mb-6">Empowering businesses with expert consultancy and cutting-edge technology for a brighter future.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">Learn More</button>
          <button className="bg-white border px-5 py-2 rounded text-blue-600 hover:bg-blue-100 transition">Sign Up</button>
        </div>

        <div className="mt-10">
          <Image src="/asset/campaign-creators-qCi_MzVODoU-unsplash.jpg" alt="Team working together" width={600} height={300} className="rounded-xl w-full" />
        </div>
      </section>

      {/* Info Section */}
      <section className="grid md:grid-cols-2 items-center px-6 py-16 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Empowering Your Digital Journey with Expertise and Innovation</h2>
          <p className="text-gray-600 mb-4">At Triple I, we believe in harnessing technology to drive success. Our mission is to provide tailored IT solutions that meet your unique needs.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Innovative solutions for a connected world.</li>
            <li>Your trusted partner in IT excellence.</li>
            <li>Transforming ideas into impactful digital solutions.</li>
          </ul>
        </div>

        <div>
          <Image src="/asset/austin-distel-mpN7xjKQ_Ns-unsplash.jpg" alt="Working professionals" width={600} height={400} className="rounded-xl" />
        </div>
      </section>
    </main>
  );
};

export default Banner;
