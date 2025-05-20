
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { SimplifiedQuoteData, CarInformation } from "@/lib/types";
import { CarFront, User, Mail, Phone, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface QuoteValidationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  quoteData: SimplifiedQuoteData;
  onComplete: (userData: {
    name: string;
    email: string;
    phone: string;
    car: CarInformation;
  }) => void;
}

const QuoteValidationForm = ({
  open,
  onOpenChange,
  quoteData,
  onComplete,
}: QuoteValidationFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // User data state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Car information state
  const [car, setCar] = useState<CarInformation>({
    make: "",
    model: "",
    year: "",
    licensePlate: "",
  });

  // Is user logged in?
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Load user data if logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const storedEmail = localStorage.getItem("userEmail") || "";
      const storedName = localStorage.getItem("userName") || "";
      
      setEmail(storedEmail);
      setName(storedName);
    }
  }, []);

  const handleCarInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !car.make || !car.model || !car.year) {
      toast({
        variant: "destructive",
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires",
      });
      return;
    }
    
    // Pass the completed form data to parent component
    onComplete({
      name,
      email,
      phone,
      car,
    });
    
    onOpenChange(false);
    toast({
      title: "Devis validé",
      description: "Votre demande a été enregistrée avec succès",
    });
  };

  const handleLogin = () => {
    navigate("/login");
    onOpenChange(false);
  };

  const handleSignup = () => {
    navigate("/signup");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Valider votre devis</DialogTitle>
          <DialogDescription>
            Complétez les informations pour confirmer votre demande de service voiturier
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Summary of the quote */}
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="font-medium mb-2 text-navy">Détails du devis</h4>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-navy" />
                <span>Départ: {format(quoteData.departureDate, "dd/MM/yyyy", { locale: fr })} à {quoteData.departureTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-navy" />
                <span>Retour: {format(quoteData.returnDate, "dd/MM/yyyy", { locale: fr })} à {quoteData.returnTime}</span>
              </div>
            </div>
          </div>

          {!isLoggedIn && (
            <div className="bg-gray-50 p-3 rounded-md">
              <h4 className="font-medium mb-2 text-navy">Connexion rapide</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  type="button"
                  variant="outline" 
                  className="flex-1"
                  onClick={handleLogin}
                >
                  Se connecter
                </Button>
                <Button 
                  type="button"
                  className="flex-1 bg-gold hover:bg-gold-dark text-navy"
                  onClick={handleSignup}
                >
                  Créer un compte
                </Button>
              </div>
              <div className="mt-3 text-center">
                <span className="text-sm text-gray-500">ou continuez en tant qu'invité</span>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium mb-3 text-navy">Vos coordonnées</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="name">Nom complet*</Label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoggedIn}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email">Email*</Label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoggedIn}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="phone">Téléphone*</Label>
                <div className="relative">
                  <div className="absolute left-3 top-2.5">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="phone"
                    placeholder="Votre numéro de téléphone"
                    className="pl-10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-navy">Informations du véhicule</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="make">Marque*</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-2.5">
                      <CarFront className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="make"
                      name="make"
                      placeholder="Marque"
                      className="pl-10"
                      value={car.make}
                      onChange={handleCarInfoChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="model">Modèle*</Label>
                  <Input
                    id="model"
                    name="model"
                    placeholder="Modèle"
                    value={car.model}
                    onChange={handleCarInfoChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="year">Année*</Label>
                  <Input
                    id="year"
                    name="year"
                    placeholder="Année"
                    value={car.year}
                    onChange={handleCarInfoChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="licensePlate">Immatriculation</Label>
                  <Input
                    id="licensePlate"
                    name="licensePlate"
                    placeholder="Immatriculation"
                    value={car.licensePlate}
                    onChange={handleCarInfoChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="bg-navy hover:bg-navy-light"
            >
              Valider le devis
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteValidationForm;
