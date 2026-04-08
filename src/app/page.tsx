"use client";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Bars } from "react-loader-spinner";
// import Gallery from "./components/Gallery";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Testimonial from "./components/testimonial";

export default function Home() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
  //       <div className="text-center">
  //         <Bars
  //           height="80"
  //           width="80"
  //           color="hsl(var(--primary-blue))"
  //           ariaLabel="bars-loading"
  //           wrapperStyle={{}}
  //           wrapperClass=""
  //           visible={true}
  //         />
  //         <p className="mt-6 text-gray-600 font-semibold">Loading AIMS...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      {/* <Gallery /> */}
      <Testimonial />
      <ContactForm />
      <Footer />
    </main>
  );
}
