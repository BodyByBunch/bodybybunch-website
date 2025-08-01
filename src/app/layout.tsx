import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Body By Bunch - Personal Training & Fitness Coaching",
  description: "Transform your life with Lane Bunch, NASM Certified Personal Trainer & Nutrition Coach. Fitness, Nutrition, Accountability - San Antonio, TX",
  keywords: "personal trainer, fitness coach, nutrition coach, weight loss, San Antonio TX, NASM certified",
  authors: [{ name: "Lane Bunch" }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Body By Bunch - Personal Training & Fitness Coaching",
    description: "Transform your life with Lane Bunch, NASM Certified Personal Trainer & Nutrition Coach",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
