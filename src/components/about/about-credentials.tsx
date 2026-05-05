import { Award, Dumbbell, GraduationCap, MapPin, TrendingUp, Users } from 'lucide-react';

import { headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

const credentials = [
  {
    title: 'ISSA Certified',
    detail: 'Personal Trainer',
    icon: Award,
  },
  {
    title: 'PN1 Nutritionist',
    detail: 'Nutrition coaching',
    icon: TrendingUp,
  },
  {
    title: 'Texas State University',
    detail: 'Exercise Sports Science & Coaching',
    icon: GraduationCap,
  },
] as const;

const experience = [
  { label: 'Personal Trainer', icon: Dumbbell },
  { label: 'Boot Camp Leader', icon: Users },
  { label: 'Outdoor Fitness Coach', icon: MapPin },
  { label: 'Fitness Manager', icon: Award },
] as const;

const stats = [
  { value: '5+', label: 'years certified' },
  { value: '100+', label: 'clients trained' },
  { value: 'Local + online', label: 'coaching options' },
] as const;

export function AboutCredentials() {
  return (
    <section className={sectionStyles.default}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="space-y-2 mb-5">
            <div className={headingStyles.rule} />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Credentials & Coaching Range
            </h2>
            <div className={headingStyles.rule} />
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            Evidence-based coaching backed by education, certifications, and years of work across personal training, nutrition, and fitness leadership.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-border bg-surface-raised p-5 shadow-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-proof">
              Foundation
            </p>
            <div className="mt-5 space-y-4">
              {credentials.map((credential) => {
                const Icon = credential.icon;

                return (
                  <div key={credential.title} className="flex items-start gap-4 rounded-lg bg-muted/35 p-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-action/10 text-action">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{credential.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{credential.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-5 shadow-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-proof">
              Experience
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {experience.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
                    <Icon className="h-4 w-4 text-action" />
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <div className={cn('text-2xl font-bold', stat.value === 'Local + online' ? 'text-proof' : 'text-action')}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
