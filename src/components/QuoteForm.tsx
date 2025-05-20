
import { useState } from "react";
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

interface SimplifiedQuoteData {
  departureDate: Date;
  departureTime: string;
  returnDate: Date;
  returnTime: string;
}

interface QuoteFormProps {
  onSubmit: (data: any) => void;
}

const QuoteForm = ({ onSubmit }: QuoteFormProps) => {
  const { toast } = useToast();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!departureDate) newErrors.departureDate = "La date de départ est requise";
    if (!formData.departureTime) newErrors.departureTime = "L'heure de départ est requise";
    if (!returnDate) newErrors.returnDate = "La date de retour est requise";
    if (!formData.returnTime) newErrors.returnTime = "L'heure de retour est requise";
    
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
        const completeData: SimplifiedQuoteData = {
          departureDate,
          departureTime: formData.departureTime,
          returnDate,
          returnTime: formData.returnTime
        };
        
        onSubmit({
          ...completeData,
          // Adding empty values for the other fields to maintain compatibility
          location: "",
          carModel: "",
          name: "",
          email: "",
          phone: ""
        });
        
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
