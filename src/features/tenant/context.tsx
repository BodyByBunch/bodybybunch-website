'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { useAuth } from '@/providers/auth-context';
import type { 
  TenantContext, 
  TenantConfig, 
  TenantApiClient,
  EnvironmentTenantConfig 
} from './types';

// Create tenant context
const TenantContextProvider = createContext<TenantContext | undefined>(undefined);

// API client for tenant configuration
class TenantApiClientImpl implements TenantApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api/tenant') {
    this.baseUrl = baseUrl;
  }

  async getConfig(clientCode?: string): Promise<TenantConfig> {
    const url = new URL(`${this.baseUrl}/config`, window.location.origin);
    if (clientCode) {
      url.searchParams.set('client_code', clientCode);
    }

    const response = await fetch(url.toString(), {
      credentials: 'include', // Include cookies for authentication
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tenant config: ${response.status}`);
    }

    return response.json();
  }

  async getBranding(clientCode?: string): Promise<any> {
    const url = new URL(`${this.baseUrl}/branding`, window.location.origin);
    if (clientCode) {
      url.searchParams.set('client_code', clientCode);
    }

    const response = await fetch(url.toString(), {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tenant branding: ${response.status}`);
    }

    return response.json();
  }
}

// Environment configuration helper
function getEnvironmentConfig(): EnvironmentTenantConfig {
  return {
    name: process.env.NEXT_PUBLIC_TENANT_NAME || 'C4HXP Health Portal',
    displayName: process.env.NEXT_PUBLIC_TENANT_DISPLAY_NAME,
    logoUrl: process.env.NEXT_PUBLIC_TENANT_LOGO_URL,
    faviconUrl: process.env.NEXT_PUBLIC_TENANT_FAVICON_URL,
    primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#1e40af',
    secondaryColor: process.env.NEXT_PUBLIC_SECONDARY_COLOR || '#475569',
    accentColor: process.env.NEXT_PUBLIC_ACCENT_COLOR || '#059669',
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@c4hxp.com',
    supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE,
    features: {
      accountCreation: process.env.NEXT_PUBLIC_ENABLE_ACCOUNT_CREATION !== 'false',
      guestResults: process.env.NEXT_PUBLIC_ENABLE_GUEST_RESULTS !== 'false',
      notifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
      analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false',
    },
    enableDynamicTenants: process.env.NEXT_PUBLIC_ENABLE_DYNAMIC_TENANTS === 'true',
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  };
}

// Create default config from environment
function createDefaultConfig(): TenantConfig {
  const envConfig = getEnvironmentConfig();
  
  return {
    id: 0,
    name: envConfig.name,
    display_name: envConfig.displayName || envConfig.name,
    client_code: 'ENV_DEFAULT',
    branding: {
      logo_url: envConfig.logoUrl,
      logo_dark_url: undefined,
      favicon_url: envConfig.faviconUrl,
      primary_color: envConfig.primaryColor,
      secondary_color: envConfig.secondaryColor,
      accent_color: envConfig.accentColor || envConfig.primaryColor,
      custom_domain: undefined,
      support_email: envConfig.supportEmail,
      support_phone: envConfig.supportPhone,
    },
    features: {
      enableLabOnboarding: true,
      enableProviderOnboarding: true,
      enableClientOnboarding: false,
      enableAnalytics: envConfig.features.analytics,
      enableTracking: true,
      enableNotifications: envConfig.features.notifications,
    },
    subscription: {
      tier: 'basic',
      status: 'active',
      trial_ends_at: undefined,
    },
    tenant_config: {
      post_registration_flow: {
        account_requirement: 'optional',
        guest_results_access: envConfig.features.guestResults,
        show_account_creation_cta: envConfig.features.accountCreation,
        hosted_portal_preference: 'white_label_hosted',
      },
    },
    _detection: {
      method: 'fallback',
      client_id: 0,
      client_code: 'ENV_DEFAULT',
    },
  };
}

