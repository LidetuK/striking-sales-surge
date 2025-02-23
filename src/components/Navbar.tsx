import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src={isScrolled 
                ? "/lovable-uploads/Resk-Que-Logo-Clear-Back-black-1.png" 
                : "/lovable-uploads/Resk-Que-Logo-Clear-Back-white-1.png"} 
              alt="Logo" 
              className="h-14 transition-all duration-300"
            />
          </div>
          <Button 
            className="bg-primary hover:bg-primary-hover text-white transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://reskque.com/", "_blank")}
          >
            Explore More
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
