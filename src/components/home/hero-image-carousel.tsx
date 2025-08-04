'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Award, MapPin, Heart } from 'lucide-react';

interface HeroImageCarouselProps {
  images: string[];
  showBadges?: boolean;
  className?: string;
}

export function HeroImageCarousel({ 
  images, 
  showBadges = true, 
  className = "relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl" 
}: HeroImageCarouselProps) {
  // Debug: Log the images array
  console.log('HeroImageCarousel images:', images);

  // State for current image index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // If no images, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div className={className}>
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <p className="text-muted-foreground">No images available</p>
        </div>
      </div>
    );
  }

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      {/* Current Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`Hero image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            console.error('Image failed to load:', images[currentIndex], e);
          }}
          onLoad={() => {
            console.log('Image loaded successfully:', images[currentIndex]);
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>



      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Stats Cards - Only show if showBadges is true */}
      {showBadges && (
        <>
          <div className="hidden lg:block absolute top-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border">
                <Award className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Clients Transformed</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-border z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border">
                <MapPin className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">San Antonio, TX</p>
                <p className="text-sm text-muted-foreground">Local & Online</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-border z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center border border-border">
                <Heart className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">5+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 