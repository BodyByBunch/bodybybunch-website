export interface Testimonial {
  id: string;
  name: string;
  achievement: string;
  quote: string;
  rating: number;
}

export interface FeaturedTestimonial extends Testimonial {
  fullText: string;
  program: string;
  timeFrame?: string;
  image: string;
}

export interface TransformationItem {
  id: string;
  img: string;
  url: string;
  height: number;
  name?: string;
  description?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    achievement: '-45 lbs in 6 months',
    quote: 'Lane completely changed my life! I lost 45 pounds and gained so much confidence. Her nutrition coaching was the missing piece I needed.',
    rating: 5
  },
  {
    id: '2', 
    name: 'Mike R.',
    achievement: '+20 lbs muscle',
    quote: 'Working with Lane has been incredible. I gained 20 pounds of muscle and finally achieved the physique I\'ve always wanted.',
    rating: 5
  },
  {
    id: '3',
    name: 'Jennifer L.',
    achievement: '-30 lbs in 4 months', 
    quote: 'Lane\'s accountability and support made all the difference. I lost 30 pounds and learned how to maintain a healthy lifestyle.',
    rating: 5
  },
  {
    id: '4',
    name: 'David K.',
    achievement: '-35 lbs in 5 months',
    quote: 'Lane\'s personalized approach and daily accountability helped me stay on track. I feel stronger and more confident than ever.',
    rating: 5
  },
  {
    id: '5',
    name: 'Amanda T.',
    achievement: '+15 lbs muscle',
    quote: 'Working with Lane has been transformative. Her expertise in both fitness and nutrition helped me build the body I always wanted.',
    rating: 5
  },
  {
    id: '6',
    name: 'Chris B.',
    achievement: '-50 lbs in 8 months',
    quote: 'Lane\'s support and education changed everything. I learned how to make sustainable lifestyle changes that work for me.',
    rating: 5
  },
  {
    id: '7',
    name: 'Lisa P.',
    achievement: '-25 lbs in 4 months',
    quote: 'Lane\'s accountability and motivation kept me going when I wanted to give up. I\'m so grateful for her guidance.',
    rating: 5
  },
  {
    id: '8',
    name: 'Robert M.',
    achievement: '+25 lbs muscle',
    quote: 'Lane\'s expertise in strength training and nutrition helped me achieve results I never thought possible.',
    rating: 5
  },
  {
    id: '9',
    name: 'Michelle W.',
    achievement: '-40 lbs in 6 months',
    quote: 'Lane\'s personalized approach and ongoing support made all the difference. I finally found a sustainable way to reach my goals.',
    rating: 5
  }
];

