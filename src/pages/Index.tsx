
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import AboutSection from '@/components/AboutSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductGallery from '@/components/ProductGallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    const observer = useScrollReveal();
    
    return () => {
      // Cleanup if needed
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <AboutSection />
      <FeaturedProducts />
      <ProductGallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
