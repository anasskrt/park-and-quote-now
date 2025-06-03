
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  carModel: string;
}

interface UserInfoFormProps {
  onNext: (userInfo: UserInfo) => void;
  onBack: () => void;
}

const UserInfoForm = ({ onNext, onBack }: UserInfoFormProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [formData, setFormData] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    location: "",
    carModel: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check if user is logged in and pre-fill form
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const storedEmail = localStorage.getItem("userEmail") || "";
      const storedName = localStorage.getItem("userName") || "";
      
      setFormData(prev => ({
        ...prev,
        name: storedName,
        email: storedEmail
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!formData.location.trim()) newErrors.location = "Le lieu est requis";
    if (!formData.carModel.trim()) newErrors.carModel = "Le modèle de voiture est requis";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-navy">Vos informations</h2>
      
      {isLoggedIn && (
        <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
          <p className="text-sm text-green-700">
            ✓ Vos informations ont été pré-remplies automatiquement
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-navy">Nom complet*</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={cn(
                "bg-white",
                errors.name && "border-red-500",
                isLoggedIn && "bg-gray-50"
              )}
              placeholder="Votre nom complet"
              disabled={isLoggedIn}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-navy">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={cn(
                "bg-white",
                errors.email && "border-red-500",
                isLoggedIn && "bg-gray-50"
              )}
              placeholder="votre@email.com"
              disabled={isLoggedIn}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-navy">Téléphone*</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={cn(
                "bg-white",
                errors.phone && "border-red-500"
              )}
              placeholder="06 12 34 56 78"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="location" className="text-navy">Lieu de prise en charge*</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={cn(
                "bg-white",
                errors.location && "border-red-500"
              )}
              placeholder="Adresse ou aéroport"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="carModel" className="text-navy">Modèle de voiture*</Label>
          <Input
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleInputChange}
            className={cn(
              "bg-white",
              errors.carModel && "border-red-500"
            )}
            placeholder="Ex: BMW Série 3, Mercedes Classe C..."
          />
          {errors.carModel && <p className="text-red-500 text-sm mt-1">{errors.carModel}</p>}
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Retour
          </Button>
          <Button 
            type="submit"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-8"
          >
            Continuer vers les règles
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
