import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import SixOps from "@/components/sections/SixOps";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

const Home: React.FC = () => {
  // Add Open Graph meta tags
  return (
    <>
      <Helmet>
        <title>V++ Technology | Innovation in Software & Gaming</title>
        <meta name="description" content="V++ Technology delivers cutting-edge software solutions and gaming innovations through our SixOps Development division." />
        <meta property="og:title" content="V++ Technology | Innovation in Software & Gaming" />
        <meta property="og:description" content="Discover innovative software solutions and gaming technology from V++ Technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.remixicon.com/releases/v4.0.0/remixicon.css" rel="stylesheet" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Products />
          <SixOps />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
