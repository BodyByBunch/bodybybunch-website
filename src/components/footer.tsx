import { Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Body By Bunch</h3>
          <p className="text-muted-foreground mb-4">
            NASM Certified Personal Trainer<br />
            NASM Certified Nutrition Coach
          </p>
          <div className="flex items-center justify-center text-brand-orange-light">
            <Phone className="mr-2 h-5 w-5" />
            <span className="text-lg font-semibold">(512) 818-4281</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground text-sm">
            Lane Bunch | Body By Bunch © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}