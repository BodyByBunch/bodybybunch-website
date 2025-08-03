import { Navbar } from "./navbar";
import { Footer } from "@/components/footer/footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 max-w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
} 