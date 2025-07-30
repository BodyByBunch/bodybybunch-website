'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">
            Kit Registration Complete!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600">
            Your kit has been successfully registered. You will be redirected to your organization's portal shortly.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-700">
              If you are not automatically redirected, please contact your healthcare provider or visit your organization's patient portal.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button className="w-full" asChild>
              <Link href="/">
                Register Another Kit
              </Link>
            </Button>
            
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 