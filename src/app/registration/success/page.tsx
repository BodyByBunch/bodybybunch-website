'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';

// Force dynamic rendering to avoid static generation issues with localStorage and useSearchParams
export const dynamic = 'force-dynamic';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, User, FileText, Settings, ExternalLink, AlertCircle } from 'lucide-react';
import { KitCache } from '@/lib/kitCache';
import type { Kit } from '@/types/kit';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [kitData, setKitData] = useState<Kit | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to load kit data from cache (stored during registration)
    const cachedKitData = KitCache.getRegisteredKit();
    
    if (cachedKitData) {
      console.log('📦 Loaded cached kit data:', JSON.stringify(cachedKitData, null, 2));
      
      // Debug: Check what tenant data structure we're getting
      console.log('🔍 Tenant data structure:', {
        hasTenant: !!cachedKitData.tenant,
        hasPostRegFlow: !!cachedKitData.tenant?.post_registration_flow,
        tenantKeys: cachedKitData.tenant ? Object.keys(cachedKitData.tenant) : [],
        fullTenantData: cachedKitData.tenant
      });
      
      // Debug: Check kit type data
      console.log('🔍 Kit type data:', {
        hasKitType: !!cachedKitData.kit_type,
        kitTypeName: cachedKitData.kit_type?.name,
        kitTypeDescription: cachedKitData.kit_type?.description,
        kitTypePanels: cachedKitData.kit_type?.panels,
        kitTypeCode: cachedKitData.kit_type?.code
      });
      
      // Debug: Check kit status data
      console.log('🔍 Kit status data:', {
        hasKitStatus: !!cachedKitData.kit_status,
        kitStatus: cachedKitData.kit_status,
        hasSampleStatus: !!cachedKitData.sample_status,
        sampleStatus: cachedKitData.sample_status
      });
      
      setKitData(cachedKitData);
      setLoading(false);
      // Clear the cached data after using it
      KitCache.clearRegisteredKit();
      return;
    }

    // No cached data found - this shouldn't happen in normal flow
    console.warn('⚠️ No cached kit data found. This may indicate a direct navigation to the success page.');
    setLoading(false);
  }, [searchParams]);

  // Check if we should show the account creation CTA
  const showAccountCTA = searchParams.get('cta') === 'account';
  const accountCreated = searchParams.get('account') === 'created';
  const invitationSent = searchParams.get('invitation_sent') === 'true';
  
  // Determine if this is a guest-only flow (no account creation needed)
  const isGuestOnlyFlow = kitData?.tenant?.post_registration_flow?.account_requirement === 'guest_only';

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div>Loading...</div>
      </div>
    );
  }

  if (!kitData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Kit Registration Data Not Found</h2>
            <p className="text-gray-600 mb-4">
              It looks like you navigated directly to this page without completing the kit registration process.
            </p>
            <Button className="mt-4" asChild>
              <Link href="/">Start Kit Registration</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Success Header */}
        <Card className="text-center bg-green-50 border-green-200">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800">
              {accountCreated ? 'Account Created Successfully!' : 'Kit Registered Successfully!'}
            </CardTitle>
            <p className="text-green-700 mt-2">
              {accountCreated 
                ? 'Your account has been created and your kit is registered.'
                : invitationSent
                  ? 'Your kit has been registered and an invitation has been sent to your email. Please check your inbox to complete your account setup.'
                  : isGuestOnlyFlow
                    ? 'Your kit has been registered successfully. You can access your results through your organization\'s portal.'
                    : 'Your kit has been registered and is ready for sample collection.'
              }
            </p>
          </CardHeader>
        </Card>

        {/* Kit Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Kit Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <label className="font-medium text-gray-500">Kit ID</label>
                <p className="font-mono text-lg">{kitData.kit_id}</p>
              </div>
              <div>
                <label className="font-medium text-gray-500">Kit Status</label>
                <Badge variant="default">{kitData.kit_status || 'registered'}</Badge>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <label className="font-medium text-gray-500 mb-2 block">Kit Type</label>
              <p className="font-semibold text-lg">{kitData.kit_type?.name || 'Unknown Kit'}</p>
              {kitData.kit_type?.description && (
                <p className="text-sm text-gray-600 mt-1">{kitData.kit_type.description}</p>
              )}
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500 mb-2 block">Panels</label>
              <div className="flex flex-wrap gap-2">
                {kitData.kit_type?.panels && kitData.kit_type.panels.length > 0 ? (
                  kitData.kit_type.panels.map((panel: string) => (
                    <Badge key={panel} variant="outline">
                      {panel}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">No panels specified</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Information (if available) */}
        {kitData.registered_to && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Registered Patient
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="font-medium text-gray-500">Name</label>
                  <p>{kitData.registered_to.first_name} {kitData.registered_to.last_name}</p>
                </div>
                <div>
                  <label className="font-medium text-gray-500">Email</label>
                  <p>{kitData.registered_to.email}</p>
                </div>
                <div>
                  <label className="font-medium text-gray-500">Phone</label>
                  <p>{kitData.registered_to.phone}</p>
                </div>
                <div>
                  <label className="font-medium text-gray-500">Date of Birth</label>
                  <p>{kitData.registered_to.date_of_birth}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Invitation Sent Instructions */}
        {invitationSent && (
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <User className="w-5 h-5" />
                Account Invitation Sent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-3">
                We've sent an invitation to your email address. Please check your inbox and follow the link in the email to complete your account setup.
              </p>
              <div className="bg-blue-100 p-3 rounded-md">
                <p className="text-sm text-blue-800 font-medium mb-2">What to expect:</p>
                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                  <li>Check your email for an invitation from WorkOS</li>
                  <li>Click the invitation link to create your account</li>
                  <li>Set up your password and complete your profile</li>
                  <li>Access your kit results and health data</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Client-Specific Instructions */}
        {kitData.tenant?.white_label_domain && !invitationSent && (
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <ExternalLink className="w-5 h-5" />
                Access Your Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-3">
                Your kit has been successfully registered. To view your results and manage your health data, please visit your organization's portal.
              </p>
              <Button className="w-full" asChild>
                <a href={`https://${kitData.tenant.white_label_domain}`} target="_blank" rel="noopener noreferrer">
                  Go to {kitData.tenant.white_label_domain}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          {showAccountCTA && kitData.tenant?.post_registration_flow?.show_account_creation_cta && (
            <Button className="w-full" size="lg" asChild>
              <a href={`/sign-up?kit=${kitData.kit_id}`}>
                Create Account to View Results
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => window.history.back()}>
              Register Another Kit
            </Button>
            <Button variant="outline">
              Contact Support
            </Button>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-700">
              <li>Collect your sample using the provided kit</li>
              <li>Schedule a pickup or drop-off at a collection site</li>
              <li>Results will be available in 3-5 business days</li>
              <li>Visit your organization's portal to view results when ready</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function RegistrationSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div>Loading...</div></div>}>
      <SuccessContent />
    </Suspense>
  );
} 