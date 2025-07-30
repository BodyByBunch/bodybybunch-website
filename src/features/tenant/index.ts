/**
 * Client Portal Tenant System
 * 
 * Simplified, guest-friendly tenant management for the C4HXP client portal.
 * Supports both environment-based and API-driven tenant configuration.
 * 
 * @example Basic usage:
 * ```typescript
 * import { useTenantConfig, useTenantLogos, useIsGuest } from '@/tenant';
 * 
 * function MyComponent() {
 *   const { config } = useTenantConfig();
 *   const logos = useTenantLogos();
 *   const isGuest = useIsGuest();
 *   
 *   return (
 *     <div>
 *       <img src={logos.light} alt={config.name} />
 *       {isGuest ? 'Welcome, Guest!' : 'Welcome back!'}
 *     </div>
 *   );
 * }
 * ```
 * 
 * @example Environment setup:
 * ```bash
 * # Simple single-tenant setup
 * NEXT_PUBLIC_TENANT_NAME="SecureHealth Portal"
 * NEXT_PUBLIC_PRIMARY_COLOR="#1e40af"
 * NEXT_PUBLIC_ENABLE_DYNAMIC_TENANTS="false"
 * 
 * # Multi-tenant setup with API
 * NEXT_PUBLIC_ENABLE_DYNAMIC_TENANTS="true"
 * NEXT_PUBLIC_API_BASE_URL="http://localhost:8001"
 * ```
 */

// Types
export type {
  TenantConfig,
  TenantContext,
  TenantBranding,
  UseTenantReturn,
  UseTenantConfigReturn,
  UseTenantBrandingReturn,
  EnvironmentTenantConfig,
  TenantApiClient,
  TenantDetectionConfig,
} from './types';

// Context and Provider
export { TenantProvider, useTenant } from './context';

// Hooks
export {
  useTenantContext,
  useTenantConfig,
  useTenantBranding,
  useIsGuest,
  useUserRole,
  useHasRole,
  useIsPatient,
  useIsAdmin,
  useTenantFeatures,
  useFeatureEnabled,
  usePostRegistrationFlow,
  useShowAccountCreation,
  useAllowGuestResults,
  useSupportInfo,
  useTenantLogos,
  useTenantColors,
  useTenantDetection,
} from './hooks'; 