
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, BarChart3, Settings } from "lucide-react";

const Admin = () => {
  const location = useLocation();
  const isRootAdmin = location.pathname === "/admin";

  const adminMenuItems = [
    {
      title: "Gestion des devis",
      description: "Voir et gérer tous les devis clients",
      icon: FileText,
      path: "/admin/quotes",
      count: "24"
    },
    {
      title: "Gestion des utilisateurs",
      description: "Gérer les comptes clients",
      icon: Users,
      path: "/admin/users",
      count: "156"
    },
    {
      title: "Planning des véhicules",
      description: "Calendrier des entrées et sorties",
      icon: BarChart3,
      path: "/admin/calendar",
      count: "12"
    },
    {
      title: "Gestion des services",
      description: "Gérer les services supplémentaires",
      icon: Settings,
      path: "/admin/services",
      count: "3"
    },
    {
      title: "Gestion des prix",
      description: "Gérer les tarifs journaliers",
      icon: Settings,
      path: "/admin/pricing",
      count: "3"
    }
  ];

  if (!isRootAdmin) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/admin" className="text-navy hover:text-navy-light">
              ← Retour au panel admin
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Panel Administrateur</h1>
          <p className="text-gray-600">Gérez votre service de voiturier</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminMenuItems.map((item) => (
            <Card key={item.path} className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link to={item.path}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-navy">
                    {item.title}
                  </CardTitle>
                  <item.icon className="h-6 w-6 text-gold" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-navy">{item.count}</span>
                    <Button variant="outline" size="sm" className="text-navy border-navy hover:bg-navy hover:text-white">
                      Accéder
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