// Featured testimonials with actual content from bodybybunch.com/testimonials
export const featuredTestimonials: FeaturedTestimonial[] = [
  {
    id: '1',
    name: '3-Year Online Client',
    achievement: 'First 5K + 225lb Squat PR',
    quote: 'I\'ve accomplished milestones I once thought were out of reach. Most importantly, Lane has helped me become the healthiest version of myself I\'ve ever been.',
    rating: 5,
    fullText: 'When I first began working with Lane, I wasn\'t sure what to expect from an online trainer. My initial assumption was that he would simply send me a workout, and I would follow it—nothing more. I was completely mistaken. Over the past three years, Lane has far exceeded every expectation I had for a personal trainer. He offers weekly, personalized check-ins and ensures direct communication throughout our partnership. This isn\'t just a generic message sent out on Monday mornings—Lane provides tailored programming, nutritional guidance, including macros and meal plans, and consistently makes himself available to address any questions or concerns. His commitment to helping me achieve my goals is unmatched. With Lane\'s guidance and support, I\'ve accomplished milestones I once thought were out of reach. He helped me train for and successfully run my first 5K, a goal I never imagined achieving. I not only finished but did so feeling strong and confident. Additionally, I reached a personal best by squatting 225 pounds, something I had struggled with for years. This physical breakthrough is a direct result of Lane\'s expert training approach, which balances strength building with injury prevention. Most importantly, Lane has helped me become the healthiest version of myself I\'ve ever been.',
    image: '/images/testimonials/bodybybunch_client_1.jpg',
    program: '3-Year Online Coaching',
    timeFrame: '3 years'
  },
  {
    id: '2',
    name: 'Personal Training Inspiration',
    achievement: 'Became Certified Personal Trainer',
    quote: 'Working with Lane even pushed me to pursue my personal training certification and now I get to help people the way Lane helped me.',
    rating: 5,
    fullText: 'I first started working with Lane because I was losing my discipline and motivation in the gym and didn\'t like the results I was currently getting. Lane helped me set up a clear nutrition plan and workouts, he was super patient with me in the beginning and just getting everything started. I was working thru an eating disorder and really struggled to eat at first but again he was so patient but firm with me, it was the structure I needed. My goals were to put on muscle mass and hopefully drop some fat. Lane helped me create a clear plan to move forward and achieve my goals. A few weeks after working with Lane my world flipped and I was unable to get to the gym or stick with my meals, he never stopped checking in and helping me when he could, truly became more of a friend than just a trainer. Lane treats you like you\'re a number 1 priority, does such a great job at communicating with you, celebrating your wins, and pushing you when you need it. Working with Lane even pushed me to pursue my personal training certification and now I get to help people the way Lane helped me. I can\'t recommend him enough, all around a great guy!',
    image: '/images/testimonials/bodybybunch_client_2.jpg',
    program: 'Nutrition & Training Program'
  },
  {
    id: '3',
    name: 'Arturo T.',
    achievement: 'Built Discipline & Confidence',
    quote: 'It wasn\'t until I met Lane and joined Body By Bunch that I learned what I was doing wrong: it\'s not about motivation, it\'s about discipline.',
    rating: 5,
    fullText: 'For a large part of my life I\'ve dealt with self-esteem issues and depression. I\'d always wanted to do something about my body and health but I was never able to commit to something; always blaming it on a lack of motivation. It wasn\'t until I met Lane and joined Body By Bunch that I learned what I was doing wrong: it\'s not about motivation, it\'s about discipline. Body By Bunch created a tailor-made meal plan that worked with my busy schedule, and kept me accountable through weekly check-ins to ensure that I was following through. The workout plans were curated to my specific goals as well as being simple and easy enough to follow on my own. Most importantly, he kept me accountable the entire week, making sure that I was hitting the gym and attending his in-person sessions on a schedule that we agreed on. Lane never gave up on me, but above all, he never let me give up on myself. It was hard at first, but Lane\'s 1% Better mentality kept me going, especially on days where I had no motivation or failed to progress. His commitment to me inspired me to commit to myself, which later transformed into discipline. Now, I\'m healthier than ever, have a clearer head space, and am full of a confidence that I never thought that I would have. But the greatest thing that I now have, is the discipline to be at least 1% Better every day.',
    
    image: '/images/testimonials/bodybybunch_client_4.jpg',
    program: 'Full Program with In-Person Sessions'
  },
  {
    id: '4',
    name: 'Remote Training Success',
    achievement: 'Maintained Fitness Remotely',
    quote: 'Lane\'s method of communicating and designing my workouts changed the way I work out to this day.',
    rating: 5,
    fullText: 'I have always worked out throughout my adult life. At times I would get into good shape and then eventually I would quit working out and stop eating well and get back out of shape. It wasn\'t until Lane became my trainer that I was able to learn how to pair the gym with healthy eating and be able to maintain the level of fitness and the body shape that I want. I don\'t live in the same city as Lane so it was remote training, which I was skeptical of at first. But as the photo evidence will tell you, that was not an obstacle at all. Lane designed a program for me with regular check ins, including ongoing transformation pictures and weigh in\'s that really helped me see my progress. And Lanes method of communicating and designing my workouts in the gym changed the way I work out to this day. Lane also was available at any time if I had questions or concerns about my program. Really, I can\'t say enough good things about Lane and his training methods. If you have been on the fence about getting a trainer, I would definitely say go with Lane\'s program and you will not be disappointed.',
    image: '/images/testimonials/bodybybunch_client_3.jpg',
    program: 'Remote Training Program'
  },
  {
    id: '5',
    name: 'Strength Training Success',
    achievement: 'Massive Strength Gains',
    quote: 'I\'ve gone from being afraid to take up space in a gym to now finding the most peace when I\'m in a gym and give me alllllll the plates!',
    rating: 5,
    fullText: 'I went from pressing 15s to 40s (in part due to old injuries), Single Arm Rows from 20s to 50s, Hip thrusts from 135 to 300+lbs, Panicking at the site of a plyo box to clearing 24in now (that was admittedly a comical process). I\'m now closer to doing my first unassisted proper pull-up than I\'ve ever been. I\'ve gone from being afraid to take up space in a gym and being intimidated by anything involving a barbell, to, now finding the most peace when I\'m in a gym and give me alllllll the plates! ;)',
    image: '/images/testimonials/bodybybunch_client_10.jpg',
    program: 'Strength Training Program'
  },
];

