import Image from 'next/image';

export function AboutStory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="space-y-2 mb-6">
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              My Story & Mission
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the journey that led to BodybyBunch and my commitment to helping others 
            achieve their fitness and nutrition goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Story 1: Education & Foundation */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/about/about_img_1.jpeg"
                  alt="Education and fitness foundation"
                  width={256}
                  height={256}
                  className="object-cover rounded-xl"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="text-center md:text-left flex-1 max-w-lg">
              <div className="w-8 h-1 bg-brand-orange-light mb-3 mx-auto md:mx-0"></div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Education & Foundation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 2018, I received my bachelor's degree from <strong>Texas State University</strong> with a focus in 
                exercise sports science and coaching. This educational foundation provided me with the scientific 
                knowledge and evidence-based approach that guides everything I do at BodybyBunch.
              </p>
            </div>
          </div>

          {/* Story 2: Industry Experience */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/about/about_img_2.jpeg"
                  alt="Fitness industry experience and roles"
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
                Diverse Industry Experience
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've been a certified personal trainer for over <strong>5 years</strong> and have had many roles 
                in the fitness industry, including personal trainer, boot camp leader, outdoor fitness coach, 
                assistant manager, fitness manager, head coach, and certified nutritionist. This diverse experience 
                shaped my comprehensive approach to fitness and nutrition.
              </p>
            </div>
          </div>

          {/* Story 3: Philosophy & Approach */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/about/about_img_3.jpeg"
                  alt="One percent better every day philosophy"
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
                "1% Better Every Day"
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take everything one step, one process, and one goal at a time. <strong>"1% better every day"</strong> 
                is my philosophy. As long as you are communicating with me and being consistent and compliant to the 
                program we design to the best of your ability, the results will follow.
              </p>
            </div>
          </div>

          {/* Story 4: Mission & Commitment */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/about/about_img_4.jpeg"
                  alt="Trainer coach and biggest supporter mission"
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
                Your Trainer, Coach & Biggest Supporter
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The experience and knowledge I gained from these various roles have led to the creation and success 
                of BodybyBunch. I look forward to working with you as your trainer, coach, and biggest supporter 
                on your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}