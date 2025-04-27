
import { Phone } from 'lucide-react';
import LazyImage from './LazyImage';
import { useIsMobile } from '@/hooks/use-mobile';

const featuredProducts = [
  {
    id: 1,
    name: "Geek Bar Pulse 25k PUFFS",
    price: "$24.500",
    flavor: "Sabores Consultar",
    image: "./vapes/GeekBarPulse25k.webp"
  },
  {
    id: 2,
    name: "Elf Bar Ice King 40k PUFFS",
    price: "$26.000",
    flavor: "Sabores Consultar",
    image: "./vapes/Elfbariceking40k.jpg"
  },
  {
    id: 3,
    name: "Lost Mary Mixer 30k PUFFS",
    price: "$25.000",
    flavor: "Sabores Consultar",
    image: "./vapes/LostMaryMixer30k.png"
  },
  {
    id: 4,
    name: "Ignite Gold 25k PUFFS",
    price: "$22.000",
    flavor: "Sabores Consultar",
    image: "./vapes/IgniteGold25k.jpg"
  }
];

const FeaturedProducts = () => {
  const isMobile = useIsMobile();
  
  const handleWhatsAppClick = (productName: string) => {
    const message = `Hola, estoy interesado en el producto: ${productName}`;
    const whatsappUrl = `https://wa.me/+5491165451771?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="productos-destacados" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Lo mejor de nuestra selección
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800">
            Productos destacados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group fade-in-view visible glass-card rounded-xl overflow-hidden hover:shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
                <LazyImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-164 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{product.flavor}</p>
                <p className="text-primary font-bold mb-4">{product.price}</p>
                <button
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone size={18} />
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#productos" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Ver todos los productos
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
