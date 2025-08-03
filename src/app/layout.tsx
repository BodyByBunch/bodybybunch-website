import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { StructuredData } from '@/components/seo/structured-data';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Body By Bunch - Personal Training & Fitness Coaching',
    template: '%s | Body By Bunch'
  },
  description:
    'Transform your life with Lane Bunch, NASM Certified Personal Trainer & Nutrition Coach. Personalized fitness programs, nutrition coaching, and accountability in San Antonio, TX.',
  keywords: [
    'personal trainer',
    'fitness coach', 
    'nutrition coach',
    'weight loss',
    'muscle building',
    'San Antonio TX',
    'NASM certified',
    'transformation coach',
    'body transformation',
    'fitness training',
    'health coaching'
  ],
  authors: [{ name: 'Lane Bunch', url: 'https://bodybybunch.com' }],
  creator: 'Lane Bunch',
  publisher: 'Body By Bunch',
  metadataBase: new URL('https://bodybybunch.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bodybybunch.com',
    siteName: 'Body By Bunch',
    title: 'Body By Bunch - Personal Training & Fitness Coaching',
    description: 'Transform your life with Lane Bunch, NASM Certified Personal Trainer & Nutrition Coach. Personalized fitness programs, nutrition coaching, and accountability in San Antonio, TX.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Body By Bunch - Personal Training & Fitness Coaching',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body By Bunch - Personal Training & Fitness Coaching',
    description: 'Transform your life with Lane Bunch, NASM Certified Personal Trainer & Nutrition Coach.',
    images: ['/og-image.jpg'],
    creator: '@bodybybunch',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Health & Fitness',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
