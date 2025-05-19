import React, { useState } from "react";
import EnhancedPaymentMethods from "../components/enhanced-payments";
import PartnersShowcase from "../components/partner-showcase";
import GetStartedSection from "../components/getStarted";
import StatsBanner from "../components/statsBanner";
import Verticles from "../components/verticles";
import TopCountries from "../components/top-countries";
import PowerfullIntegration from "../components/powerfull-integration";
import CompanyOverview from "../components/who";
import ReadyToPertner from "../components/ready";
import PremiumNetworkSection from "../components/cpa";
import AdvertiserSection from "../components/advpub";
import TestimonialsTable from "../components/testimonial";
import Hero from "../components/hero";
import NewHero from "../components/newHero";

const Home = () => {

  return (
    <div>
      {/* <Hero/> */}
      {/* <NewHero/> */}
      <PremiumNetworkSection/>
      <CompanyOverview/>
      {/* <PremiumNetworkSection/> */}
      <GetStartedSection/>
      <StatsBanner/>
      <Verticles/>
      <TopCountries/>
      <ReadyToPertner/>
      <AdvertiserSection/>
      <PowerfullIntegration/>
      {/* <Customers/> */}
      {/* <PublisherSection/> */}
      <TestimonialsTable/>
      <PartnersShowcase/>
      <EnhancedPaymentMethods/>
      {/* <OffersList/> */}
      {/* <AnimatedBanner/> */}
      <section class="cta max-w-[1300px] m-auto rounded-md">
        <style jsx>
            {`
            .cta {
            padding: 30px 0;
            background: var(--primary);
            color: white;
            text-align: center;
        }

        .cta-buttons {
            display: flex;
            justify-content: center;
            // padding-inline:30px;
            gap: 20px;
        }

        .cta-button-home {
            display: inline-block;
            padding: 15px 40px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .primary-button {
            background: white;
            color: var(--primary);
        }

        .secondary-button {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        .cta-button-home:hover {
          transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            color:white;
            border: 2px solid white;
        }
          .primary-button:hover {
          color: var(--primary);
          }
 @media (max-width: 1024px) {
            .cta-buttons {
                flex-direction: column;
                padding: 0 20px;
            }
        }
            `}
        </style>
        <div class="aboutContainer ">
            <div class="cta-buttons items-center">

            <h2 className='text-2xl md:text-4xl  font-bold'>Ready to Get Started?</h2>
                <a href="https://clickhunts.everflowclient.io/affiliate/signup" class="cta-button-home primary-button">BECOME AN AFFILIATE</a>
                <a href="https://clickhunts.everflowclient.io/advertiser/signup" class="cta-button-home secondary-button">BECOME AN ADVERTISER</a>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Home;
