import React from "react";

import Banner2 from "./Home/Banner/Banner2";
import Service from "./Home/Service/Service";
import Podcast from "./Home/Podcast/Podcast";
import Testimonial from "./Home/Testimonial/Testimonial";
import ConsultancyPage from "./Consultancy/page";
import Contact from "./Home/Contact/Contact";

const page = () => {
  return (
    <div>
      <Banner2 />
      {/* <Banner /> */}
      <Service />
      <Podcast />
      <Testimonial />
      <ConsultancyPage />
      <Contact />
    </div>
  );
};

export default page;
