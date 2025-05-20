
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { QuoteData } from "@/lib/types";
import { CalendarIcon } from "lucide-react";

interface QuoteFormProps {
  onSubmit: (data: QuoteData) => void;
}

const QuoteForm = ({ onSubmit }: QuoteFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<QuoteData>>({
    location: "",
    departureTime: "",
    returnTime: "",
    carModel: "",
    name: "",
    email: "",
    phone: "",
  });
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.location) newErrors.location = "Le lieu est requis";
    if (!departureDate) newErrors.departureDate = "La date de départ est requise";
    if (!formData.departureTime) newErrors.departureTime = "L'heure de départ est requise";
    if (!returnDate) newErrors.returnDate = "La date de retour est requise";
    if (!formData.returnTime) newErrors.returnTime = "L'heure de retour est requise";
    if (!formData.carModel) newErrors.carModel = "La marque/modèle est requise";
    if (!formData.name) newErrors.name = "Le nom est requis";
    if (!formData.email) newErrors.email = "L'email est requis";
    if (!formData.phone) newErrors.phone = "Le téléphone est requis";
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    // Date validation
    if (departureDate && returnDate && departureDate > returnDate) {
      newErrors.returnDate = "La date de retour doit être après la date de départ";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (departureDate && returnDate) {
        const completeData: QuoteData = {
          ...formData as any,
          departureDate,
          returnDate,
        };
        
        onSubmit(completeData);
        
        toast({
          title: "Devis demandé avec succès",
          description: "Votre devis a été calculé ci-dessous.",
        });
      }
    } else {
      toast({
        variant: "destructive",
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <Label htmlFor="location">Lieu (aéroport, gare, etc.)*</Label>
          <Input 
            id="location" 
            name="location" 
            value={formData.location} 
            onChange={handleInputChange} 
            className={cn(errors.location && "border-red-500")}
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Date de départ*</Label>
            <div className="mt-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground",
                      errors.departureDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? (
                      format(departureDate, "dd/MM/yyyy", { locale: fr })
                    ) : (
                      <span>Sélectionner une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                    locale={fr}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              {errors.departureDate && (
                <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="departureTime">Heure de départ*</Label>
            <Input 
              id="departureTime" 
              name="departureTime" 
              type="time"
              value={formData.departureTime} 
              onChange={handleInputChange} 
              className={cn(errors.departureTime && "border-red-500")}
            />
            {errors.departureTime && <p className="text-red-500 text-sm mt-1">{errors.departureTime}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Date de retour*</Label>
            <div className="mt-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !returnDate && "text-muted-foreground",
                      errors.returnDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? (
                      format(returnDate, "dd/MM/yyyy", { locale: fr })
                    ) : (
                      <span>Sélectionner une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                    locale={fr}
                    disabled={(date) => date < (departureDate || new Date())}
                  />
                </PopoverContent>
              </Popover>
              {errors.returnDate && (
                <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="returnTime">Heure de retour*</Label>
            <Input 
              id="returnTime" 
              name="returnTime" 
              type="time"
              value={formData.returnTime} 
              onChange={handleInputChange} 
              className={cn(errors.returnTime && "border-red-500")}
            />
            {errors.returnTime && <p className="text-red-500 text-sm mt-1">{errors.returnTime}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="carModel">Marque et modèle de voiture*</Label>
          <Input 
            id="carModel" 
            name="carModel" 
            placeholder="Ex: Renault Clio, Peugeot 3008, etc."
            value={formData.carModel} 
            onChange={handleInputChange} 
            className={cn(errors.carModel && "border-red-500")}
          />
          {errors.carModel && <p className="text-red-500 text-sm mt-1">{errors.carModel}</p>}
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Vos coordonnées</h3>
          
          <div>
            <Label htmlFor="name">Nom complet*</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              className={cn(errors.name && "border-red-500")}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="email">Email*</Label>
              <Input 
                id="email" 
                name="email" 
                type="email"
                value={formData.email} 
                onChange={handleInputChange} 
                className={cn(errors.email && "border-red-500")}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="phone">Téléphone*</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                className={cn(errors.phone && "border-red-500")}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button 
            type="submit" 
            className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3"
          >
            Demander un devis
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            * Champs obligatoires
          </p>
        </div>
      </div>
    </form>
  );
};

export default QuoteForm;
