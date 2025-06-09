
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PricingHighlight from "@/components/PricingHighlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceZones from "@/components/ServiceZones";
import CustomerReviews from "@/components/CustomerReviews";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're returning from a successful validation
    if (location.state?.validationComplete) {
      toast.success("Votre demande a été enregistrée avec succès");
      
      // Clear the state to prevent showing the toast again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <PricingHighlight />
        <Features />
        <WhyChooseUs />
        <ServiceZones />
        <CustomerReviews />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
