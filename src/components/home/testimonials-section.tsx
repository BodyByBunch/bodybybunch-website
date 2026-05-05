import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  return (
    <section className={sectionStyles.strong}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn(headingStyles.strongSectionTitle, 'mb-4')}>
            Client Success Stories
          </h2>
          <p className={headingStyles.strongSectionLead}>
            Real results from real people who have transformed their lives with Body By Bunch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="bg-surface-raised border-border text-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">Sarah M.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-proof text-proof" />
                  ))}
                </div>
              </div>
              <Badge className="bg-proof text-brand hover:bg-proof/80">-45 lbs in 6 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                &quot;Lane completely changed my life! I lost 45 pounds and gained so much confidence. 
                Her nutrition coaching was the missing piece I needed.&quot;
              </p>
            </CardContent>
          </Card>

          <Card className="bg-surface-raised border-border text-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">Mike R.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-proof text-proof" />
                  ))}
                </div>
              </div>
              <Badge className="bg-proof text-brand hover:bg-proof/80">+20 lbs muscle</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                &quot;Working with Lane has been incredible. I gained 20 pounds of muscle and finally 
                achieved the physique I&apos;ve always wanted.&quot;
              </p>
            </CardContent>
          </Card>

          <Card className="bg-surface-raised border-border text-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">Jennifer L.</CardTitle>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-proof text-proof" />
                  ))}
                </div>
              </div>
              <Badge className="bg-proof text-brand hover:bg-proof/80">-30 lbs in 4 months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                &quot;Lane&apos;s accountability and support made all the difference. I lost 30 pounds and 
                learned how to maintain a healthy lifestyle.&quot;
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/testimonials">
                          <Button variant="outline" size="lg" className={ctaStyles.outline}>
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 
