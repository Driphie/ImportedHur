
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Quiénes somos", href: "#quienes-somos" },
  { name: "Logística de envío", href: "#logistica" },
  { name: "Productos destacados", href: "#productos-destacados" },
  { name: "Vista de productos", href: "#productos" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "blur-backdrop py-3 shadow-sm" : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="flex items-center">
              <span className="text-xl font-display font-bold text-gray-900">IMPORTED HUR</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="nav-link"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Completely redesigned */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 z-30 flex flex-col justify-center transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "visible" : "invisible"
          )}
        >
          {/* Overlay background */}
          <div 
            className={cn(
              "absolute inset-0 bg-black transition-opacity duration-300",
              mobileMenuOpen ? "opacity-50" : "opacity-0"
            )}
            onClick={closeMenu}
          />
          
          {/* Slide in menu */}
          <div 
            className={cn(
              "relative h-full max-w-[300px] w-4/5 bg-white transform transition-transform duration-300 flex flex-col shadow-xl",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-6 border-b">
              <span className="text-xl font-display font-bold text-gray-900">IMPORTED HUR</span>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-6 text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="p-6 border-t">
              <span className="text-sm text-gray-500">© 2023 Imported Hur</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
