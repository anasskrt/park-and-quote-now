
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { format, isSameDay } from "date-fns";
import { fr } from "date-fns/locale";
import { Car, Clock, CheckCircle } from "lucide-react";

// Données fictives pour les réservations avec véhicules
const mockBookings = [
  {
    id: "B001",
    clientName: "Jean Dupont",
    licensePlate: "AB-123-CD",
    carModel: "BMW X5",
    status: "entry", // entry = à récupérer, return = à rendre
    date: new Date("2024-06-10"),
    time: "14:30",
    location: "Aéroport Charles de Gaulle"
  },
  {
    id: "B002",
    clientName: "Marie Martin",
    licensePlate: "EF-456-GH",
    carModel: "Audi A4",
    status: "return",
    date: new Date("2024-06-10"),
    time: "16:00",
    location: "Gare Montparnasse"
  },
  {
    id: "B003",
    clientName: "Pierre Durand",
    licensePlate: "IJ-789-KL",
    carModel: "Mercedes C-Class",
    status: "entry",
    date: new Date("2024-06-12"),
    time: "09:00",
    location: "Aéroport Orly"
  },
  {
    id: "B004",
    clientName: "Sophie Bernard",
    licensePlate: "MN-012-OP",
    carModel: "Peugeot 308",
    status: "return",
    date: new Date("2024-06-12"),
    time: "18:30",
    location: "Gare du Nord"
  },
  {
    id: "B005",
    clientName: "Lucas Moreau",
    licensePlate: "QR-345-ST",
    carModel: "Renault Clio",
    status: "entry",
    date: new Date("2024-06-15"),
    time: "11:15",
    location: "Aéroport Charles de Gaulle"
  }
];

const AdminCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [bookings] = useState(mockBookings);

  const getBookingsForDate = (date: Date) => {
    return bookings.filter(booking => isSameDay(booking.date, date));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "entry":
        return (
          <Badge className="bg-orange-100 text-orange-800 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            À récupérer
          </Badge>
        );
      case "return":
        return (
          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            À rendre
          </Badge>
        );
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const getDaysWithBookings = () => {
    return bookings.map(booking => booking.date);
  };

  const selectedDateBookings = selectedDate ? getBookingsForDate(selectedDate) : [];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy mb-2">Planning des Véhicules</h1>
        <p className="text-gray-600">Visualisez les entrées et sorties de véhicules</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendrier */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              Calendrier des Réservations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              modifiers={{
                hasBooking: getDaysWithBookings()
              }}
              modifiersStyles={{
                hasBooking: {
                  backgroundColor: '#FEF3C7',
                  fontWeight: 'bold'
                }
              }}
            />
            <div className="mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-200 rounded"></div>
                <span>Jours avec réservations</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Détails du jour sélectionné */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionnez une date"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateBookings.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                Aucune réservation ce jour
              </p>
            ) : (
              <div className="space-y-3">
                {selectedDateBookings.map((booking) => (
                  <div key={booking.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-navy">{booking.licensePlate}</div>
                        <div className="text-sm text-gray-600">{booking.carModel}</div>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>{booking.clientName}</div>
                      <div>{booking.time} - {booking.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Résumé du jour */}
      {selectedDateBookings.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Résumé de la journée</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {selectedDateBookings.filter(b => b.status === 'entry').length}
                </div>
                <div className="text-sm text-orange-600">Véhicules à récupérer</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {selectedDateBookings.filter(b => b.status === 'return').length}
                </div>
                <div className="text-sm text-green-600">Véhicules à rendre</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminCalendar;
