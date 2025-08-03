export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://bodybybunch.com/#business",
        "name": "Body By Bunch",
        "alternateName": "Body By Bunch Personal Training",
        "description": "NASM Certified Personal Trainer and Nutrition Coach specializing in body transformations, weight loss, and fitness coaching in San Antonio, TX.",
        "url": "https://bodybybunch.com",
        "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
        "email": "info@bodybybunch.com", // Replace with actual email
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Antonio",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "29.4241",
          "longitude": "-98.4936"
        },
        "openingHours": [
          "Mo-Fr 06:00-20:00",
          "Sa 08:00-18:00",
          "Su 10:00-16:00"
        ],
        "priceRange": "$$",
        "image": "https://bodybybunch.com/og-image.jpg",
        "founder": {
          "@type": "Person",
          "name": "Lane Bunch",
          "jobTitle": "NASM Certified Personal Trainer & Nutrition Coach",
          "image": "https://bodybybunch.com/images/team/lane-bunch-headshot.jpg",
          "sameAs": [
            "https://www.instagram.com/bodybybunch",
            "https://www.facebook.com/bodybybunch"
          ]
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "29.4241",
            "longitude": "-98.4936"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Personal Training Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Personal Training",
                "description": "One-on-one personalized fitness training sessions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nutrition Coaching",
                "description": "Personalized nutrition plans and coaching"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Program",
                "description": "Complete transformation program with training and nutrition"
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://bodybybunch.com/#person",
        "name": "Lane Bunch",
        "jobTitle": "NASM Certified Personal Trainer & Nutrition Coach",
        "description": "NASM Certified Personal Trainer and Nutrition Coach helping clients achieve body transformations through personalized fitness and nutrition programs.",
        "url": "https://bodybybunch.com/about",
        "image": "https://bodybybunch.com/images/team/lane-bunch-headshot.jpg",
        "knowsAbout": [
          "Personal Training",
          "Nutrition Coaching",
          "Weight Loss",
          "Body Transformation",
          "Fitness Coaching",
          "Health Coaching"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "NASM Certified Personal Trainer",
            "credentialCategory": "Professional Certification"
          }
        ],
        "worksFor": {
          "@id": "https://bodybybunch.com/#business"
        },
        "sameAs": [
          "https://www.instagram.com/bodybybunch",
          "https://www.facebook.com/bodybybunch"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bodybybunch.com/#website",
        "url": "https://bodybybunch.com",
        "name": "Body By Bunch",
        "description": "Personal Training and Fitness Coaching with Lane Bunch in San Antonio, TX",
        "publisher": {
          "@id": "https://bodybybunch.com/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bodybybunch.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}