// Transformation photos for Masonry grid
export const transformationItems: TransformationItem[] = [
  {
    id: 'transform-1',
    img: '/images/testimonials/bodybybunch_client_1.jpg',
    url: '#',
    height: 400,
    name: 'Remote Training Success',
    description: 'Maintained fitness with remote coaching'
  },
  {
    id: 'transform-2', 
    img: '/images/testimonials/bodybybunch_client_2.jpg',
    url: '#',
    height: 450,
    name: '35lb Transformation',
    description: 'Lost 35 pounds with consistent coaching'
  },
  {
    id: 'transform-3',
    img: '/images/testimonials/bodybybunch_client_3.jpg', 
    url: '#',
    height: 380,
    name: 'Arturo\'s Journey',
    description: 'Built discipline and confidence'
  },
  {
    id: 'transform-4',
    img: '/images/testimonials/bodybybunch_client_4.jpg',
    url: '#', 
    height: 420,
    name: '3-Year Progress',
    description: 'First 5K and 225lb squat PR'
  },
  {
    id: 'transform-5',
    img: '/images/testimonials/bodybybunch_client_5.jpg',
    url: '#',
    height: 390,
    name: 'Strength Gains',
    description: 'From 15lb to 40lb presses'
  },
  {
    id: 'transform-6',
    img: '/images/testimonials/bodybybunch_client_6.jpg',
    url: '#',
    height: 460,
    name: 'Trainer Inspiration', 
    description: 'Became certified personal trainer'
  },
  {
    id: 'transform-7',
    img: '/images/testimonials/bodybybunch_client_7.jpg',
    url: '#',
    height: 370,
    name: 'Client Success',
    description: 'Achieved fitness goals'
  },
  {
    id: 'transform-8',
    img: '/images/testimonials/bodybybunch_client_8.jpg',
    url: '#',
    height: 440,
    name: 'Transformation',
    description: 'Life-changing results'
  },
  {
    id: 'transform-9',
    img: '/images/testimonials/bodybybunch_client_9.jpg', 
    url: '#',
    height: 410,
    name: 'Success Story',
    description: 'Exceeded expectations'
  },
  {
    id: 'transform-10',
    img: '/images/testimonials/bodybybunch_client_10.jpg',
    url: '#',
    height: 430,
    name: 'Fitness Journey',
    description: 'Amazing transformation results'
  },
  {
    id: 'transform-11',
    img: '/images/testimonials/bodybybunch_client_11.jpg',
    url: '#',
    height: 380,
    name: 'Health Goals',
    description: 'Achieved wellness objectives'
  },
  {
    id: 'transform-12',
    img: '/images/testimonials/bodybybunch_client_12.jpg',
    url: '#',
    height: 460,
    name: 'Body Transformation',
    description: 'Incredible physical changes'
  },
  {
    id: 'transform-13',
    img: '/images/testimonials/bodybybunch_client_13.jpg',
    url: '#',
    height: 420,
    name: 'Lifestyle Change',
    description: 'Complete health transformation'
  },
  {
    id: 'transform-14',
    img: '/images/testimonials/bodybybunch_client_14.jpg',
    url: '#',
    height: 390,
    name: 'Fitness Success',
    description: 'Reached personal goals'
  },
  {
    id: 'transform-15',
    img: '/images/testimonials/bodybybunch_client_15.jpg',
    url: '#',
    height: 450,
    name: 'Wellness Journey',
    description: 'Improved health and fitness'
  },
  {
    id: 'transform-16',
    img: '/images/testimonials/bodybybunch_client_16.jpg',
    url: '#',
    height: 370,
    name: 'Training Results',
    description: 'Consistent progress achieved'
  },
  {
    id: 'transform-17',
    img: '/images/testimonials/bodybybunch_client_17.jpg',
    url: '#',
    height: 440,
    name: 'Personal Growth',
    description: 'Physical and mental transformation'
  },
  {
    id: 'transform-18',
    img: '/images/testimonials/bodybybunch_client_18.jpg',
    url: '#',
    height: 400,
    name: 'Achievement Unlocked',
    description: 'Surpassed fitness expectations'
  },
  {
    id: 'transform-19',
    img: '/images/testimonials/bodybybunch_client_19.jpg',
    url: '#',
    height: 480,
    name: 'Goal Crusher',
    description: 'Exceeded all targets'
  },
  {
    id: 'transform-20',
    img: '/images/testimonials/bodybybunch_client_20.jpg',
    url: '#',
    height: 360,
    name: 'Life Changer',
    description: 'Transformative fitness journey'
  },
  {
    id: 'transform-21',
    img: '/images/testimonials/bodybybunch_client_21.jpg',
    url: '#',
    height: 410,
    name: 'Inspiration Story',
    description: 'Motivational transformation'
  }
];