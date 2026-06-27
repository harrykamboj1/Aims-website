import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ValuesSection from "./components/ValuesSection";
import ExamShowcase from "./components/ExamShowcase";
import AppPromo from "./components/AppPromo";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <ExamShowcase />
      <AppPromo />
      <Services />
      <AboutUs />
      <Testimonial />
      <ContactForm />
      <Footer />
    </main>
  );
}
