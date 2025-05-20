
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import QuoteResult from "@/components/QuoteResult";
import { QuoteData } from "@/lib/types";

const Index = () => {
  const [quoteResult, setQuoteResult] = useState<QuoteData | null>(null);
  const [showQuoteResult, setShowQuoteResult] = useState(false);

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
        <Hero />
        
        <div className="page-container" id="devis">
          <h2 className="section-heading text-center">Demande de Devis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <QuoteForm onSubmit={handleQuoteSubmit} />
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-navy">Pourquoi choisir notre service?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Service personnalisé et professionnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Parking sécurisé 24h/24 et 7j/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Voituriers expérimentés et assurés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Prise en charge et livraison de votre véhicule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Services additionnels disponibles (lavage, entretien)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
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
