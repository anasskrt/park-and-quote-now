
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GoogleMap = () => {
  const [apiKey, setApiKey] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    if (apiKey.trim()) {
      setShowMap(true);
    }
  };

  if (!showMap) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-100">
        <div className="text-center max-w-md">
          <h3 className="text-lg font-semibold text-navy mb-4">Afficher la carte Google Maps</h3>
          <p className="text-sm text-gray-600 mb-4">
            Pour afficher la carte, veuillez entrer votre clé API Google Maps.
            Vous pouvez l'obtenir sur{" "}
            <a 
              href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Google Cloud Console
            </a>
          </p>
          <div className="space-y-3">
            <Input
              type="password"
              placeholder="Clé API Google Maps"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleShowMap}
              className="w-full bg-navy hover:bg-navy-light"
              disabled={!apiKey.trim()}
            >
              Afficher la carte
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Coordonnées des Champs-Élysées, Paris
  const location = "48.8698,2.3080";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}&zoom=15`;

  return (
    <div className="h-full">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ValetPark Location"
      />
    </div>
  );
};

export default GoogleMap;
