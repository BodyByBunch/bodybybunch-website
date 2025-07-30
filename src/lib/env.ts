/**
 * Environment configuration with type safety
 * This ensures all required environment variables are properly typed and validated
 */

function getEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name] ?? defaultValue;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getBooleanEnvVar(name: string, defaultValue = false): boolean {
  const value = process.env[name];
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true';
}

export const env = {
  // App Configuration
  NEXT_PUBLIC_APP_URL: getEnvVar('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: getEnvVar('NEXT_PUBLIC_APP_NAME', 'Body By Bunch'),
  
  // API Configuration (for future features like contact forms, booking, etc.)
  NEXT_PUBLIC_API_BASE_URL: getEnvVar('NEXT_PUBLIC_API_BASE_URL', 'http://localhost:8000/api'),
  
  // Contact Form Configuration
  NEXT_PUBLIC_CONTACT_EMAIL: getEnvVar('NEXT_PUBLIC_CONTACT_EMAIL', 'lane@bodybybunch.com'),
  
  // Authentication Configuration (for future WorkOS integration)
  NEXT_PUBLIC_WORKOS_PUBLISHABLE_KEY: getEnvVar('NEXT_PUBLIC_WORKOS_PUBLISHABLE_KEY', ''),
  WORKOS_SECRET_KEY: getEnvVar('WORKOS_SECRET_KEY', ''),
  NEXT_PUBLIC_WORKOS_REDIRECT_URI: getEnvVar('NEXT_PUBLIC_WORKOS_REDIRECT_URI', 'http://localhost:3000/auth/callback'),
  
  // Feature Flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_ANALYTICS', true),
  NEXT_PUBLIC_ENABLE_CONTACT_FORM: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_CONTACT_FORM', true),
  
  // Development
  NODE_ENV: process.env.NODE_ENV || 'development',
  NEXT_PUBLIC_DEBUG_MODE: getBooleanEnvVar('NEXT_PUBLIC_DEBUG_MODE', false),
} as const;

// Type export for use in other files
export type Environment = typeof env; 