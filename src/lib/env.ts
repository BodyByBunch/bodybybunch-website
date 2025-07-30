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
  NEXT_PUBLIC_APP_NAME: getEnvVar('NEXT_PUBLIC_APP_NAME', 'Next.js App'),
  
  // API Configuration
  NEXT_PUBLIC_API_BASE_URL: getEnvVar('NEXT_PUBLIC_API_BASE_URL', 'http://localhost:8000/api'),
  
  // NextAuth Configuration
  NEXTAUTH_URL: getEnvVar('NEXTAUTH_URL', 'http://localhost:3000'),
  NEXTAUTH_SECRET: getEnvVar('NEXTAUTH_SECRET'),
  
  // Feature Flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_ANALYTICS', true),
  NEXT_PUBLIC_ENABLE_NOTIFICATIONS: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_NOTIFICATIONS', false),
  
  // Development
  NODE_ENV: process.env.NODE_ENV || 'development',
  NEXT_PUBLIC_DEBUG_MODE: getBooleanEnvVar('NEXT_PUBLIC_DEBUG_MODE', false),
} as const;

// Type export for use in other files
export type Environment = typeof env; 