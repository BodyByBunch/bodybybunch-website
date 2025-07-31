import Image from 'next/image';

export function WhySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Body By Bunch?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every fitness journey is unique. Here's why clients choose our personalized approach 
            over generic programs and restrictive meal plans.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Value Prop 1: Personalized Approach */}
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                You Are Not Like Anyone Else
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is the most important part: <strong>you are unique</strong>. Your goals, lifestyle, 
                challenges, and needs are nothing like anyone else's. That's why I work with YOU specifically, 
                creating customized programs that fit your life, not forcing your life to fit a generic plan.
              </p>
            </div>
          </div>

          {/* Value Prop 2: Education Over Restriction */}
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-right flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Education, Not Restriction
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Forget restrictive meal plans and unsustainable diets. As a certified nutrition coach, 
                I educate you on how to live a <strong>joyful, balanced lifestyle</strong>. You'll learn 
                to make informed choices that fuel your body and support your goals long-term.
              </p>
            </div>
          </div>

          {/* Value Prop 3: Always Available Support */}
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Support When You Need It Most
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm available to all my clients at any time - not just during scheduled sessions. 
                Whether you have questions, need motivation, or want to celebrate a win, 
                <strong> I'm here for you</strong>. This ongoing support makes all the difference 
                in building lasting, healthy habits.
              </p>
            </div>
          </div>

          {/* Value Prop 4: Proven Expertise */}
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-right flex-1 max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Certified Expertise You Can Trust
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With NASM certifications in both personal training and nutrition coaching, 
                you're getting evidence-based guidance from someone who understands the science 
                behind fitness and nutrition. <strong>Your success is built on proven methods</strong>, 
                not trendy fads.
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
            <a 
              href="tel:5128184281" 
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Call (512) 818-4281
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center px-6 py-3 border border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
            >
              Learn More About Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 