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
  description: "Transform your life with Lane Bunch, NASM Certified Personal Trainer & Nutrition Coach. Fitness, Nutrition, Accountability - Austin, TX",
  keywords: "personal trainer, fitness coach, nutrition coach, weight loss, Austin TX, NASM certified",
  authors: [{ name: "Lane Bunch" }],
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
