
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { differenceInHours } from "date-fns";

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    departureTime: string;
    returnTime: string;
  }>({
    departureTime: "",
    returnTime: "",
  });
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculateDays = () => {
    if (!departureDate || !returnDate || !formData.departureTime || !formData.returnTime) {
      return 1;
    }

    const departureDateTime = new Date(
      `${format(departureDate, "yyyy-MM-dd")}T${formData.departureTime}`
    );
    
    const returnDateTime = new Date(
      `${format(returnDate, "yyyy-MM-dd")}T${formData.returnTime}`
    );
    
    return Math.ceil(differenceInHours(returnDateTime, departureDateTime) / 24) || 1;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateDateTime = () => {
    const newErrors: Record<string, string> = {};
    
    if (!departureDate) newErrors.departureDate = "La date de départ est requise";
    if (!formData.departureTime) newErrors.departureTime = "L'heure de départ est requise";
    if (!returnDate) newErrors.returnDate = "La date de retour est requise";
    if (!formData.returnTime) newErrors.returnTime = "L'heure de retour est requise";
    
    if (departureDate && returnDate && departureDate > returnDate) {
      newErrors.returnDate = "La date de retour doit être après la date de départ";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateDateTime()) {
      navigate("/booking-process", {
        state: {
          bookingDetails: {
            departureDate,
            departureTime: formData.departureTime,
            returnDate,
            returnTime: formData.returnTime
          }
        }
      });
    } else {
      toast({
        variant: "destructive",
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
      });
    }
  };

  const isFormComplete = departureDate && returnDate && formData.departureTime && formData.returnTime;
  const days = calculateDays();
  const estimatedPrice = days * 35; // Prix de base estimé

  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: "url('/lovable-uploads/f3a0e96d-b0ab-42e5-a56a-e354fd8625fd.png')",
        }}
      />
      
      <div className="relative max-w-screen-xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Hero content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Service de Gardiennage de Voitures Premium avec Voiturier
            </h1>
            
            <p className="text-lg sm:text-xl mb-8">
              Confiez-nous votre véhicule en toute sérénité. Notre équipe de voituriers professionnels prend soin de votre voiture pendant que vous voyagez.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
              >
                <a href="#services">Nos services</a>
              </Button>
            </div>
          </div>

          {/* Right column - Booking form */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-navy">Obtenez votre estimation</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-navy">Date de départ*</Label>
                  <div className="mt-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white hover:bg-gray-50",
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
                      <PopoverContent className="w-auto p-0 z-50 bg-white">
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
                  <Label htmlFor="departureTime" className="text-navy">Heure de départ*</Label>
                  <Input 
                    id="departureTime" 
                    name="departureTime" 
                    type="time"
                    value={formData.departureTime} 
                    onChange={handleInputChange} 
                    className={cn(
                      "bg-white hover:bg-white focus:bg-white",
                      errors.departureTime && "border-red-500"
                    )}
                  />
                  {errors.departureTime && <p className="text-red-500 text-sm mt-1">{errors.departureTime}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-navy">Date de retour*</Label>
                  <div className="mt-1">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white hover:bg-gray-50",
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
                      <PopoverContent className="w-auto p-0 z-50 bg-white">
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
                  <Label htmlFor="returnTime" className="text-navy">Heure de retour*</Label>
                  <Input 
                    id="returnTime" 
                    name="returnTime" 
                    type="time"
                    value={formData.returnTime} 
                    onChange={handleInputChange} 
                    className={cn(
                      "bg-white hover:bg-white focus:bg-white",
                      errors.returnTime && "border-red-500"
                    )}
                  />
                  {errors.returnTime && <p className="text-red-500 text-sm mt-1">{errors.returnTime}</p>}
                </div>
              </div>

              {/* Price estimation */}
              {isFormComplete && (
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 mt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Estimation de prix</p>
                    <div className="text-3xl font-bold text-gold mb-2">
                      À partir de {estimatedPrice}€
                    </div>
                    <p className="text-xs text-gray-500">
                      Pour {days} jour{days > 1 ? 's' : ''} • Prix final selon services choisis
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <Button 
                  type="button"
                  onClick={handleContinue}
                  disabled={!isFormComplete}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 text-lg"
                >
                  Continuer ma réservation
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  * Champs obligatoires
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
