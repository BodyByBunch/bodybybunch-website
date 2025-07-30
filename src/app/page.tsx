import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShadcnDemo } from '@/components/examples/shadcn-demo';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Next.js App Template
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern, feature-based Next.js template with TypeScript, Tailwind CSS, 
            Shadcn/ui, and best practices for scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Feature-Based Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Organized by domain features for better maintainability and scalability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Full TypeScript support with strict mode and comprehensive type definitions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shadcn/ui Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Beautiful, accessible components built on Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Layer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Typed API client with error handling for external API integration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Code Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                ESLint, Prettier, and import sorting for consistent, clean code.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ready to Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Built with scalability in mind - easy to add features and maintain.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-16">
          <Button size="lg">
            Get Started
          </Button>
        </div>

        <Separator className="my-16" />

        <ShadcnDemo />
      </div>
    </main>
  );
}
