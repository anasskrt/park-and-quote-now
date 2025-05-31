
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Eye, UserPlus, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

// Données fictives pour les utilisateurs
const mockUsers = [
  {
    id: "U001",
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "06 12 34 56 78",
    status: "active",
    totalBookings: 5,
    totalSpent: 625,
    lastBooking: new Date("2024-01-15"),
    registeredAt: new Date("2023-08-20")
  },
  {
    id: "U002",
    name: "Marie Martin",
    email: "marie.martin@email.com",
    phone: "06 98 76 54 32",
    status: "active",
    totalBookings: 3,
    totalSpent: 375,
    lastBooking: new Date("2024-01-22"),
    registeredAt: new Date("2023-11-10")
  },
  {
    id: "U003",
    name: "Pierre Durand",
    email: "pierre.durand@email.com",
    phone: "06 11 22 33 44",
    status: "inactive",
    totalBookings: 1,
    totalSpent: 125,
    lastBooking: new Date("2023-12-05"),
    registeredAt: new Date("2023-07-15")
  },
  {
    id: "U004",
    name: "Sophie Bernard",
    email: "sophie.bernard@email.com",
    phone: "06 55 66 77 88",
    status: "active",
    totalBookings: 8,
    totalSpent: 1200,
    lastBooking: new Date("2024-01-28"),
    registeredAt: new Date("2023-05-03")
  }
];

const AdminUsers = () => {
  const [users] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activityFilter, setActivityFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Actif</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactif</Badge>;
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspendu</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    const matchesActivity = 
      activityFilter === "all" ||
      (activityFilter === "new" && user.totalBookings <= 1) ||
      (activityFilter === "regular" && user.totalBookings > 1 && user.totalBookings <= 5) ||
      (activityFilter === "frequent" && user.totalBookings > 5);

    return matchesSearch && matchesStatus && matchesActivity;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy mb-2">Gestion des Utilisateurs</h1>
        <p className="text-gray-600">Consultez et gérez tous les comptes clients</p>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Utilisateurs</p>
                <p className="text-2xl font-bold text-navy">{users.length}</p>
              </div>
              <div className="h-8 w-8 bg-navy/10 rounded-full flex items-center justify-center">
                <UserPlus className="h-4 w-4 text-navy" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
                <p className="text-2xl font-bold text-green-600">
                  {users.filter(u => u.status === "active").length}
                </p>
              </div>
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <Badge className="h-4 w-4 bg-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Réservations</p>
                <p className="text-2xl font-bold text-blue-600">
                  {users.reduce((sum, user) => sum + user.totalBookings, 0)}
                </p>
              </div>
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="h-4 w-4 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chiffre d'affaires</p>
                <p className="text-2xl font-bold text-gold">
                  {users.reduce((sum, user) => sum + user.totalSpent, 0)}€
                </p>
              </div>
              <div className="h-8 w-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold font-bold">€</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtres */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtres
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher par nom, email, ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
                <SelectItem value="suspended">Suspendu</SelectItem>
              </SelectContent>
            </Select>

            <Select value={activityFilter} onValueChange={setActivityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Activité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les clients</SelectItem>
                <SelectItem value="new">Nouveaux (≤1 résa)</SelectItem>
                <SelectItem value="regular">Réguliers (2-5 résa)</SelectItem>
                <SelectItem value="frequent">Fréquents (>5 résa)</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exporter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tableau des utilisateurs */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des Utilisateurs ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Réservations</TableHead>
                <TableHead>Total dépensé</TableHead>
                <TableHead>Dernière réservation</TableHead>
                <TableHead>Inscription</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3 text-gray-400" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-gray-400" />
                        {user.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell className="text-center font-semibold">
                    {user.totalBookings}
                  </TableCell>
                  <TableCell className="font-semibold text-green-600">
                    {user.totalSpent}€
                  </TableCell>
                  <TableCell>
                    {format(user.lastBooking, "dd/MM/yyyy", { locale: fr })}
                  </TableCell>
                  <TableCell>
                    {format(user.registeredAt, "dd/MM/yyyy", { locale: fr })}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Voir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
