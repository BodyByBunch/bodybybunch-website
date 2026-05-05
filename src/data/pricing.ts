export type PricingPeriod = '1year' | '6months' | '3months';

export const PRICING_PERIODS: Array<{ value: PricingPeriod; label: string }> = [
  { value: '1year', label: '1 Year' },
  { value: '6months', label: '6 Months' },
  { value: '3months', label: '3 Months' },
];

export const PRICING_PLANS = [
  {
    id: 'workout',
    title: 'Workout Coaching Only',
    description: 'Perfect for individuals looking to start their fitness journey.',
    featured: false,
    prices: {
      '1year': 50,
      '6months': 75,
      '3months': 100,
    },
    features: [
      { label: 'Form Corrections & Cues', included: true },
      { label: 'Progressive Overloading', included: true },
      { label: 'Biomechanics Guidance', included: true },
      { label: 'Nutrition Coaching', included: false },
      { label: 'Daily Accountability', included: false },
    ],
  },
  {
    id: 'full',
    title: 'Full Program',
    description: 'Ideal for comprehensive transformation with complete support.',
    featured: true,
    prices: {
      '1year': 125,
      '6months': 150,
      '3months': 175,
    },
    features: [
      { label: 'Complete Cardio, Nutrition & Workout Programs', included: true },
      { label: 'Coaching, Education & Zoom Meetings', included: true },
      { label: 'Form Corrections & Progressive Overloading', included: true },
      { label: 'Daily Nutritional Coaching', included: true },
      { label: '3-6x Weekly Check-ins', included: true },
      { label: 'Weekly Monday Data Analysis', included: true },
      { label: '24/7 Support & Accountability', included: true },
    ],
  },
  {
    id: 'nutrition',
    title: 'Nutrition Coaching Only',
    description: 'Focus on nutritional guidance and lifestyle coaching.',
    featured: false,
    prices: {
      '1year': 50,
      '6months': 75,
      '3months': 100,
    },
    features: [
      { label: 'Daily Nutritional Coaching', included: true },
      { label: 'Macro Manipulation Guidance', included: true },
      { label: 'Lifestyle Education (Not Meal Plans)', included: true },
      { label: 'Weekly Check-ins', included: true },
      { label: 'Workout Programming', included: false },
      { label: 'Personal Training Sessions', included: false },
    ],
  },
] as const;