// Apply tenant theming to document
function applyTenantTheme(config: TenantConfig) {
  if (typeof document === 'undefined') return; // SSR protection

  const root = document.documentElement;
  
  // Helper function to convert hex to HSL
  const hexToHsl = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return null;
    
    const r = parseInt(result[1], 16) / 255;
    const g = parseInt(result[2], 16) / 255;
    const b = parseInt(result[3], 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    
    return `${h * 360} ${s * 100}% ${l * 100}%`;
  };

  // Apply colors as CSS custom properties
  if (config.branding.primary_color) {
    const hsl = hexToHsl(config.branding.primary_color);
    if (hsl) {
      root.style.setProperty('--primary', hsl);
    }
  }
  
  if (config.branding.secondary_color) {
    const hsl = hexToHsl(config.branding.secondary_color);
    if (hsl) {
      root.style.setProperty('--secondary', hsl);
    }
  }
  
  if (config.branding.accent_color) {
    const hsl = hexToHsl(config.branding.accent_color);
    if (hsl) {
      root.style.setProperty('--accent', hsl);
    }
  }

  // Update document title
  if (config.display_name || config.name) {
    document.title = `${config.display_name || config.name} - Health Portal`;
  }

  // Apply favicon if provided
  if (config.branding.favicon_url) {
    let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = config.branding.favicon_url;
  }
}

// Tenant Provider Component
export function TenantProvider({ children }: { children: ReactNode }) {
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const [config, setConfig] = useState<TenantConfig>(createDefaultConfig());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiClient] = useState(() => new TenantApiClientImpl());

  // Determine user role and guest status
  const isGuest = !isAuthenticated;
  const userRole = isGuest ? 'guest' : 
                  (user as any)?.role === 'organization_user' ? 'patient' :
                  (user as any)?.role === 'organization_admin' ? 'admin' : 'patient';

  const fetchTenantConfig = useCallback(async () => {
    const envConfig = getEnvironmentConfig();
    
    // If dynamic tenants are disabled, use environment config only
    if (!envConfig.enableDynamicTenants) {
      console.log('🏠 Using environment-based tenant configuration');
      const defaultConfig = createDefaultConfig();
      setConfig(defaultConfig);
      applyTenantTheme(defaultConfig);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log('🌐 Fetching tenant configuration from API...');
      console.log('🔍 Debug - User object:', user);
      console.log('🔍 Debug - Is authenticated:', isAuthenticated);
      console.log('🔍 Debug - User organization fields:', {
        organization_id: (user as any)?.organization_id,
        organizationId: (user as any)?.organizationId,
        organizationMemberships: (user as any)?.organizationMemberships,
        workos_org: (user as any)?.workos_organization_id
      });
      
      // Get manual override from URL params for development
      const urlParams = new URLSearchParams(window.location.search);
      const clientCodeOverride = urlParams.get('client_code');
      
      const fetchedConfig = await apiClient.getConfig(clientCodeOverride || undefined);
      
      console.log('✅ Tenant configuration loaded:', {
        name: fetchedConfig.display_name || fetchedConfig.name,
        method: fetchedConfig._detection?.method,
        client_id: fetchedConfig._detection?.client_id,
      });
      
      setConfig(fetchedConfig);
      applyTenantTheme(fetchedConfig);
      
    } catch (err) {
      console.warn('⚠️ Failed to fetch tenant config, using environment fallback:', err);
      setError(err instanceof Error ? err.message : 'Failed to load tenant configuration');
      
      // Fallback to environment config
      const defaultConfig = createDefaultConfig();
      setConfig(defaultConfig);
      applyTenantTheme(defaultConfig);
    } finally {
      setIsLoading(false);
    }
  }, [apiClient]);

  // Fetch config on mount and when auth state changes
  useEffect(() => {
    // Don't fetch until auth is done loading (for SSR compatibility)
    if (!authLoading) {
      fetchTenantConfig();
    }
  }, [authLoading, fetchTenantConfig]);

  const contextValue: TenantContext = {
    config,
    isLoading,
    error,
    isGuest,
    userRole,
    detectionMethod: config._detection?.method || 'fallback',
    tenantId: config.id || null,
    refetchConfig: fetchTenantConfig,
  };

  return (
    <TenantContextProvider.Provider value={contextValue}>
      {children}
    </TenantContextProvider.Provider>
  );
}

// Hook to use tenant context
export function useTenant() {
  const context = useContext(TenantContextProvider);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
} 