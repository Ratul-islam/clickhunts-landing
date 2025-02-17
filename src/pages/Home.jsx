import React, { useState } from "react";
import EnhancedPaymentMethods from "../components/enhanced-payments";
import PartnersShowcase from "../components/partner-showcase";
import GetStartedSection from "../components/getStarted";
import AnimatedBanner from "../components/animatedBanner";
import StatsBanner from "../components/statsBanner";
import Verticles from "../components/verticles";
import TopCountries from "../components/top-countries";
import PowerfullIntegration from "../components/powerfull-integration";
import CompanyOverview from "../components/who";
import ReadyToPertner from "../components/ready";
import PremiumNetworkSection from "../components/cpa";
import Customers from "../components/customers";
import AdvertiserSection from "../components/advpub";
import PublisherSection from "../components/publisher";
import OffersList from "../components/offers";
import TestimonialsTable from "../components/testimonial";
import Hero from "../components/hero";

const Home = () => {

  return (
    <div>
      <Hero/>
      <GetStartedSection/>
      <StatsBanner/>
      <Verticles/>
      <TopCountries/>
      <PowerfullIntegration/>
      <ReadyToPertner/>
      <CompanyOverview/>
      <PremiumNetworkSection/>
      {/* <Customers/> */}
      <AdvertiserSection/>
      {/* <PublisherSection/> */}
      <OffersList/>
      <TestimonialsTable/>
      <PartnersShowcase/>
      <EnhancedPaymentMethods/>
      <AnimatedBanner/>
    </div>
  );
};

export default Home;
