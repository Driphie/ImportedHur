
import { Truck, Clock, MapPin, Package, Info, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Us Section - With new design and layout */}
          <div className="fade-in-view">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                <Info className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
                Quiénes somos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 font-light">
                  En <span className="font-medium">IMPORTED HUR</span> nacimos en 2024 con una misión clara: traer a Argentina los vaporizadores más innovadores y de mayor calidad del mercado.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                Desde nuestros inicios, nos enfocamos en mantenernos siempre actualizados, seleccionando cuidadosamente los últimos lanzamientos para ofrecerte productos de primera línea.
                Creemos que la experiencia de compra debe ser tan buena como el producto que recibís. Por eso, trabajamos día a día para destacarnos no solo en la calidad de nuestros vaporizadores,
                sino también en la atención personalizada, la velocidad de nuestros envíos y el servicio postventa.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs text-gray-700 font-medium">Productos de primera calidad</p>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs text-gray-700 font-medium">Innovación constante</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">Servicio personalizado</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logistics Section - With new title styling */}
          <div id="logistica" className="fade-in-view">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
                Logística de envío
              </h2>
            </div>
            
            <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-md font-light">
              En IMPORTED HUR entendemos la importancia de recibir sus productos de manera 
              rápida y segura. Por eso, contamos con un sistema de logística eficiente 
              que garantiza entregas puntuales en todo el país.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                <div className="mb-3 text-primary flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-800">Envío Nacional</h3>
                </div>
                <p className="text-gray-600 text-xs font-light">
                  Realizamos envíos a todo el país con seguimiento en tiempo real 
                  para que puedas monitorear tu pedido.
                </p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                <div className="mb-3 text-primary flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-800">Tiempos de entrega</h3>
                </div>
                <p className="text-gray-600 text-xs font-light">
                  24-48 horas en zonas urbanas y hasta 72 horas en zonas remotas.
                  Siempre priorizamos la rapidez.
                </p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                <div className="mb-3 text-primary flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-800">Puntos De Encuentro</h3>
                </div>
                <p className="text-gray-600 text-xs font-light">
                  Puedes retirar tu pedido en nuestros puntos de encuentro de manera gratuita.
                </p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                <div className="mb-3 text-primary flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-800">Moto Mensajeria 24/7</h3>
                </div>
                <p className="text-gray-600 text-xs font-light">
                  Entregamos nuestros productos via Uber o Didimoto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
