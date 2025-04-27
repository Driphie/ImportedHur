const LogoCarousel = () => {
  // Sample logos - replace with actual brand logos
  const logos = [
    { id: 1, name: 'Brand 1', imgUrl: './ELFBAR2.png' },
    { id: 2, name: 'Brand 2', imgUrl: './GEEKBAR.webp' },
    { id: 3, name: 'Brand 3', imgUrl: './IGNITE.webp' },
    { id: 4, name: 'Brand 4', imgUrl: './LOSTMARY.png' },
  ];
  
  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-center text-xl text-gray-500 font-medium mb-8">
          Nuestras marcas asociadas
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="inline-flex items-center justify-center min-w-[200px] mx-8"
              >
                <img 
                  src={logo.imgUrl} 
                  alt={logo.name} 
                  className="h-15 md:h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
