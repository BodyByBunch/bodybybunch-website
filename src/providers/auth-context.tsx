'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import type { AuthContextType, AuthSession, WorkOSUser } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/sign-up', '/auth/callback', '/registration/success', '/thank-you'];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<WorkOSUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const isAuthenticated = !!user;

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Use Next.js rewrite to avoid streaming conflicts
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('/api/auth/me', {
        credentials: 'include',
        // Add cache control to prevent streaming conflicts
        cache: 'no-store',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const userData = await response.json();
        
        // Check if backend is requesting a redirect (for patient/org_user roles)
        if (userData && typeof userData === 'object' && 'redirect_to' in userData) {
          console.log(`🔍 [FRONTEND REDIRECT DEBUG] Backend requested redirect to: ${userData.redirect_to}`);
          console.log(`🔍 [FRONTEND REDIRECT DEBUG] Reason: ${userData.reason}`);
          window.location.href = userData.redirect_to;
          return;
        }
        
        setUser(userData);
        setSession({ user: userData });
      } else {
        setUser(null);
        setSession(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Auth check timed out');
      }
      setUser(null);
      setSession(null);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = () => {
    // Use the Next.js rewrite to avoid streaming conflicts
    const currentPath = window.location.pathname;
    const loginUrl = `/api/auth/login?return_to=${encodeURIComponent(currentPath)}`;
    window.location.href = loginUrl;
  };

  const signOut = async () => {
    // Clear local state immediately
    setUser(null);
    setSession(null);
    
    try {
      // Use Next.js rewrite to avoid streaming conflicts
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      // Redirect to login page after successful logout
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Logout timed out');
      }
      // Fallback: redirect to login page
      router.push('/login');
    }
  };

  const refreshSession = async () => {
    await checkAuthStatus();
  };

  const value: AuthContextType = {
    user,
    session,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
    refreshSession,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 