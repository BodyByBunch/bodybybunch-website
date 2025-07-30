// Generic user interface that can work with various auth providers
export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
  profile_picture_url?: string;
  role?: string;
}

// WorkOS specific types (for future integration)
export interface WorkOSUser extends User {
  organizationId?: string;
  organization_id?: string;
  organizationMemberships?: WorkOSOrganizationMembership[];
  roleSlug?: string;
}

export interface WorkOSOrganization {
  id: string;
  name: string;
  object: string;
  created_at: string;
  updated_at: string;
}

export interface WorkOSOrganizationMembership {
  id: string;
  user_id: string;
  organization_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AuthSession {
  user: User;
  access_token?: string;
  expires_at?: number;
}

export interface AuthContextType {
  user: User | null;
  session: AuthSession | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
  refreshSession: () => Promise<void>;
} 