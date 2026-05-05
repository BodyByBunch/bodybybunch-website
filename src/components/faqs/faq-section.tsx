'use client';

import { useId, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

import { ContactButton } from '@/components/ui/contact-button';
import { SITE_CTA_LABELS } from '@/data/site';
import { ctaStyles, headingStyles, sectionStyles } from '@/lib/design';
import { cn } from '@/lib/utils';

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type FAQSectionProps = {
  items?: FAQItem[];
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  showCta?: boolean;
};

const DEFAULT_COPY = {
  eyebrow: 'Questions',
  title: 'Frequently Asked Questions',
  lead: 'Clear answers about coaching, pricing, training, nutrition, and what it is like to work with Body By Bunch.',
} as const;

function FAQEmptyState() {
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface-raised px-6 py-10 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-proof/10 text-proof">
        <HelpCircle className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">FAQ content is being finalized</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
        This section is ready for the owner&apos;s real questions and answers before it is added to the live page.
      </p>
    </div>
  );
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="rounded-lg border border-border bg-surface-raised shadow-sm transition-colors hover:border-action/35">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-semibold leading-6 text-foreground transition-colors hover:text-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6"
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <ChevronDown
            className={cn('mt-0.5 h-5 w-5 flex-shrink-0 text-action transition-transform', isOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-5 pb-5 sm:px-6"
      >
        <p className="border-t border-border pt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection({
  items = [],
  id = 'faqs',
  eyebrow = DEFAULT_COPY.eyebrow,
  title = DEFAULT_COPY.title,
  lead = DEFAULT_COPY.lead,
  showCta = true,
}: FAQSectionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(items[0]?.id ?? null);
  const hasItems = items.length > 0;

  return (
    <section id={id} className={sectionStyles.muted}>
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className={cn(headingStyles.rule, 'mb-5 mx-0')} />
            <p className={headingStyles.eyebrow}>{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {lead}
            </p>
            {showCta ? (
              <div className="mt-7">
                <ContactButton className={ctaStyles.outline}>
                  {SITE_CTA_LABELS.callback}
                </ContactButton>
              </div>
            ) : null}
          </div>

          <div className="space-y-3">
            {hasItems ? (
              items.map((item) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItemId === item.id}
                  onToggle={() => setOpenItemId((current) => (current === item.id ? null : item.id))}
                />
              ))
            ) : (
              <FAQEmptyState />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
