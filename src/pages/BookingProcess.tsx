
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSelection from "@/components/ServiceSelection";
import UserInfoForm from "@/components/UserInfoForm";
import RulesValidation from "@/components/RulesValidation";
import PaymentForm from "@/components/PaymentForm";

type Step = "services" | "userinfo" | "rules" | "payment";

const BookingProcess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state?.bookingDetails;
  
  const [currentStep, setCurrentStep] = useState<Step>("services");
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [totalServicePrice, setTotalServicePrice] = useState(0);
  const [userInfo, setUserInfo] = useState<any>(null);

  // Redirect if no booking details
  if (!bookingDetails) {
    navigate("/");
    return null;
  }

  const handleServiceSelection = (services: any[], totalPrice: number) => {
    setSelectedServices(services);
    setTotalServicePrice(totalPrice);
    setCurrentStep("userinfo");
  };

  const handleUserInfoSubmit = (userInfo: any) => {
    setUserInfo(userInfo);
    setCurrentStep("rules");
  };

  const handleRulesValidation = () => {
    setCurrentStep("payment");
  };

  const calculateDays = () => {
    if (!bookingDetails.departureDate || !bookingDetails.returnDate) {
      return 1;
    }
    const departure = new Date(bookingDetails.departureDate);
    const returnDate = new Date(bookingDetails.returnDate);
    const diffTime = Math.abs(returnDate.getTime() - departure.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const calculateTotalAmount = () => {
    const days = calculateDays();
    return totalServicePrice * days;
  };

  const stepTitles = {
    services: "Choisissez vos services",
    userinfo: "Vos informations",
    rules: "Validation des règles",
    payment: "Finaliser votre réservation"
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "services":
        return (
          <ServiceSelection
            onNext={handleServiceSelection}
            onBack={() => navigate("/")}
          />
        );

      case "userinfo":
        return (
          <UserInfoForm
            onNext={handleUserInfoSubmit}
            onBack={() => setCurrentStep("services")}
          />
        );

      case "rules":
        return (
          <RulesValidation
            onNext={handleRulesValidation}
            onBack={() => setCurrentStep("userinfo")}
          />
        );

      case "payment":
        return (
          <PaymentForm
            totalAmount={calculateTotalAmount()}
            services={selectedServices}
            userInfo={userInfo}
            bookingDetails={bookingDetails}
            onBack={() => setCurrentStep("rules")}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Progress indicator */}
          <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Étape actuelle:</span>
              <span className="text-gold font-bold">{stepTitles[currentStep]}</span>
            </div>
            <div className="flex space-x-2">
              {["services", "userinfo", "rules", "payment"].map((step, index) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded ${
                    ["services", "userinfo", "rules", "payment"].indexOf(currentStep) >= index
                      ? "bg-gold"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step content */}
          {renderStepContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingProcess;
