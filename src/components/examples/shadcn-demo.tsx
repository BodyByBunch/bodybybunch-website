'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function ShadcnDemo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hello ${name}! We'll contact you at ${email}.`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Shadcn/ui Demo</h1>
        <p className="text-muted-foreground">
          This demonstrates the beautiful components available in your template
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>
            A simple form built with Shadcn/ui components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Button Variants
              <Badge variant="secondary">Demo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Component Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                All components are built with accessibility in mind
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">Customizable</h4>
              <p className="text-sm text-muted-foreground">
                Easy to customize with Tailwind CSS classes
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">TypeScript</h4>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with proper types
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Add more components to your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              Use the following commands to add more components:
            </p>
            <div className="bg-muted p-3 rounded-md">
              <code className="text-sm">
                bun run ui:add dialog form select tabs
              </code>
            </div>
            <p className="text-xs text-muted-foreground">
              Check the README.md for a complete list of available components
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 