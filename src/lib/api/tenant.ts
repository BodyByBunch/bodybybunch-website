import { apiClient } from './client';

export interface TenantConfig {
  id: string;
  name: string;
  display_name: string;
  logo_url?: string;
  favicon_url?: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  support_email: string;
  support_phone?: string;
  enable_account_creation: boolean;
  enable_guest_results: boolean;
  enable_notifications: boolean;
  enable_analytics: boolean;
}

export interface TenantBranding {
  logo_url?: string;
  favicon_url?: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  custom_css?: string;
}

/**
 * Fetch tenant configuration by client code
 */
export async function fetchTenantConfig(clientCode: string): Promise<TenantConfig> {
  return apiClient.get<TenantConfig>('/tenant/config', { client_code: clientCode });
}

/**
 * Fetch tenant branding information
 */
export async function fetchTenantBranding(clientCode: string): Promise<TenantBranding> {
  return apiClient.get<TenantBranding>('/tenant/branding', { client_code: clientCode });
} 