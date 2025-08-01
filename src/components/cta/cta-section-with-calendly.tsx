import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Phone, Calendar } from 'lucide-react';

export function CTASectionWithCalendly() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Transformation?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Join hundreds of clients who have transformed their lives with Body By Bunch. 
          Your success story could be next!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-brand-sky text-white hover:bg-primary border-0">
            <Phone className="mr-2 h-5 w-5" />
            Call (512) 818-4281
          </Button>
          {/* Replace the old contact link with Calendly integration */}
          <CalendlyButton
            calendlyUrl="https://calendly.com/your-calendly-url"
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}