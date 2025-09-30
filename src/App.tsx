import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceCarrelage from "./pages/ServiceCarrelage";
import ServiceClimatisation from "./pages/ServiceClimatisation";
import ServiceElectricite from "./pages/ServiceElectricite";
import ServiceMaconnerie from "./pages/ServiceMaconnerie";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service/carrelage" element={<ServiceCarrelage />} />
          <Route path="/service/climatisation" element={<ServiceClimatisation />} />
          <Route path="/service/electricite" element={<ServiceElectricite />} />
          <Route path="/service/maconnerie" element={<ServiceMaconnerie />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
