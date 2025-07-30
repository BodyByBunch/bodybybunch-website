import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
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
          <Button size="lg" className="text-lg px-8 py-4 bg-orange-600 text-white hover:bg-orange-700 border-0">
            <Phone className="mr-2 h-5 w-5" />
            Call (512) 818-4281
          </Button>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 