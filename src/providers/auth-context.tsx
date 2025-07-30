'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import type { AuthContextType, AuthSession, User } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/about', '/plans', '/testimonials', '/contact'];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
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
      // TODO: Implement actual auth check when auth system is added
      // For now, just set loading to false
      setIsLoading(false);
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      setSession(null);
      setIsLoading(false);
    }
  };

  const signIn = () => {
    // TODO: Implement sign in when auth system is added
    console.log('Sign in not implemented yet');
  };

  const signOut = async () => {
    // Clear local state immediately
    setUser(null);
    setSession(null);
    
    try {
      // TODO: Implement actual sign out when auth system is added
      console.log('Sign out not implemented yet');
      
      // Redirect to home page after successful logout
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Fallback: redirect to home page
      router.push('/');
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