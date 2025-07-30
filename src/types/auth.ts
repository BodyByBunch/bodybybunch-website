export interface WorkOSUser {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
  profile_picture_url?: string;
  organizationId?: string;
  organization_id?: string;
  organizationMemberships?: WorkOSOrganizationMembership[];
  role?: string;
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
  user: WorkOSUser;
  organization_memberships?: WorkOSOrganizationMembership[];
  access_token?: string;
  expires_at?: number;
}

export interface AuthContextType {
  user: WorkOSUser | null;
  session: AuthSession | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
  refreshSession: () => Promise<void>;
} 