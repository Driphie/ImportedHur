
import { useState } from 'react';
import { Phone } from 'lucide-react';
import LazyImage from './LazyImage';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Geek Bar Pulse 25k PUFFS",
    price: "$24.500",
    flavor: "Sabores Consultar",
    brand: "Geek Bar",
    image: "./vapes/GeekBarPulse25k.webp",
  },
  {
    id: 2,
    name: "Lost Mary 20k PUFFS",
    price: "$20.000",
    flavor: "Sabores Consultar",
    brand: "Lost Mary",
    image: "./vapes/LostMary.png"
  },
  {
    id: 3,
    name: "Elf Bar Te 30k PUFFS",
    price: "$26.000",
    flavor: "Sabores Consultar",
    brand: "Elf Bar",
    image: "./vapes/ElfBarte30k.jpg"
  },
  {
    id: 4,
    name: "Ignite Gold 25k PUFFS",
    price: "$22.000",
    flavor: "Sabores Consultar",
    brand: "Ignite",
    image: "./vapes/IgniteGold25k.jpg"
  },
  {
    id: 5,
    name: "Geek Bar Sky 25k PUFFS",
    price: "$23.000",
    flavor: "Sabores Consultar",
    brand: "Geek Bar",
    image: "./vapes/GeekBarSky25K.jpeg"
  },
  {
    id: 6,
    name: "Lost Mary Mixer 30k PUFFS",
    price: "$25.000",
    flavor: "Sabores Consultar",
    brand: "Lost Mary",
    image: "./vapes/LostMaryMixer30k.png"
  },
  {
    id: 7,
    name: "Elf Bar Ice King 40k PUFFS",
    price: "$26.000",
    flavor: "Sabores Consultar",
    brand: "Elf Bar",
    image: "./vapes/Elfbariceking40k.jpg"
  },
  {
    id: 8,
    name: "Ignite 15k PUFFS",
    price: "$18.000",
    flavor: "Sabores Consultar",
    brand: "Ignite",
    image: "./vapes/ignite15k.webp"
  },
  {
    id: 9,
    name: "Ignite Rose 25k PUFFS",
    price: "$22.000",
    flavor: "Sabores Consultar",
    brand: "Ignite",
    image: "./vapes/igniterose25k.png"
  }
];

// Get unique brands for filter
const brands = [...new Set(allProducts.map(product => product.brand))];

const ProductGallery = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const filteredProducts = selectedBrand 
    ? allProducts.filter(product => product.brand === selectedBrand)
    : allProducts;
    
  const handleWhatsAppClick = (productName: string) => {
    const message = `Hola, estoy interesado en el producto: ${productName}`;
    const whatsappUrl = `https://wa.me/+5491178473263?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Descubre nuestra selección
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-8">
            Catálogo de productos
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            <button
              onClick={() => setSelectedBrand(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedBrand === null 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Todos
            </button>
            
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedBrand === brand 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="fade-in-view visible glass-card rounded-xl overflow-hidden hover:shadow-lg group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
                <LazyImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-124 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-2">
                  {product.brand}
                </span>
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
      </div>
    </section>
  );
};

export default ProductGallery;
