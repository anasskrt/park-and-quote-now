
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

interface PricingTier {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  features: string[];
  isPopular: boolean;
}

const AdminPricing = () => {
  const { toast } = useToast();
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([
    {
      id: "basic",
      name: "Basique",
      description: "Stationnement simple et sécurisé",
      pricePerDay: 25,
      features: [
        "Stationnement sécurisé",
        "Surveillance 24h/24",
        "Navette aéroport",
        "Assurance véhicule"
      ],
      isPopular: false
    },
    {
      id: "premium",
      name: "Premium",
      description: "Service complet avec options supplémentaires",
      pricePerDay: 35,
      features: [
        "Stationnement sécurisé",
        "Surveillance 24h/24", 
        "Navette aéroport prioritaire",
        "Assurance véhicule",
        "Nettoyage extérieur",
        "Contrôle technique gratuit"
      ],
      isPopular: true
    },
    {
      id: "luxury",
      name: "Luxe",
      description: "Service haut de gamme pour véhicules de prestige",
      pricePerDay: 50,
      features: [
        "Stationnement couvert premium",
        "Surveillance renforcée",
        "Navette aéroport VIP",
        "Assurance tous risques",
        "Nettoyage complet",
        "Entretien préventif",
        "Conciergerie automobile"
      ],
      isPopular: false
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTier, setEditingTier] = useState<PricingTier | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerDay: "",
    features: "",
    isPopular: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.description || !formData.pricePerDay) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const featuresArray = formData.features.split('\n').filter(feature => feature.trim() !== '');
    const price = parseFloat(formData.pricePerDay);

    if (isNaN(price) || price <= 0) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un prix valide.",
        variant: "destructive"
      });
      return;
    }

    const tierData: PricingTier = {
      id: editingTier?.id || Date.now().toString(),
      name: formData.name,
      description: formData.description,
      pricePerDay: price,
      features: featuresArray,
      isPopular: formData.isPopular
    };

    if (editingTier) {
      setPricingTiers(prev => prev.map(tier => 
        tier.id === editingTier.id ? tierData : tier
      ));
      toast({
        title: "Tarif modifié",
        description: "Le tarif a été modifié avec succès."
      });
    } else {
      setPricingTiers(prev => [...prev, tierData]);
      toast({
        title: "Tarif ajouté",
        description: "Le nouveau tarif a été ajouté avec succès."
      });
    }

    resetForm();
    setIsDialogOpen(false);
  };

  const handleEdit = (tier: PricingTier) => {
    setEditingTier(tier);
    setFormData({
      name: tier.name,
      description: tier.description,
      pricePerDay: tier.pricePerDay.toString(),
      features: tier.features.join('\n'),
      isPopular: tier.isPopular
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (tierId: string) => {
    setPricingTiers(prev => prev.filter(tier => tier.id !== tierId));
    toast({
      title: "Tarif supprimé",
      description: "Le tarif a été supprimé avec succès."
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      pricePerDay: "",
      features: "",
      isPopular: false
    });
    setEditingTier(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-navy">Gestion des Prix Journaliers</h1>
          <p className="text-gray-600">Gérez les différents tarifs de stationnement proposés aux clients</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-navy hover:bg-navy-light text-white">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un tarif
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingTier ? "Modifier le tarif" : "Ajouter un nouveau tarif"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nom du tarif *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ex: Premium"
                />
              </div>
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Description du tarif"
                />
              </div>
              <div>
                <Label htmlFor="pricePerDay">Prix par jour (€) *</Label>
                <Input
                  id="pricePerDay"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.pricePerDay}
                  onChange={(e) => handleInputChange("pricePerDay", e.target.value)}
                  placeholder="35"
                />
              </div>
              <div>
                <Label htmlFor="features">Services inclus (un par ligne)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) => handleInputChange("features", e.target.value)}
                  placeholder="Service 1&#10;Service 2&#10;Service 3"
                  rows={4}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPopular"
                  checked={formData.isPopular}
                  onChange={(e) => handleInputChange("isPopular", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="isPopular">Marquer comme populaire</Label>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleDialogClose}>
                  Annuler
                </Button>
                <Button onClick={handleSubmit} className="bg-navy hover:bg-navy-light text-white">
                  {editingTier ? "Modifier" : "Ajouter"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-navy">Tarifs disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Prix/jour</TableHead>
                <TableHead>Services inclus</TableHead>
                <TableHead>Populaire</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingTiers.map((tier) => (
                <TableRow key={tier.id}>
                  <TableCell className="font-medium">{tier.name}</TableCell>
                  <TableCell className="max-w-xs truncate">{tier.description}</TableCell>
                  <TableCell className="font-bold text-navy">{tier.pricePerDay}€</TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      {tier.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600">• {feature}</div>
                      ))}
                      {tier.features.length > 2 && (
                        <div className="text-sm text-gray-500">
                          +{tier.features.length - 2} autres...
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {tier.isPopular && (
                      <span className="bg-gold text-white text-xs px-2 py-1 rounded-full">
                        Populaire
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(tier)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(tier.id)}
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

export default AdminPricing;
