
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="h-8 w-8 text-navy" />
              <h1 className="text-3xl font-bold text-navy">Mentions Légales</h1>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-navy mb-4">Éditeur du site</h2>
              <p className="mb-6">
                <strong>ValetPark</strong><br />
                Société par actions simplifiée au capital de 10 000 €<br />
                RCS Paris 123 456 789<br />
                Siège social : 123 Avenue des Champs-Élysées, 75008 Paris<br />
                Téléphone : +33 1 23 45 67 89<br />
                Email : contact@valetpark.fr
              </p>

              <h2 className="text-xl font-semibold text-navy mb-4">Directeur de la publication</h2>
              <p className="mb-6">
                Monsieur Jean Dupont, Président de ValetPark SAS
              </p>

              <h2 className="text-xl font-semibold text-navy mb-4">Hébergement</h2>
              <p className="mb-6">
                Ce site est hébergé par :<br />
                Lovable<br />
                Adresse : Selon les conditions d'hébergement Lovable
              </p>

              <h2 className="text-xl font-semibold text-navy mb-4">Propriété intellectuelle</h2>
              <p className="mb-6">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>

              <h2 className="text-xl font-semibold text-navy mb-4">Protection des données personnelles</h2>
              <p className="mb-6">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
              </p>

              <h2 className="text-xl font-semibold text-navy mb-4">Cookies</h2>
              <p className="mb-6">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>

              <h2 className="text-xl font-semibold text-navy mb-4">Responsabilité</h2>
              <p className="mb-6">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;
