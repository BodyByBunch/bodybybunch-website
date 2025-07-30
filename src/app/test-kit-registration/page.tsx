'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Code, Play, CheckCircle } from 'lucide-react';
import type { Kit } from '@/types/kit';
import type { PostRegistrationFlow } from '@/types/tenant';

export default function TestKitRegistrationPage() {
  const [testResult, setTestResult] = useState<Kit | null>(null);
  const [loading, setLoading] = useState(false);

  const simulateBackendResponse = () => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const mockResponse: Kit = {
        id: 7,
        kit_id: "XP64311466",
        kit_type: {
          code: "HEALTH_KIT_1",
          name: "Comprehensive Health Panel",
          description: "Complete health screening including lipid panel, metabolic panel, and CBC",
          panels: ["LIPID", "CMP", "CBC", "THYROID"]
        },
        tenant: {
          white_label_domain: "health.adaptiveai.io",
          post_registration_flow: {
            existing_portal_redirect: false,
            existing_portal_url: "",
            account_requirement: "required",
            guest_results_access: false,
            show_account_creation_cta: true,
            hosted_portal_preference: "white_label_hosted"
          }
        },
        kit_status: "delivered",
        sample_status: "awaiting_collection",
        shipment_to_customer: {
          tracking_number: "1Z999AA1234567890",
          carrier: "UPS",
          service_type: "Ground",
          shipped_date: "2024-01-10T09:00:00Z",
          estimated_delivery: "2024-01-12T17:00:00Z",
          delivered_date: "2024-01-12T14:30:00Z"
        },
        registered_to: {
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com",
          phone: "555-123-4567",
          date_of_birth: "1990-01-15",
          sex: "M",
          registration_date: new Date().toISOString()
        },
        created_at: "2024-01-15T10:30:00Z",
        updated_at: new Date().toISOString()
      };

      setTestResult(mockResponse);
      setLoading(false);
    }, 1500);
  };

  const getNextStepDescription = (postRegFlow: PostRegistrationFlow) => {
    if (postRegFlow.existing_portal_redirect || postRegFlow.account_requirement === 'external_only') {
      return "External Redirect → /thank-you";
    }
    if (postRegFlow.account_requirement === 'required') {
      return "Force Account Creation → /sign-up";
    }
    const isHostedPortal = postRegFlow.hosted_portal_preference === 'fully_hosted' || 
                          postRegFlow.hosted_portal_preference === 'white_label_hosted';
    if (isHostedPortal && postRegFlow.show_account_creation_cta) {
      return "Offer Account → /registration/success?cta=account";
    }
    return "Guest Success → /registration/success";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Kit Registration Testing
          </h1>
          <p className="text-lg text-gray-600">
            Test the kit registration flow and view backend response structure
          </p>
        </div>

        {/* Test Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Test Kit Registration Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                This simulates the backend response structure that your kit registration API returns.
                Click the button below to see the full data structure and routing logic.
              </p>
              
              <Button 
                onClick={simulateBackendResponse}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Simulating API Call...
                  </div>
                ) : (
                  'Simulate Kit Registration API Response'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        {testResult && (
          <>
            {/* Next Step Logic */}
            <Card className="mb-6 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  Routing Decision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-green-700">
                    <strong>Next Step:</strong> {testResult.tenant ? getNextStepDescription(testResult.tenant.post_registration_flow) : 'N/A'}
                  </p>
                  <p className="text-xs text-green-600">
                    This is determined by the tenant post_registration_flow configuration in the API response
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* API Response Structure */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Backend API Response Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Kit Information */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Kit Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">Kit ID</label>
                      <p className="font-mono">{testResult.kit_id}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Internal ID</label>
                      <p>{testResult.id}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Kit Status</label>
                      <Badge variant="default">{testResult.kit_status}</Badge>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Sample Status</label>
                      <Badge variant="outline">{testResult.sample_status}</Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Kit Type */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Kit Type Details</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">Name</label>
                      <p>{testResult.kit_type.name}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Description</label>
                      <p className="text-gray-700">{testResult.kit_type.description}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Test Panels</label>
                      <div className="flex gap-2 mt-1">
                        {testResult.kit_type.panels.map((panel: string) => (
                          <Badge key={panel} variant="outline">{panel}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Tenant Configuration */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Tenant Configuration</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">White Label Domain</label>
                      <p className="font-mono">{testResult.tenant?.white_label_domain || 'N/A'}</p>
                    </div>
                    
                    <div>
                      <label className="font-medium text-gray-500 block mb-2">Post Registration Flow</label>
                      <div className="grid grid-cols-2 gap-2">
                        {testResult.tenant ? Object.entries(testResult.tenant.post_registration_flow).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-xs">{key.replace(/_/g, ' ')}</span>
                            <Badge variant={value ? 'default' : 'secondary'} className="text-xs">
                              {typeof value === 'boolean' ? (value ? 'enabled' : 'disabled') : String(value)}
                            </Badge>
                          </div>
                        )) : <p className="text-gray-500">No tenant data available</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Registration Data */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Registered Patient</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <label className="font-medium text-gray-500">Name</label>
                      <p>{testResult.registered_to?.first_name || 'N/A'} {testResult.registered_to?.last_name || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Email</label>
                      <p>{testResult.registered_to?.email || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Phone</label>
                      <p>{testResult.registered_to?.phone || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="font-medium text-gray-500">Date of Birth</label>
                      <p>{testResult.registered_to?.date_of_birth || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Raw JSON */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Raw JSON Response</h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-xs">
                      {JSON.stringify(testResult, null, 2)}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Test the Complete Flow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Now test the actual kit registration flow to see how this data is used:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/">Go to Kit Registration</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/registration/success?kit=${testResult.kit_id}`}>
                      View Success Page
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
} 