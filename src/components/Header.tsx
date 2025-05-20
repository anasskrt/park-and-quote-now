
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-bold text-2xl text-navy">Valet<span className="text-gold">Park</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="font-medium text-navy hover:text-navy-light transition-colors">Accueil</a>
            <a href="#services" className="font-medium text-navy hover:text-navy-light transition-colors">Services</a>
            <a href="#devis" className="font-medium text-navy hover:text-navy-light transition-colors">Devis</a>
            <a href="#contact" className="font-medium text-navy hover:text-navy-light transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex">
            <Button className="bg-navy hover:bg-navy-light text-white">
              <a href="#devis">Demander un devis</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-navy">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="/" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md">Accueil</a>
            <a href="#services" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md">Services</a>
            <a href="#devis" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Devis</a>
            <a href="#contact" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md">Contact</a>
            <div className="mt-4 px-3">
              <Button className="w-full bg-navy hover:bg-navy-light text-white">
                <a href="#devis" onClick={() => setIsMenuOpen(false)}>Demander un devis</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
