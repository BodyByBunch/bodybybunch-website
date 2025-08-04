import { Instagram, Facebook, LucideIcon } from 'lucide-react';

// TikTok icon component since it's not available in lucide-react
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface SocialIconsProps {
  links?: SocialLink[];
  className?: string;
  iconClassName?: string;
  show?: boolean;
}

// Default social links for Body By Bunch
const defaultSocialLinks: SocialLink[] = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/bodybybunch" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/lane.bunch.35" },
  { name: "TikTok", icon: TikTok, href: "https://tiktok.com/@bodybybunch" },
];

export function SocialIcons({ 
  links = defaultSocialLinks, 
  className = "flex space-x-4",
  iconClassName = "h-5 w-5",
  show = true 
}: SocialIconsProps) {
  if (!show) return null;

  return (
    <div className={className}>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-muted-foreground hover:text-brand-orange transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
} 