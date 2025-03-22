import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookPopup from "@/components/ui/BookPopup"; // Import the popup

const queryClient = new QueryClient();

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");

    const handleScroll = () => {
      if (!popupShown && window.scrollY > 300) {
        setPopupOpen(true);
        sessionStorage.setItem("popupShown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    if (!popupShown) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Set basename to your subfolder */}
        <BrowserRouter basename="/empowerment/self-development-guide/elevate-higher-the-book">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Show popup when user scrolls down */}
        <BookPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
