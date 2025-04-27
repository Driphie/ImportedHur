
import LazyImage from './LazyImage';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="./2.webp"
          alt="IMPORTED HUR Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary-foreground rounded-full bg-primary/80 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Bienvenido a
          </span>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <span className="text-gray">IMPORTED HUR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            Mejores Precios De La Zona
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a 
              href="#productos-destacados" 
              className="px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Ver productos
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-3 rounded-md bg-white text-gray-800 font-medium hover:bg-gray-50 border border-gray-200 transition-all transform hover:-translate-y-1 shadow hover:shadow-md"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#quienes-somos" className="block p-2">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
