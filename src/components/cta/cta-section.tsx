'use client';

import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join hundreds of clients who have transformed their lives with Body By Bunch. 
            Your success story could be next!
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CalendlyButton
            calendlyUrl="https://calendly.com/bodybybunch"
            size="default"
            className="px-8 py-4 bg-brand-sky text-white hover:bg-primary border-0"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </CalendlyButton>
          <CalendlyButton
            calendlyUrl="https://calendly.com/bodybybunch"
            variant="outline"
            size="default"
            className="px-8 py-4 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book a Call
          </CalendlyButton>
        </motion.div>
      </div>
    </section>
  );
} 