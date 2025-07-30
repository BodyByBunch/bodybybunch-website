// Common types used across the application
export interface User {
  id: string;
  email: string;
  name?: string;
  organization_id?: string;
  role?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'select' | 'textarea' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string; }[];
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  children?: NavItem[];
}

// User and patient types
export type { RegisteredTo, PatientInfo } from './user';

// Auth types
export type { User, AuthSession, AuthContextType, WorkOSUser } from './auth'; 