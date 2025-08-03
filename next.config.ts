import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  async rewrites() {
    // Use environment variables for API base URLs with fallback
    const PUBLIC_API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace('/v2/public', '') || 'http://localhost:8001';
    
    return [
      // Auth endpoints - use rewrites to avoid streaming conflicts
      {
        source: '/api/auth/me',
        destination: `${PUBLIC_API_BASE}/v2/public/auth/me/workos`,
      },
      {
        source: '/api/auth/login',
        destination: `${PUBLIC_API_BASE}/v2/public/auth/login`,
      },
      {
        source: '/api/auth/logout',
        destination: `${PUBLIC_API_BASE}/v2/public/auth/logout`,
      },
      {
        source: '/api/auth/callback',
        destination: `${PUBLIC_API_BASE}/v2/public/auth/callback`,
      },
      // Tenant configuration endpoints
      {
        source: '/api/tenant/config',
        destination: `${PUBLIC_API_BASE}/v2/public/tenant/config`,
      },
      {
        source: '/api/tenant/branding',
        destination: `${PUBLIC_API_BASE}/v2/public/tenant/branding`,
      },
    ];
  },
};

export default nextConfig;
