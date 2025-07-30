'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Scan, ArrowRight, FlaskConical, CheckCircle, ArrowLeft } from 'lucide-react';
import { getKitType, registerKit } from '@/app/api/client';
import { decideNextStep } from '@/lib/tenantFeatures';
import { KitCache } from '@/lib/kitCache';
import type { PostRegistrationFlow, TenantConfig } from '@/types/tenant';
import { useRouter } from 'next/navigation';
import { requestPatientInvite } from '@/lib/auth';

// Enhanced progress indicator component using shadcn components
function ProgressIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: 'Kit ID', icon: Scan },
    { number: 2, label: 'Confirm', icon: CheckCircle },
    { number: 3, label: 'Register', icon: FlaskConical },
  ];

  // Calculate progress percentage
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full mb-8 space-y-6">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Step {currentStep} of {steps.length}</span>
          <span>{Math.round(progressPercentage)}% Complete</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          
          return (
            <div key={step.number} className="flex items-center">
              <div className={`flex flex-col items-center ${index > 0 ? 'ml-8' : ''}`}>
                {/* Step indicator with Badge-like styling */}
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-110'
                        : isCompleted
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-gray-400 border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Step number badge */}
                  <Badge 
                    variant={isActive ? "default" : isCompleted ? "secondary" : "outline"}
                    className={`absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center ${
                      isActive ? 'bg-blue-700' : isCompleted ? 'bg-green-700 text-white' : ''
                    }`}
                  >
                    {step.number}
                  </Badge>
                </div>
                <span
                  className={`text-xs mt-3 font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 mx-4 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function KitRegistrationForm() {
  const [kitId, setKitId] = useState('');
  const [kitName, setKitName] = useState('');
  const [kitDescription, setKitDescription] = useState('');
  const [kitTypeData, setKitTypeData] = useState<{
    code: string;
    name: string;
    description: string;
    panels: string[];
  } | null>(null);
  const [fullKitData, setFullKitData] = useState<{
    tenant: TenantConfig | null;
    kit_type: {
      code: string;
      name: string;
      description: string;
      panels: string[];
    } | null;
  } | null>(null);
  const [patientInfo, setPatientInfo] = useState({ firstName: '', lastName: '', dateOfBirth: '', email: '', sex: '', phone: '' });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleKitIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const kitTypeData = await getKitType(kitId);
      setKitName(kitTypeData.kit_type?.name || 'Unknown Kit');
      setKitDescription(kitTypeData.kit_type?.description || '');
      setKitTypeData(kitTypeData.kit_type);
      setFullKitData(kitTypeData); // Store the full kit data including tenant
      setStep(2); // Move to confirmation step
    } catch (error) {
      console.error(error);
      setError('Invalid Kit ID. Please check your kit and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmKit = () => {
    setStep(3); // Move to patient info step
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const registeredKit = await registerKit({ kitId, patientInfo });
      console.log('✅ Kit registration successful:', JSON.stringify(registeredKit, null, 2));
      
      // Debug: Check what tenant data structure we're getting from the API
      console.log('🔍 API Response Tenant Structure:', {
        hasTenant: !!registeredKit.tenant,
        hasPostRegFlow: !!registeredKit.tenant?.post_registration_flow,
        tenantKeys: registeredKit.tenant ? Object.keys(registeredKit.tenant) : []
      });
      
      // Enhance the registered kit data with cached kit type information and tenant data
      const enhancedKitData = {
        ...registeredKit,
        kit_type: kitTypeData || registeredKit.kit_type,
        // Use the original tenant data from kit lookup (which has workos_organization_id)
        tenant: fullKitData?.tenant || registeredKit.tenant || null
      };
      
      console.log('📦 Enhanced kit data with cached kit type and tenant info:', JSON.stringify(enhancedKitData, null, 2));
      
      // Store the enhanced kit data for the success page
      KitCache.storeRegisteredKit(enhancedKitData);
      
      // Use tenant post_registration_flow from the initial getKitType call
      const postRegFlow = fullKitData?.tenant?.post_registration_flow || registeredKit.tenant?.post_registration_flow;
      
      // Debug: Log the post-registration flow decision
      console.log('🔍 Post-registration flow decision:', {
        hasPostRegFlow: !!postRegFlow,
        postRegFlow: postRegFlow,
        fallbackPostRegFlow: postRegFlow,
        finalPostRegFlow: postRegFlow
      });
      
      const next = decideNextStep(postRegFlow);
      
      console.log('🎯 Next step decision:', next);
      
      switch (next) {
        case 'externalRedirect':
          // Redirect to external portal if URL is provided
          const externalUrl = registeredKit.tenant?.post_registration_flow?.existing_portal_url;
          if (externalUrl) {
            console.log('🔄 Redirecting to external portal:', externalUrl);
            window.location.href = externalUrl;
          } else {
            // Fallback to thank you page if no external URL
            console.log('⚠️ No external portal URL found, redirecting to thank you page');
            window.location.href = `/thank-you`;
          }
          return;
        case 'offerAccount':
          // Store patient info for potential account creation
          localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
          router.push(`/registration/success?cta=account&kit=${kitId}`);
          return;
        case 'forceAccount':
          try {
            const tenantAny: any = enhancedKitData.tenant || {};
            const orgId = tenantAny.workos_organization_id || tenantAny.organization_id;
            if (!orgId) {
              console.error('No WorkOS organization ID found; falling back to local sign-up');
              localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
              router.push(`/sign-up?kit=${kitId}`);
              return;
            }
            // Request WorkOS invitation
            console.log('📧 Sending WorkOS invitation request:', {
              email: patientInfo.email,
              organization_id: orgId,
              first_name: patientInfo.firstName,
              last_name: patientInfo.lastName,
              role: "organization-user"
            });
            const invite = await requestPatientInvite({
              email: patientInfo.email,
              organization_id: orgId,
              first_name: patientInfo.firstName,
              last_name: patientInfo.lastName,
              role: "organization-user", // Specify the role for patient users (note the hyphen)
            });
            console.log('📧 Invitation sent successfully:', invite.message);
            // Show success message and redirect to success page
            setError(''); // Clear any existing errors
            router.push(`/registration/success?kit=${kitId}&invitation_sent=true`);
          } catch (inviteErr) {
            console.error('Failed to send invitation', inviteErr);
            localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
            router.push(`/sign-up?kit=${kitId}`);
          }
          return;
        case 'guestSuccess':
        default:
          router.push(`/registration/success?kit=${kitId}`);
          return;
      }
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Kit ID Entry
  if (step === 1) {
    return (
      <div className="w-full max-w-md mx-auto">
        <ProgressIndicator currentStep={1} />
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Scan className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Enter Your Kit ID</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Find the Kit ID on your test kit packaging to get started
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleKitIdSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="kitId" className="text-sm font-medium text-gray-700">
                  Kit ID
                </Label>
                <div className="relative">
                  <Input 
                    id="kitId" 
                    value={kitId} 
                    onChange={(e) => setKitId(e.target.value)}
                    placeholder="Enter your kit ID (e.g., KIT-123456)"
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={loading}
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 mt-2">{error}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-colors duration-200 group"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Need help finding your Kit ID? 
                <button className="text-blue-600 hover:text-blue-700 ml-1 underline">
                  Contact Support
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Step 2: Kit Type Confirmation (NEW)
  if (step === 2) {
    return (
      <div className="w-full max-w-md mx-auto">
        <ProgressIndicator currentStep={2} />
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Confirm Your Test</CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Please verify this is the correct test kit you want to register
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                You are registering:
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-2">{kitName}</p>
              {kitDescription && (
                <p className="text-sm text-gray-600">{kitDescription}</p>
              )}
              <div className="mt-4 text-xs text-gray-500">
                Kit ID: {kitId}
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleConfirmKit}
                className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium text-base transition-colors duration-200 group"
              >
                Yes, this is my kit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                onClick={() => setStep(1)}
                variant="outline"
                className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium text-base transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                This isn&apos;t my kit
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Double-check your kit packaging if you&apos;re unsure
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Step 3: Patient Information Collection (Updated)
  return (
    <div className="w-full max-w-md mx-auto">
      <ProgressIndicator currentStep={3} />
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Complete Registration
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            Please provide your information to register the <strong>{kitName}</strong>
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleRegistrationSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input 
                  id="firstName"
                  value={patientInfo.firstName}
                  onChange={(e) => setPatientInfo({...patientInfo, firstName: e.target.value})}
                  placeholder="John"
                  className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input 
                  id="lastName"
                  value={patientInfo.lastName}
                  onChange={(e) => setPatientInfo({...patientInfo, lastName: e.target.value})}
                  placeholder="Doe"
                  className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                  disabled={loading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dob" className="text-sm font-medium text-gray-700">
                Date of Birth
              </Label>
              <Input 
                id="dob"
                type="date"
                value={patientInfo.dateOfBirth}
                onChange={(e) => setPatientInfo({...patientInfo, dateOfBirth: e.target.value})}
                className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                required
                disabled={loading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input 
                id="email"
                type="email"
                value={patientInfo.email}
                onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                placeholder="john.doe@example.com"
                className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                required
                disabled={loading}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sex" className="text-sm font-medium text-gray-700">
                  Sex
                </Label>
                <Select 
                  value={patientInfo.sex} 
                  onValueChange={(value) => setPatientInfo({...patientInfo, sex: value})}
                  disabled={loading}
                >
                  <SelectTrigger className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                    <SelectValue placeholder="Select sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">Male</SelectItem>
                    <SelectItem value="F">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={patientInfo.phone}
                  onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                  placeholder="(555) 123-4567"
                  className="h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-medium text-base transition-colors duration-200"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Registering Kit...
                </div>
              ) : (
                'Complete Registration'
              )}
            </Button>
          </form>
          
          <div className="text-center">
            <button 
              onClick={() => setStep(2)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
              disabled={loading}
            >
              ← Back to Kit Confirmation
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
