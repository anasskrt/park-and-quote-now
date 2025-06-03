
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, User, Clock, Shield, X } from "lucide-react";
import { toast } from "sonner";

interface PostBookingSignupProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
  };
  onClose: () => void;
  onSkip: () => void;
}

const PostBookingSignup = ({ userInfo, onClose, onSkip }: PostBookingSignupProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!password) newErrors.password = "Le mot de passe est requis";
    else if (password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    
    if (!confirmPassword) newErrors.confirmPassword = "Veuillez confirmer le mot de passe";
    else if (password !== confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateAccount = async () => {
    if (!validateForm()) return;

    setIsCreating(true);
    
    // Simulation de création de compte
    setTimeout(() => {
      // Save user data to localStorage (in a real app, this would be an API call)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", userInfo.email);
      localStorage.setItem("userName", userInfo.name);
      localStorage.setItem("userPhone", userInfo.phone);
      
      setIsCreating(false);
      toast.success("Compte créé avec succès !");
      onClose();
    }, 2000);
  };

  const benefits = [
    {
      icon: Clock,
      title: "Réservations rapides",
      description: "Pré-remplissage automatique de vos informations"
    },
    {
      icon: User,
      title: "Suivi de vos réservations",
      description: "Accédez à l'historique de toutes vos réservations"
    },
    {
      icon: Shield,
      title: "Offres exclusives",
      description: "Recevez des promotions réservées aux membres"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={onSkip}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <CardTitle className="text-navy">Réservation confirmée !</CardTitle>
          </div>
          <CardDescription>
            Créez un compte pour simplifier vos prochaines réservations
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Benefits */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <benefit.icon className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-navy text-sm">{benefit.title}</h4>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pre-filled info */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-navy mb-1">Vos informations :</p>
            <p className="text-sm text-gray-600">{userInfo.name}</p>
            <p className="text-sm text-gray-600">{userInfo.email}</p>
          </div>

          {/* Password fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="password" className="text-navy">Mot de passe*</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
                placeholder="Choisissez un mot de passe"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-navy">Confirmer le mot de passe*</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={errors.confirmPassword ? "border-red-500" : ""}
                placeholder="Confirmez votre mot de passe"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button
              onClick={handleCreateAccount}
              disabled={isCreating}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold"
            >
              {isCreating ? "Création en cours..." : "Créer mon compte"}
            </Button>
            
            <Button
              variant="ghost"
              onClick={onSkip}
              className="w-full text-gray-600 hover:text-gray-800"
            >
              Peut-être plus tard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostBookingSignup;
