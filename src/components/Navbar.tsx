
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-10 w-auto"
              src="/lovable-uploads/5d31bc73-4917-4fe5-b8af-861876419c6e.png"
              alt="Elevate Higher"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-800 hover:text-primary px-3 py-2 font-medium">Home</a>
              <a href="#benefits" className="text-gray-800 hover:text-primary px-3 py-2 font-medium">Benefits</a>
              <a href="#testimonials" className="text-gray-800 hover:text-primary px-3 py-2 font-medium">Testimonials</a>
              <a href="#order" className="text-gray-800 hover:text-primary px-3 py-2 font-medium">Order</a>
              <a href="#faq" className="text-gray-800 hover:text-primary px-3 py-2 font-medium">FAQ</a>
              <Button 
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                className="ml-4 bg-red-600 hover:bg-red-700 text-white"
              >
                Get Your Copy
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a href="#" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#benefits" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium">Benefits</a>
            <a href="#testimonials" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium">Testimonials</a>
            <a href="#order" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium">Order</a>
            <a href="#faq" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium">FAQ</a>
            <div className="mt-4 px-3">
              <Button 
                onClick={() => {
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Get Your Copy
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
