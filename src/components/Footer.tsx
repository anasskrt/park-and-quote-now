
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white" id="contact">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Valet<span className="text-gold">Park</span></h3>
            <p className="mb-4">
              Service premium de gardiennage et voiturier pour tous vos besoins de stationnement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-light">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-light">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gold-light transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-gold-light transition-colors">Nos Services</a></li>
              <li><a href="#devis" className="hover:text-gold-light transition-colors">Demander un Devis</a></li>
              <li><a href="#contact" className="hover:text-gold-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>contact@valetpark.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} ValetPark. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
