'use client';

import Image from 'next/image';
import { CalendlyButton } from '@/components/ui/calendly-button';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export function WhySection() {
  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="space-y-2 mb-6">
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Body By Bunch?
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every fitness journey is unique. Here's why clients choose our
            personalized approach over generic programs and restrictive meal
            plans.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Value Prop 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/why/why_img_1.jpeg"
                  alt="Personalized training approach"
                  width={256}
                  height={256}
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1 max-w-lg">
              <div className="w-8 h-1 bg-brand-orange-light mb-3 mx-auto md:mx-0"></div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                You Are Not Like Anyone Else
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is the most important part:{' '}
                <strong className="text-brand-sky">you are unique</strong>. Your
                goals, lifestyle, challenges, and needs are nothing like anyone
                else's. That's why I work with YOU specifically, creating
                customized programs that fit your life, not forcing your life to
                fit a generic plan.
              </p>
            </div>
          </div>

          {/* Value Prop 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/why/why_img_2.jpeg"
                  alt="Nutrition education and coaching"
                  width={256}
                  height={256}
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-right flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Education, Not Restriction
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Forget restrictive meal plans and unsustainable diets. As a
                certified nutrition coach, I educate you on how to live a{' '}
                <strong className="text-brand-sky">joyful, balanced lifestyle</strong>
                . You'll learn to make informed choices that fuel your body and
                support your goals long-term.
              </p>
            </div>
          </div>

          {/* Value Prop 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/why/why_img_3.jpeg"
                  alt="Ongoing support and accountability"
                  width={256}
                  height={256}
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Support When You Need It Most
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm available to all my clients at any time - not just during
                scheduled sessions. Whether you have questions, need motivation,
                or want to celebrate a win,{' '}
                <strong className="text-brand-sky">I'm here for you</strong>.
                This ongoing support makes all the difference in building
                lasting, healthy habits.
              </p>
            </div>
          </div>

          {/* Value Prop 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/why/why_img_4.jpeg"
                  alt="NASM certified trainer expertise"
                  width={256}
                  height={256}
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-right flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Certified Expertise You Can Trust
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With ISSA certification in personal training and PN1 nutritionist
                credentials, you're getting evidence-based guidance from someone
                who understands the science behind fitness and nutrition.{' '}
                <strong className="text-brand-sky">
                  Your success is built on proven methods
                </strong>
                , not trendy fads.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-6">
            Ready to experience a truly personalized approach to fitness?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              calendlyUrl="https://calendly.com/bodybybunch"
              size="default"
              className="bg-brand-sky text-white hover:bg-primary"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </CalendlyButton>
            <Link href="#services">
              <Button
                variant="outline"
                size="default"
                className="border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white"
              >
                Learn More About Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
