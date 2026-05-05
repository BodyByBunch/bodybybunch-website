'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/data/marketing';
import { headingStyles, mediaStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Service = (typeof SERVICES)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden bg-surface-raised text-foreground border-border hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-[400px] md:h-[480px] p-0',
        service.shadowClassName
      )}
    >
      <div className={cn('relative h-48 md:h-64 transition-all duration-300 overflow-hidden', mediaStyles.placeholder)}>
        <Image
          src={service.image}
          alt={service.alt}
          width={400}
          height={192}
          className="object-cover w-full h-full"
        />
        <div className={cn('absolute inset-0', mediaStyles.overlay)} />
      </div>

      <div className="flex flex-col min-h-[200px] md:min-h-[220px] transition-all duration-300 p-4 md:p-6">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-xl md:text-2xl text-foreground">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className={sectionStyles.strong}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(headingStyles.strongSectionTitle, 'mb-4')}>
            Fitness. Nutrition. Accountability.
          </h2>
          <p className={headingStyles.strongSectionLead}>
            Learn how to live a joyful, balanced lifestyle with personalized coaching from Lane Bunch.
          </p>
        </div>

        {/* Services Grid - Single column on mobile, 2x2 on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.title}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
