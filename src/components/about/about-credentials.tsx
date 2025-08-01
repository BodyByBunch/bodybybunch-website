import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';

export function AboutCredentials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Credentials & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 5 years of certified experience with comprehensive education and diverse industry expertise.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground">Academic foundation in exercise science and coaching</p>
            </div>
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-brand-sky dark:text-brand-sky-light" />
                </div>
                <CardTitle className="text-xl">Texas State University</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-foreground mb-2">Bachelor's Degree - 2018</p>
                <p className="text-muted-foreground">
                  Exercise Sports Science and Coaching
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Certifications</h3>
              <p className="text-muted-foreground">Professional credentials and specializations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-brand-sky dark:text-brand-sky-light" />
                  </div>
                  <CardTitle className="text-lg">NASM Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Personal Trainer</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">NASM Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Nutrition Coach</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Weight Loss Specialist</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Industry Experience</h3>
              <p className="text-muted-foreground">Diverse roles across the fitness industry</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-brand-sky dark:text-brand-sky-light" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Trainer</h4>
                  <p className="text-sm text-muted-foreground">One-on-one coaching</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Boot Camp Leader</h4>
                  <p className="text-sm text-muted-foreground">Group fitness classes</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Outdoor Fitness Coach</h4>
                  <p className="text-sm text-muted-foreground">Nature-based training</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Fitness Manager</h4>
                  <p className="text-sm text-muted-foreground">Leadership & operations</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                                  <div className="text-3xl font-bold text-brand-sky dark:text-brand-sky-light mb-2">5+</div>
                <p className="text-lg font-semibold text-foreground mb-1">Years Certified</p>
                <p className="text-sm text-muted-foreground">Personal Training Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100+</div>
                <p className="text-lg font-semibold text-foreground mb-1">Clients Trained</p>
                <p className="text-sm text-muted-foreground">Nationwide Online Coaching</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">Multiple</div>
                <p className="text-lg font-semibold text-foreground mb-1">Industry Roles</p>
                <p className="text-sm text-muted-foreground">Comprehensive Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
