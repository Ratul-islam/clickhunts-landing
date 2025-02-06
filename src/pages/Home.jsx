import React, { useState } from "react";
import EnhancedPaymentMethods from "../components/enhanced-payments";
import PartnersShowcase from "../components/partner-showcase";
import GetStartedSection from "../components/getStarted";
import AnimatedBanner from "../components/animatedBanner";

const Home = () => {

  return (
    <div>
      <PartnersShowcase/>
      <GetStartedSection/>
      <AnimatedBanner/>
      <EnhancedPaymentMethods/>
    </div>
  );
};

export default Home;
