
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  placeholderClassName,
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setImageSrc(src);
    };
  }, [src]);
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      {!isLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-100 animate-pulse-subtle",
            placeholderClassName
          )}
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
