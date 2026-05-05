export const sectionStyles = {
  default: 'py-20 bg-background text-foreground',
  muted: 'py-20 bg-muted/30 text-foreground',
  strong: 'py-20 bg-section-strong text-section-strong-foreground',
} as const;

export const headingStyles = {
  eyebrow: 'font-semibold tracking-wide uppercase text-sm text-proof',
  sectionTitle: 'text-3xl sm:text-4xl font-bold text-foreground',
  strongSectionTitle: 'text-3xl sm:text-4xl font-bold text-section-strong-foreground',
  sectionLead: 'text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto',
  strongSectionLead: 'text-lg sm:text-xl text-section-strong-foreground/75 max-w-3xl mx-auto',
  rule: 'w-16 h-1 bg-proof mx-auto',
} as const;

export const ctaStyles = {
  primary: 'bg-action text-action-foreground hover:bg-action-hover',
  outline: 'border-action text-action hover:bg-action hover:text-action-foreground',
  proof: 'border-proof text-proof hover:bg-proof hover:text-brand',
} as const;

export const mediaStyles = {
  placeholder: 'bg-muted dark:bg-muted',
  overlay: 'bg-gradient-to-t from-media-overlay to-transparent',
  raised: 'bg-surface-raised text-foreground border-border',
} as const;
