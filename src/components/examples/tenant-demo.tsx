'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  useTenantConfig, 
  useTenantColors, 
  useTenantLogos, 
  useTenantFeatures,
  useTenantDetection,
  useSupportInfo,
  usePostRegistrationFlow,
  useIsGuest,
  useUserRole
} from '@/features/tenant';
import { 
  Palette, 
  Settings, 
  Globe, 
  User, 
  Phone, 
  Mail, 
  Image,
  Shield,
  Eye,
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';

export function TenantDemo() {
  const { config, isLoading, error, refetchConfig } = useTenantConfig();
  const colors = useTenantColors();
  const logos = useTenantLogos();
  const features = useTenantFeatures();
  const detection = useTenantDetection();
  const support = useSupportInfo();
  const postRegFlow = usePostRegistrationFlow();
  const isGuest = useIsGuest();
  const userRole = useUserRole();
  
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const ColorSwatch = ({ color, label }: { color: string; label: string }) => (
    <div className="flex items-center gap-2">
      <div 
        className="w-6 h-6 rounded border border-gray-300"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-mono">{color}</span>
      <span className="text-xs text-gray-500">({label})</span>
    </div>
  );

  const FeatureFlag = ({ name, enabled }: { name: string; enabled: boolean }) => (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm">{name}</span>
      <Badge variant={enabled ? "default" : "secondary"}>
        {enabled ? "Enabled" : "Disabled"}
      </Badge>
    </div>
  );

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5 animate-spin" />
            Loading Tenant Configuration...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="animate-pulse text-gray-500">
              Fetching tenant configuration from API...
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <Settings className="w-5 h-5" />
            Tenant Configuration Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-600 mb-4">{error}</div>
          <Button onClick={refetchConfig} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Basic Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Tenant Configuration Preview
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">{detection.method}</Badge>
            <Badge variant={detection.isDefault ? "secondary" : "default"}>
              {detection.isDefault ? "Default Config" : "Live Config"}
            </Badge>
            <Badge variant="outline">Client ID: {detection.clientCode}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Tenant Information</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Name:</strong> {config.name}</p>
                <p><strong>Display Name:</strong> {config.display_name || 'Not set'}</p>
                <p><strong>Client Code:</strong> {config.client_code}</p>
                <p><strong>Tenant ID:</strong> {config.id}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">User Context</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Role:</strong> <Badge variant="outline">{userRole}</Badge></p>
                <p><strong>Guest User:</strong> {isGuest ? 'Yes' : 'No'}</p>
                <p><strong>Detection Method:</strong> {detection.method}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Branding & Colors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Branding & Colors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Color Scheme</h4>
              <div className="space-y-2">
                <ColorSwatch color={colors.primary} label="Primary" />
                <ColorSwatch color={colors.secondary} label="Secondary" />
                <ColorSwatch color={colors.accent} label="Accent" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Image className="w-4 h-4" />
                Assets
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>Light Logo:</span>
                  {logos.light ? (
                    <img src={logos.light} alt="Logo" className="h-6 max-w-24 object-contain" />
                  ) : (
                    <span className="text-gray-500">Not set</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span>Dark Logo:</span>
                  {logos.dark ? (
                    <img src={logos.dark} alt="Dark Logo" className="h-6 max-w-24 object-contain" />
                  ) : (
                    <span className="text-gray-500">Not set</span>
                  )}
                </div>
                <div>
                  <span>Favicon: </span>
                  {logos.favicon ? (
                    <span className="text-blue-600 text-xs">{logos.favicon}</span>
                  ) : (
                    <span className="text-gray-500">Not set</span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Flags */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Feature Flags
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <FeatureFlag name="Lab Onboarding" enabled={features.enableLabOnboarding} />
              <FeatureFlag name="Provider Onboarding" enabled={features.enableProviderOnboarding} />
              <FeatureFlag name="Client Onboarding" enabled={features.enableClientOnboarding} />
              <FeatureFlag name="Analytics" enabled={features.enableAnalytics} />
              <FeatureFlag name="Tracking" enabled={features.enableTracking} />
              <FeatureFlag name="Notifications" enabled={features.enableNotifications} />
            </div>
          </CardContent>
        </Card>

        {/* Support & Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Support Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm">
                  {support.email || 'Not configured'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm">
                  {support.phone || 'Not configured'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Post-Registration Flow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Post-Registration Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <FeatureFlag 
                name="Account Creation Required" 
                enabled={postRegFlow.account_requirement === 'required'} 
              />
              <FeatureFlag 
                name="Guest Results Access" 
                enabled={postRegFlow.guest_results_access} 
              />
              <FeatureFlag 
                name="Show Account Creation CTA" 
                enabled={postRegFlow.show_account_creation_cta} 
              />
              <div className="pt-2">
                <span className="font-medium">Portal Preference:</span>
                <Badge variant="outline" className="ml-2">
                  {postRegFlow.hosted_portal_preference}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Raw Configuration Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Raw Configuration Data
            <Button
              onClick={() => copyToClipboard(JSON.stringify(config, null, 2), 'config')}
              variant="outline"
              size="sm"
              className="ml-auto"
            >
              {copiedSection === 'config' ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-xs">
            {JSON.stringify(config, null, 2)}
          </pre>
        </CardContent>
      </Card>

      {/* Testing Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() => window.location.href = '?client_code=SHMG2024'}
              variant="outline"
              size="sm"
            >
              Test SecureHealth (SHMG2024)
            </Button>
            <Button
              onClick={() => window.location.href = window.location.pathname}
              variant="outline"
              size="sm"
            >
              Clear Override
            </Button>
            <Button
              onClick={refetchConfig}
              variant="outline"
              size="sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Config
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 