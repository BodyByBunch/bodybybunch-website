/**
 * Client Portal Tenant Hooks
 * 
 * Simplified hooks for tenant functionality in the guest-first client portal.
 * These hooks provide easy access to tenant configuration and user context.
 */

import { useMemo } from 'react';
import { useTenant } from './context';
import type { 
  UseTenantConfigReturn, 
  UseTenantBrandingReturn, 
  TenantBranding 
} from './types';

/**
 * Main tenant hook - provides all tenant context
 * 
 * This is the primary hook that components should use for tenant-related logic.
 * Works for both guest and authenticated users.
 * 
 * @returns Complete tenant context
 */
export function useTenantContext() {
  return useTenant();
}

/**
 * Hook for just the tenant configuration
 * 
 * @returns Tenant configuration with loading state
 */
export function useTenantConfig(): UseTenantConfigReturn {
  const { config, isLoading, error, refetchConfig } = useTenant();
  
  return {
    config,
    isLoading,
    error,
    refetchConfig,
  };
}

/**
 * Hook for lightweight branding data
 * 
 * Extracts just the branding information from the full config.
 * Useful for components that only need styling/theme information.
 * 
 * @returns Branding configuration
 */
export function useTenantBranding(): UseTenantBrandingReturn {
  const { config, isLoading, error, refetchConfig } = useTenant();
  
  const branding: TenantBranding = useMemo(() => ({
    id: config.id,
    name: config.name,
    display_name: config.display_name,
    logo_url: config.branding.logo_url,
    logo_dark_url: config.branding.logo_dark_url,
    favicon_url: config.branding.favicon_url,
    primary_color: config.branding.primary_color,
    secondary_color: config.branding.secondary_color,
    accent_color: config.branding.accent_color,
    custom_domain: config.branding.custom_domain,
    theme: config.tenant_config || {},
    branding: config.branding,
    _detection: config._detection,
  }), [config]);
  
  return {
    branding,
    isLoading,
    error,
    refetchBranding: refetchConfig,
  };
}

/**
 * Hook to check if user is a guest (not authenticated)
 * 
 * @returns True if user is a guest
 */
export function useIsGuest(): boolean {
  const { isGuest } = useTenant();
  return isGuest;
}

/**
 * Hook to get the current user role
 * 
 * @returns User role string
 */
export function useUserRole(): 'guest' | 'patient' | 'provider' | 'admin' {
  const { userRole } = useTenant();
  return userRole;
}

/**
 * Hook to check if user has a specific role
 * 
 * @param role - Role to check for
 * @returns True if user has the specified role
 */
export function useHasRole(role: 'guest' | 'patient' | 'provider' | 'admin'): boolean {
  const userRole = useUserRole();
  return userRole === role;
}

/**
 * Hook to check if user is a patient (authenticated user)
 * 
 * @returns True if user is a patient or admin
 */
export function useIsPatient(): boolean {
  const userRole = useUserRole();
  return userRole === 'patient' || userRole === 'admin';
}

/**
 * Hook to check if user is an admin
 * 
 * @returns True if user is an admin
 */
export function useIsAdmin(): boolean {
  const userRole = useUserRole();
  return userRole === 'admin';
}

/**
 * Hook to get tenant feature flags
 * 
 * @returns Feature configuration object
 */
export function useTenantFeatures() {
  const { config } = useTenant();
  return config.features;
}

/**
 * Hook to check if a specific feature is enabled
 * 
 * @param feature - Feature name to check
 * @returns True if feature is enabled
 */
export function useFeatureEnabled(
  feature: 'enableLabOnboarding' | 'enableProviderOnboarding' | 'enableClientOnboarding' | 'enableAnalytics' | 'enableTracking' | 'enableNotifications'
): boolean {
  const features = useTenantFeatures();
  return features[feature];
}

/**
 * Hook to get post-registration flow configuration
 * 
 * This determines the behavior after kit registration (account creation, etc.)
 * 
 * @returns Post-registration flow configuration
 */
export function usePostRegistrationFlow() {
  const { config } = useTenant();
  return config.tenant_config?.post_registration_flow || {
    account_requirement: 'optional' as const,
    guest_results_access: true,
    show_account_creation_cta: true,
    hosted_portal_preference: 'white_label_hosted' as const,
  };
}

/**
 * Hook to check if account creation should be shown
 * 
 * @returns True if account creation CTA should be displayed
 */
export function useShowAccountCreation(): boolean {
  const flow = usePostRegistrationFlow();
  return flow.show_account_creation_cta;
}

/**
 * Hook to check if guest results access is allowed
 * 
 * @returns True if guests can view results without creating accounts
 */
export function useAllowGuestResults(): boolean {
  const flow = usePostRegistrationFlow();
  return flow.guest_results_access;
}

/**
 * Hook to get support contact information
 * 
 * @returns Support contact details
 */
export function useSupportInfo() {
  const { config } = useTenant();
  return {
    email: config.branding.support_email,
    phone: config.branding.support_phone,
  };
}

/**
 * Hook to get tenant logo URLs
 * 
 * @returns Logo URLs for light and dark themes
 */
export function useTenantLogos() {
  const { config } = useTenant();
  return {
    light: config.branding.logo_url,
    dark: config.branding.logo_dark_url || config.branding.logo_url,
    favicon: config.branding.favicon_url,
  };
}

/**
 * Hook to get tenant color scheme
 * 
 * @returns Color configuration
 */
export function useTenantColors() {
  const { config } = useTenant();
  return {
    primary: config.branding.primary_color,
    secondary: config.branding.secondary_color,
    accent: config.branding.accent_color,
  };
}

/**
 * Hook to get tenant detection information
 * 
 * Useful for debugging or showing admin information about how tenant was detected.
 * 
 * @returns Detection metadata
 */
export function useTenantDetection() {
  const { detectionMethod, tenantId, config } = useTenant();
  return {
    method: detectionMethod,
    tenantId,
    clientCode: config._detection?.client_code,
    isDefault: detectionMethod === 'fallback',
  };
} 