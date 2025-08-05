import { CalendlyButton } from '@/components/ui/calendly-button';
import { Calendar, Phone } from 'lucide-react';

export default function TestCalendlyPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Calendly Integration Test
        </h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Different Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <CalendlyButton
                calendlyUrl="https://calendly.com/lanebunch-bodybybunch/30min"
                variant="default"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation (Default)
              </CalendlyButton>

              <CalendlyButton
                calendlyUrl="https://calendly.com/lanebunch-bodybybunch/phone-meeting"
                variant="outline"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book a Call (Outline)
              </CalendlyButton>

              <CalendlyButton
                calendlyUrl="https://calendly.com/lanebunch-bodybybunch/30min"
                variant="secondary"
              >
                Schedule Demo (Secondary)
              </CalendlyButton>

              <CalendlyButton
                calendlyUrl="https://calendly.com/lanebunch-bodybybunch/30min"
                variant="ghost"
                size="sm"
              >
                Quick Chat (Ghost)
              </CalendlyButton>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Custom Styled Example</h2>
            <CalendlyButton
              calendlyUrl="https://calendly.com/lanebunch-bodybybunch/30min"
              variant="default"
              className="w-full bg-brand-sky hover:bg-primary text-white"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Transformation Call
            </CalendlyButton>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Setup Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Replace "https://calendly.com/your-calendly-url" with your actual Calendly URL</li>
              <li>Test that the popup appears when clicking the buttons</li>
              <li>Verify the fallback behavior opens in a new tab if scripts fail to load</li>
              <li>Once confirmed working, integrate into your actual components</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}