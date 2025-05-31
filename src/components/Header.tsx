
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, UserRound } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-navy">Valet<span className="text-gold">Park</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-navy hover:text-navy-light transition-colors">Accueil</Link>
            <Link to="/#services" className="font-medium text-navy hover:text-navy-light transition-colors">Services</Link>
            <Link to="/#devis" className="font-medium text-navy hover:text-navy-light transition-colors">Devis</Link>
            <Link to="/contact" className="font-medium text-navy hover:text-navy-light transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-navy hover:bg-navy-light text-white">
              <Link to="/#devis">Demander un devis</Link>
            </Button>
            {isLoggedIn ? (
              <Link to="/profile" className="text-navy hover:text-navy-light">
                <UserRound size={24} />
              </Link>
            ) : (
              <Link to="/login" className="text-navy hover:text-navy-light">
                <UserRound size={24} />
              </Link>
            )}
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
            <Link to="/" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md">Accueil</Link>
            <Link to="/#services" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md">Services</Link>
            <Link to="/#devis" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Devis</Link>
            <Link to="/contact" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {isLoggedIn ? (
              <Link to="/profile" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Mon Profil</Link>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-navy font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Connexion</Link>
            )}
            <div className="mt-4 px-3">
              <Button className="w-full bg-navy hover:bg-navy-light text-white">
                <Link to="/#devis" onClick={() => setIsMenuOpen(false)}>Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
