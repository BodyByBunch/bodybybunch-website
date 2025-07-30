export interface TenantConfig {
  white_label_domain?: string;
  workos_organization_id?: string;  // Add WorkOS organization ID for account creation
  post_registration_flow: PostRegistrationFlow;
}

export interface PostRegistrationFlow {
  existing_portal_redirect: boolean;
  existing_portal_url?: string;
  account_requirement: 'required' | 'encouraged' | 'guest_only' | 'external_only';
  guest_results_access: boolean;
  show_account_creation_cta: boolean;
  hosted_portal_preference: 'fully_hosted' | 'white_label_hosted' | 'redirect_external';
}

// Legacy interface for backward compatibility (can be removed later)
export interface TenantFeatures {
  hosted_portal: boolean;
  allow_guest_results: boolean;
  require_account: boolean;
  registration_only: boolean;
  show_create_account_cta: boolean;
} 