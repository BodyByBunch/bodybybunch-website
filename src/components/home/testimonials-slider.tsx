import CircularGallery from '@/components/ui/CircularGallery';
import RollingGallery from '@/components/ui/RollingGallery';

interface TestimonialSliderProps {
  variant?: 'circular' | 'rolling';
  testimonials?: Array<{
    id: string;
    name: string;
    achievement: string;
    quote: string;
    rating: number;
  }>;
}

export function TestimonialsSlider({ 
  variant = 'circular',
  testimonials = defaultTestimonials 
}: TestimonialSliderProps) {
  
  if (variant === 'circular') {
    // Convert testimonials to the format expected by CircularGallery
    const galleryItems = testimonials.map(testimonial => ({
      image: `https://picsum.photos/seed/${testimonial.id}/800/600?grayscale`, // Placeholder images for now
      text: `${testimonial.name} - ${testimonial.achievement}`
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
    // Duplicate testimonials to have more faces for better rolling effect
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
    const galleryImages = duplicatedTestimonials.map((testimonial, index) => 
      `https://picsum.photos/seed/${testimonial.id}-${index}/800/600?grayscale`
    );

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

// Default testimonials data
const defaultTestimonials = [
  {
    id: '1',
    name: 'Sarah M.',
    achievement: '-45 lbs in 6 months',
    quote: 'Lane completely changed my life! I lost 45 pounds and gained so much confidence. Her nutrition coaching was the missing piece I needed.',
    rating: 5
  },
  {
    id: '2', 
    name: 'Mike R.',
    achievement: '+20 lbs muscle',
    quote: 'Working with Lane has been incredible. I gained 20 pounds of muscle and finally achieved the physique I\'ve always wanted.',
    rating: 5
  },
  {
    id: '3',
    name: 'Jennifer L.',
    achievement: '-30 lbs in 4 months', 
    quote: 'Lane\'s accountability and support made all the difference. I lost 30 pounds and learned how to maintain a healthy lifestyle.',
    rating: 5
  }
];