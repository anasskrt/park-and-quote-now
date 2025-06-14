
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

interface Tarif {
  id: number;
  prixJournalier: number;
  actif: boolean;
  createdAt: string;
  updatedAt: string;
}

const AdminPricing = () => {
  const { toast } = useToast();
  const [tarifs, setTarifs] = useState<Tarif[]>([
    {
      id: 1,
      prixJournalier: 25.0,
      actif: true,
      createdAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-15T10:00:00Z"
    },
    {
      id: 2,
      prixJournalier: 35.0,
      actif: true,
      createdAt: "2024-01-20T14:30:00Z",
      updatedAt: "2024-01-20T14:30:00Z"
    },
    {
      id: 3,
      prixJournalier: 50.0,
      actif: false,
      createdAt: "2024-02-01T09:15:00Z",
      updatedAt: "2024-02-10T16:45:00Z"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTarif, setEditingTarif] = useState<Tarif | null>(null);
  const [formData, setFormData] = useState({
    prixJournalier: "",
    actif: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.prixJournalier) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir le prix journalier.",
        variant: "destructive"
      });
      return;
    }

    const price = parseFloat(formData.prixJournalier);

    if (isNaN(price) || price <= 0) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un prix valide.",
        variant: "destructive"
      });
      return;
    }

    const now = new Date().toISOString();

    if (editingTarif) {
      const updatedTarif: Tarif = {
        ...editingTarif,
        prixJournalier: price,
        actif: formData.actif,
        updatedAt: now
      };

      setTarifs(prev => prev.map(tarif => 
        tarif.id === editingTarif.id ? updatedTarif : tarif
      ));
      
      toast({
        title: "Tarif modifié",
        description: "Le tarif a été modifié avec succès."
      });
    } else {
      const newTarif: Tarif = {
        id: Math.max(...tarifs.map(t => t.id), 0) + 1,
        prixJournalier: price,
        actif: formData.actif,
        createdAt: now,
        updatedAt: now
      };

      setTarifs(prev => [...prev, newTarif]);
      
      toast({
        title: "Tarif ajouté",
        description: "Le nouveau tarif a été ajouté avec succès."
      });
    }

    resetForm();
    setIsDialogOpen(false);
  };

  const handleEdit = (tarif: Tarif) => {
    setEditingTarif(tarif);
    setFormData({
      prixJournalier: tarif.prixJournalier.toString(),
      actif: tarif.actif
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (tarifId: number) => {
    setTarifs(prev => prev.filter(tarif => tarif.id !== tarifId));
    toast({
      title: "Tarif supprimé",
      description: "Le tarif a été supprimé avec succès."
    });
  };

  const resetForm = () => {
    setFormData({
      prixJournalier: "",
      actif: true
    });
    setEditingTarif(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingTarif ? "Modifier le tarif" : "Ajouter un nouveau tarif"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="prixJournalier">Prix journalier (€) *</Label>
                <Input
                  id="prixJournalier"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.prixJournalier}
                  onChange={(e) => handleInputChange("prixJournalier", e.target.value)}
                  placeholder="35.00"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="actif"
                  checked={formData.actif}
                  onCheckedChange={(checked) => handleInputChange("actif", checked as boolean)}
                />
                <Label htmlFor="actif">Tarif actif</Label>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleDialogClose}>
                  Annuler
                </Button>
                <Button onClick={handleSubmit} className="bg-navy hover:bg-navy-light text-white">
                  {editingTarif ? "Modifier" : "Ajouter"}
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
                <TableHead>ID</TableHead>
                <TableHead>Prix journalier</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Créé le</TableHead>
                <TableHead>Modifié le</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tarifs.map((tarif) => (
                <TableRow key={tarif.id}>
                  <TableCell className="font-medium">{tarif.id}</TableCell>
                  <TableCell className="font-bold text-navy">{tarif.prixJournalier.toFixed(2)}€</TableCell>
                  <TableCell>
                    {tarif.actif ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Actif
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Inactif
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {formatDate(tarif.createdAt)}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {formatDate(tarif.updatedAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(tarif)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(tarif.id)}
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
