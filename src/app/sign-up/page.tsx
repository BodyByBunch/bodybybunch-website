'use client';

import { useEffect, useState, Suspense } from 'react';

// Force dynamic rendering to avoid static generation issues with localStorage and useSearchParams
export const dynamic = 'force-dynamic';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus, ArrowLeft, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import type { PatientInfo } from '@/types/user';
import { useAuth } from '@/providers/auth-context';

function SignUpContent() {
  const searchParams = useSearchParams();
  const { signIn, isAuthenticated, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: ''
  });
  const [loading, setLoading] = useState(false);
  const [isPreFilled, setIsPreFilled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for authentication errors
    const errorParam = searchParams.get('error');
    if (errorParam) {
      setError(getErrorMessage(errorParam));
    }

    // Load patient info from localStorage if available
    const storedPatientInfo = localStorage.getItem('patientInfo');
    if (storedPatientInfo) {
      try {
        const patientInfo: PatientInfo = JSON.parse(storedPatientInfo);
        setFormData(prev => ({
          ...prev,
          firstName: patientInfo.firstName,
          lastName: patientInfo.lastName,
          email: patientInfo.email,
          phone: patientInfo.phone,
          dateOfBirth: patientInfo.dateOfBirth
        }));
        setIsPreFilled(true);
        // Clean up the stored data
        localStorage.removeItem('patientInfo');
      } catch (error) {
        console.error('Failed to parse stored patient info:', error);
      }
    }
  }, [searchParams]);

  const getErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case 'auth_failed':
        return 'Authentication failed. Please try again.';
      case 'invalid_state':
        return 'Invalid authentication state. Please try again.';
      case 'no_code':
        return 'No authorization code received. Please try again.';
      case 'token_exchange_failed':
        return 'Failed to complete authentication. Please try again.';
      case 'profile_failed':
        return 'Failed to retrieve user profile. Please try again.';
      case 'callback_failed':
        return 'Authentication callback failed. Please try again.';
      default:
        return 'An error occurred during authentication. Please try again.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Store patient info for the authentication flow
    const patientInfo: PatientInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      sex: '' // Will be filled by user during registration
    };
    
    localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
    
    // Redirect to WorkOS authentication
    signIn();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Create Your Account
            </CardTitle>
            {isPreFilled && (
              <p className="text-sm text-green-600 mt-2">
                ✓ Pre-filled with your registration information
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Secure Authentication</span>
              </div>
              <p className="text-sm text-blue-600">
                Your account will be created securely through WorkOS. No passwords needed - just your email and basic information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Create Account with WorkOS
                  </div>
                )}
              </Button>
            </form>
            
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                disabled={loading}
                className="text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div>Loading...</div></div>}>
      <SignUpContent />
    </Suspense>
  );
} 