
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // Get user data from localStorage (in a real app, this would come from an API)
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName") || "Utilisateur";
    
    setUserEmail(storedEmail || "");
    setUserName(storedName);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    toast.success("Vous êtes déconnecté");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Mon Profil</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="md:w-1/3">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="text-2xl bg-navy text-white">
                    {userName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{userName}</CardTitle>
                <CardDescription>{userEmail}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Button 
                  variant="outline" 
                  className="mb-2 w-full"
                  onClick={() => toast.info("Fonctionnalité à venir")}
                >
                  Modifier le profil
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full" 
                  onClick={handleLogout}
                >
                  Se déconnecter
                </Button>
              </CardContent>
            </Card>
            
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Mes réservations</CardTitle>
                <CardDescription>
                  Gérez vos réservations de service voiturier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <p>Vous n'avez pas encore de réservation</p>
                  <Button className="mt-4 bg-navy hover:bg-navy-light" onClick={() => navigate("/#devis")}>
                    Demander un devis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
