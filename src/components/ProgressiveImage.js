import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ 
  src, 
  srcSet, 
  sizes, 
  alt, 
  className, 
  placeholderColor = '#f0f0f0',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholderColor);

  useEffect(() => {
    // Start loading the image
    const img = new Image();
    img.src = src;
    
    if (srcSet) {
      img.srcset = srcSet;
    }
    
    if (sizes) {
      img.sizes = sizes;
    }
    
    img.onload = () => {
      setIsLoading(false);
      setCurrentSrc(src);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      // If the optimized image fails, try the original
      if (src !== props.fallbackSrc) {
        setCurrentSrc(props.fallbackSrc || src);
      }
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, srcSet, sizes, props.fallbackSrc]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        backgroundColor: isLoading ? placeholderColor : 'transparent',
        transition: 'background-color 0.3s ease-in-out'
      }}
    >
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        srcSet={srcSet}
        sizes={sizes}
        {...props}
      />
    </div>
  );
};

export default ProgressiveImage; 