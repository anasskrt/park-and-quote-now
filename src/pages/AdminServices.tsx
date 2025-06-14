
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number | string;
  included: string[];
}

const AdminServices = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>([
    {
      id: "cleaning",
      name: "Nettoyage du véhicule",
      description: "Nettoyage complet intérieur et extérieur",
      price: 35,
      included: [
        "Lavage extérieur complet",
        "Aspirateur intérieur",
        "Nettoyage des vitres",
        "Lustrage de la carrosserie"
      ]
    },
    {
      id: "windshield",
      name: "Changement de pare-brise",
      description: "Remplacement du pare-brise endommagé",
      price: 280,
      included: [
        "Dépose de l'ancien pare-brise",
        "Pose du nouveau pare-brise",
        "Étanchéité garantie",
        "Contrôle qualité"
      ]
    },
    {
      id: "mechanical",
      name: "Réparation mécanique",
      description: "Diagnostic et réparation mécanique",
      price: "Sur devis",
      included: [
        "Diagnostic complet",
        "Devis détaillé gratuit",
        "Réparation par mécanicien certifié",
        "Garantie pièces et main d'œuvre"
      ]
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    included: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.description) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const includedArray = formData.included.split('\n').filter(item => item.trim() !== '');
    const price = formData.price === "Sur devis" ? "Sur devis" : parseFloat(formData.price) || 0;

    const serviceData: Service = {
      id: editingService?.id || Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: price,
      included: includedArray
    };

    if (editingService) {
      setServices(prev => prev.map(service => 
        service.id === editingService.id ? serviceData : service
      ));
      toast({
        title: "Service modifié",
        description: "Le service a été modifié avec succès."
      });
    } else {
      setServices(prev => [...prev, serviceData]);
      toast({
        title: "Service ajouté",
        description: "Le nouveau service a été ajouté avec succès."
      });
    }

    resetForm();
    setIsDialogOpen(false);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      description: service.description,
      price: service.price.toString(),
      included: service.included.join('\n')
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (serviceId: string) => {
    setServices(prev => prev.filter(service => service.id !== serviceId));
    toast({
      title: "Service supprimé",
      description: "Le service a été supprimé avec succès."
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      included: ""
    });
    setEditingService(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-navy">Gestion des Services</h1>
          <p className="text-gray-600">Gérez les services supplémentaires proposés aux clients</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-navy hover:bg-navy-light text-white">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingService ? "Modifier le service" : "Ajouter un nouveau service"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nom du service *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ex: Nettoyage du véhicule"
                />
              </div>
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Description du service"
                />
              </div>
              <div>
                <Label htmlFor="price">Prix</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="Ex: 35 ou Sur devis"
                />
              </div>
              <div>
                <Label htmlFor="included">Services inclus (un par ligne)</Label>
                <Textarea
                  id="included"
                  value={formData.included}
                  onChange={(e) => handleInputChange("included", e.target.value)}
                  placeholder="Service 1&#10;Service 2&#10;Service 3"
                  rows={4}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleDialogClose}>
                  Annuler
                </Button>
                <Button onClick={handleSubmit} className="bg-navy hover:bg-navy-light text-white">
                  {editingService ? "Modifier" : "Ajouter"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-navy">Services disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Services inclus</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                  <TableCell>
                    {typeof service.price === 'number' ? `${service.price}€` : service.price}
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      {service.included.slice(0, 2).map((item, index) => (
                        <div key={index} className="text-sm text-gray-600">• {item}</div>
                      ))}
                      {service.included.length > 2 && (
                        <div className="text-sm text-gray-500">
                          +{service.included.length - 2} autres...
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(service)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(service.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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

export default AdminServices;
