'use client';

import { useAuth } from '@/providers/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, LogOut, Shield, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TenantDemo } from '@/components/examples/tenant-demo';

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  const router = useRouter();
  const [showTenantDemo, setShowTenantDemo] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/sign-up');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to sign-up
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your health information and test results</p>
          </div>
          <Button onClick={signOut} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> {user?.first_name} {user?.last_name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Verified:</strong> {user?.email_verified ? 'Yes' : 'No'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Authentication Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Authentication Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Status:</strong> <span className="text-green-600">Authenticated</span></p>
                <p><strong>Provider:</strong> WorkOS</p>
                <p><strong>User ID:</strong> {user?.id}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="outline">
                  Register New Kit
                </Button>
                <Button className="w-full" variant="outline">
                  View Results
                </Button>
                <Button className="w-full" variant="outline">
                  Update Profile
                </Button>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => {
                    console.log('🔍 [DEBUG] Full user object:', user);
                    console.log('🔍 [DEBUG] User keys:', user ? Object.keys(user) : 'No user');
                    console.log('🔍 [DEBUG] Organization fields:', {
                      organization_id: (user as any)?.organization_id,
                      organizationId: (user as any)?.organizationId,
                      organizationMemberships: (user as any)?.organizationMemberships,
                    });
                  }}
                >
                  🔍 Debug User Object
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tenant Configuration Demo */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Tenant Configuration Preview
                </div>
                <Button
                  onClick={() => setShowTenantDemo(!showTenantDemo)}
                  variant="outline"
                  size="sm"
                >
                  {showTenantDemo ? 'Hide' : 'Show'} Config
                </Button>
              </CardTitle>
            </CardHeader>
            {showTenantDemo && (
              <CardContent>
                <TenantDemo />
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
} 