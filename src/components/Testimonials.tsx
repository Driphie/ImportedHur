
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Martina D.",
    position: "Cliente frecuente",
    quote: "Gracias por la atencion y la rapidez",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  },
  {
    id: 2,
    name: "Maru N.",
    position: "Cliente desde 2024",
    quote: "Les recomiendo la pagina porque la rompe con los precios y la atenciòn",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  },
  {
    id: 3,
    name: "Adrian C",
    position: "Cliente desde 2025",
    quote: "Los recomiendo porque tienen muchisimos modelos y precios super accesibles",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Experiencias de clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para 
            obtener los mejores vaporizadores del mercado.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
            >
              {testimonialData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 border border-gray-100">
                    <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    
                    <blockquote className="text-gray-700 text-lg italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
