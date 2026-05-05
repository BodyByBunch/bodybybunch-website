export const SITE_CONTACT = {
  phoneDisplay: '(512) 818-4281',
  phoneHref: 'tel:+15128184281',
  location: 'San Antonio, TX',
} as const;

export const SITE_CTA_LABELS = {
  callback: 'Request a Callback',
  consultation: 'Schedule Free Consultation',
  getStarted: 'Get Started Today',
} as const;

export const SITE_NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '#pricing', label: 'Plans + Pricing' },
  { href: '/testimonials', label: 'Client Testimonials' },
  { href: '#faqs', label: 'FAQs' },
] as const;

export const SITE_SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/bodybybunch' },
  { name: 'Facebook', href: 'https://facebook.com/lane.bunch.35' },
  { name: 'TikTok', href: 'https://tiktok.com/@bodybybunch' },
] as const;

export const FOOTER_LINK_GROUPS = [
  {
    title: 'Services',
    links: [
      { label: 'Personal Training', href: '/#pricing' },
      { label: 'Nutrition Coaching', href: '/#pricing' },
      { label: 'Full Program', href: '/#pricing' },
      { label: 'Daily Accountability', href: '/#services' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Lane', href: '/about' },
      { label: 'Success Stories', href: '/testimonials' },
      { label: 'Training Philosophy', href: '/about' },
      { label: 'Credentials', href: '/about' },
    ],
  },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
] as const;

export const HERO_IMAGES = {
  light: [
    '/images/hero/sliderbg-2-bodybybunch.jpg',
    '/images/training/IMG_0577.jpeg',
    '/images/training/IMG_0570.jpeg',
    '/images/training/IMG_0561.jpeg',
    '/images/training/IMG_0572.jpeg',
    '/images/training/IMG_0565.jpeg',
    '/images/training/IMG_0575.jpeg',
  ],
  dark: [
    '/images/hero/sliderbg-2-bodybybunch.jpg',
    '/images/training/IMG_0561.jpeg',
    '/images/training/IMG_0577.jpeg',
    '/images/training/IMG_0570.jpeg',
    '/images/training/IMG_0572.jpeg',
    '/images/training/IMG_0565.jpeg',
    '/images/training/IMG_0575.jpeg',
  ],
} as const;

export const ABOUT_HERO_IMAGES = [
  '/images/about/about_img_8.jpg',
  '/images/about/about_img.jpeg',
  '/images/about/about_img_11.jpg',
  '/images/about/about_img_10.jpg',
  '/images/about/about_img_9.jpg',
  '/images/about/about_img_7.jpg',
  '/images/about/about_img_6.jpg',
  '/images/about/about_img_5.png',
] as const;
