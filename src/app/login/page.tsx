'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = '/api/auth/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C4HXP</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Consult4HealthXP</h1>
                <p className="text-blue-600 font-medium">Client Portal</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access your health data, manage your test kits, and view your results 
              through our secure, healthcare-grade platform.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure Access</h3>
                <p className="text-sm text-gray-600">HIPAA-compliant with enterprise-grade security</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Real-time Results</h3>
                <p className="text-sm text-gray-600">Get notified when your test results are ready</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Health Management</h3>
                <p className="text-sm text-gray-600">Track your health journey with comprehensive data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="mx-auto mb-6 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center lg:hidden">
                <span className="text-white font-bold text-2xl">C4HXP</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600">
                  Sign in to access your Consult4HealthXP client portal
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              <Button 
                onClick={handleLogin}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-all duration-200 group"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in to Consult4HealthXP
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Secured by enterprise-grade authentication
                </p>
                <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-400">
                  <span>SSO Support</span>
                  <span>•</span>
                  <span>MFA Enabled</span>
                  <span>•</span>
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 