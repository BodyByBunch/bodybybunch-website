import CircularGallery from '@/components/ui/CircularGallery';
import RollingGallery from '@/components/ui/RollingGallery';
import { testimonialsData, type Testimonial } from '@/data';

interface TestimonialSliderProps {
  variant?: 'circular' | 'rolling';
  testimonials?: Testimonial[];
}

export function TestimonialsSlider({ 
  variant = 'circular',
  testimonials = testimonialsData 
}: TestimonialSliderProps) {
  
  if (variant === 'circular') {
    // Convert testimonials to the format expected by CircularGallery
    const galleryItems = testimonials.map(testimonial => ({
      image: `/images/testimonials/bodybybunch_client_${testimonial.id}.jpg`,
      text: '' // Remove text overlay for now since we don't have actual client names/data
    }));

    return (
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
          items={galleryItems}
          bend={1} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
        />
      </div>
    );
  }

  if (variant === 'rolling') {
    // Convert testimonials to the format expected by RollingGallery
    // Create a varied sequence of images for better rolling effect
    const galleryImages: string[] = [];
    
    // Add all 9 images in sequence
    for (let i = 0; i < 3; i++) { // Repeat 3 times for smooth rolling
      testimonials.forEach((testimonial, index) => {
        galleryImages.push(`/images/testimonials/bodybybunch_client_${testimonial.id}.jpg`);
      });
    }

    return (
      <div style={{ height: '400px', position: 'relative' }}>
        <RollingGallery 
          images={galleryImages}
          autoplay={true} 
          pauseOnHover={true}
        />
      </div>
    );
  }

  return null;
}

