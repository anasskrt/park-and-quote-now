
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import QuoteResult from "@/components/QuoteResult";
import { QuoteData } from "@/lib/types";

const Index = () => {
  const [quoteResult, setQuoteResult] = useState<QuoteData | null>(null);
  const [showQuoteResult, setShowQuoteResult] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if we're returning from a successful validation
    if (location.state?.validationComplete) {
      toast.success("Votre demande a été enregistrée avec succès");
      
      // Clear the state to prevent showing the toast again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleQuoteSubmit = (data: QuoteData) => {
    // Ici nous pourrions calculer un vrai devis basé sur les données
    // Pour l'instant, nous simulons simplement un devis
    setQuoteResult(data);
    setShowQuoteResult(true);
    
    // Scroll to result
    setTimeout(() => {
      document.getElementById("quote-result")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero onQuoteSubmit={handleQuoteSubmit} />
        
        {showQuoteResult && quoteResult && (
          <div className="page-container" id="quote-result">
            <QuoteResult quote={quoteResult} />
          </div>
        )}
        
        <Features />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
