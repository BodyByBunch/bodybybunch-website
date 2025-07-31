import { Badge } from '@/components/ui/badge';

export function CertificationsSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Professional Certifications
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Badge className="text-lg px-6 py-3 bg-teal-600 text-white hover:bg-teal-700 transition-colors">
            NASM Certified Personal Trainer
          </Badge>
          <Badge className="text-lg px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 transition-colors">
            NASM Certified Nutrition Coach
          </Badge>
        </div>
      </div>
    </section>
  );
} 