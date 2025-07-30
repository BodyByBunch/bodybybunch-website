/**
 * Client Portal Tenant Types
 * 
 * Simplified tenant types for guest-first client portal application.
 * Supports both environment-based and API-driven tenant configuration.
 */

// Core tenant configuration interface matching backend API response
export interface TenantConfig {
  // Basic Info
  id: number;
  name: string;
  display_name?: string;
  client_code: string;
  
  // Branding Configuration
  branding: {
    logo_url?: string;
    logo_dark_url?: string;
    favicon_url?: string;
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    custom_domain?: string;
    support_email?: string;
    support_phone?: string;
  };
  
  // Feature Flags
  features: {
    enableLabOnboarding: boolean;
    enableProviderOnboarding: boolean;
    enableClientOnboarding: boolean;
    enableAnalytics: boolean;
    enableTracking: boolean;
    enableNotifications: boolean;
  };
  
  // Subscription Info
  subscription: {
    tier: 'basic' | 'professional' | 'enterprise';
    status: 'active' | 'suspended' | 'trial';
    trial_ends_at?: string;
  };
  
  // Advanced Configuration (JSON from database)
  tenant_config: {
    post_registration_flow?: {
      account_requirement: 'optional' | 'required' | 'disabled';
      guest_results_access: boolean;
      show_account_creation_cta: boolean;
      hosted_portal_preference: 'fully_hosted' | 'white_label_hosted' | 'redirect_external';
    };
    compliance?: {
      hipaa_compliance_required: boolean;
      data_retention_preference: string;
    };
    use_case?: {
      primary_use_case: string;
      user_journey_preference: string;
    };
  };
  
  // Detection metadata (added by backend)
  _detection?: {
    method: 'client_code' | 'custom_domain' | 'workos_org' | 'fallback';
    client_id: number;
    client_code: string;
  };
}

// Simplified tenant context for React components
export interface TenantContext {
  // Configuration
  config: TenantConfig;
  isLoading: boolean;
  error: string | null;
  
  // User context (guest-friendly)
  isGuest: boolean;
  userRole: 'guest' | 'patient' | 'provider' | 'admin';
  
  // Detection info
  detectionMethod: string;
  tenantId: number | null;
  
  // Actions
  refetchConfig: () => Promise<void>;
}

// Lightweight branding response (for frequent requests)
export interface TenantBranding {
  id: number;
  name: string;
  display_name?: string;
  logo_url?: string;
  logo_dark_url?: string;
  favicon_url?: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  custom_domain?: string;
  theme: Record<string, any>;
  branding: Record<string, any>;
  _detection?: {
    method: string;
    client_id: number;
    client_code: string;
  };
}

// Hook return types
export interface UseTenantReturn extends TenantContext {}

export interface UseTenantConfigReturn {
  config: TenantConfig;
  isLoading: boolean;
  error: string | null;
  refetchConfig: () => Promise<void>;
}

export interface UseTenantBrandingReturn {
  branding: TenantBranding;
  isLoading: boolean;
  error: string | null;
  refetchBranding: () => Promise<void>;
}

// Environment configuration support
export interface EnvironmentTenantConfig {
  // Basic branding from env vars
  name: string;
  displayName?: string;
  logoUrl?: string;
  faviconUrl?: string;
  
  // Colors
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  
  // Contact info
  supportEmail: string;
  supportPhone?: string;
  
  // Feature flags
  features: {
    accountCreation: boolean;
    guestResults: boolean;
    notifications: boolean;
    analytics: boolean;
  };
  
  // API configuration
  enableDynamicTenants: boolean;
  apiBaseUrl?: string;
}

// API client interface
export interface TenantApiClient {
  getConfig: (clientCode?: string) => Promise<TenantConfig>;
  getBranding: (clientCode?: string) => Promise<TenantBranding>;
}

// Detection configuration
export interface TenantDetectionConfig {
  method: 'environment' | 'api' | 'hybrid';
  fallbackToEnv: boolean;
  enableDomainDetection: boolean;
  enableManualOverride: boolean;
} 