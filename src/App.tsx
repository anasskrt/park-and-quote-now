import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import QuoteValidation from "./pages/QuoteValidation";
import BookingProcess from "./pages/BookingProcess";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Admin from "./pages/Admin";
import AdminQuotes from "./pages/AdminQuotes";
import AdminUsers from "./pages/AdminUsers";
import AdminCalendar from "./pages/AdminCalendar";
import AdminServices from "./pages/AdminServices";
import PaymentFailed from "./pages/PaymentFailed";
import StripeSuccess from "./pages/StripeSuccess";
import NotFound from "./pages/NotFound";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import AdminPricing from "./pages/AdminPricing";
import Rules from "./pages/Rules";
import ResetPassword from "./pages/ResetPassword";
import AdminTransports from "./pages/AdminTransports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quote-validation" element={<QuoteValidation />} />
          <Route path="/booking-process" element={<BookingProcess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/stripe-success" element={<StripeSuccess />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="quotes" element={<AdminQuotes />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="calendar" element={<AdminCalendar />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="pricing" element={<AdminPricing />} />
            <Route path="transports" element={<AdminTransports />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
