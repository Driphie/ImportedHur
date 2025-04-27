
import { useState } from 'react';
import { Facebook, Instagram, Twitter, Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor complete todos los campos");
      return;
    }
    
    // Here you would normally send the form data to your backend
    toast.success("Mensaje enviado con éxito");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">IMPORTED HUR</h3>
            <p className="text-gray-400 mb-6">
            </p>
            <div className="flex space-x-2">
              <a href="https://www.instagram.com/importedhur/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#quienes-somos" className="text-gray-400 hover:text-white transition-colors">Quiénes somos</a>
              </li>
              <li>
                <a href="#logistica" className="text-gray-400 hover:text-white transition-colors">Logística de envío</a>
              </li>
              <li>
                <a href="#productos-destacados" className="text-gray-400 hover:text-white transition-colors">Productos destacados</a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-white transition-colors">Vista de productos</a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+541178473263</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@importedhur.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Tres De Febrero</span>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} IMPORTED HUR. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de privacidad</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
