export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Samson Developments",
    "url": "https://samsondevelopments.com.au",
    "logo": "https://samsondevelopments.com.au/samsondevelopments-logo.png",
    "description": "Samson Developments delivers integrated building solutions from initial quote to final sign-off, specializing in emergency and insurance work, demolition, asbestos removal, and technical reporting.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "40 Shaftesbury Road",
      "addressLocality": "Burwood",
      "addressRegion": "NSW",
      "postalCode": "2134",
      "addressCountry": "AU"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+61-2-9123-4567",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+61-1300-888-777",
        "contactType": "emergency",
        "availableLanguage": "English",
        "hoursAvailable": "24/7"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/samsondevelopments",
      "https://www.linkedin.com/company/samsondevelopments",
      "https://www.instagram.com/samsondevelopments"
    ],
    "areaServed": {
      "@type": "State",
      "name": "New South Wales"
    },
    "serviceType": [
      "Construction Management",
      "Emergency Response",
      "Insurance Claim Management",
      "Building Restoration",
      "Demolition Services",
      "Asbestos Removal",
      "Building Consulting"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Samson Developments",
    "image": "https://samsondevelopments.com.au/samsondevelopments-logo.png",
    "telephone": "+61-2-9123-4567",
    "email": "info@samsondevelopments.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "40 Shaftesbury Road",
      "addressLocality": "Burwood",
      "addressRegion": "NSW",
      "postalCode": "2134",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8765,
      "longitude": 151.1012
    },
    "url": "https://samsondevelopments.com.au",
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Integrated Building Solutions",
    "description": "Comprehensive construction management, emergency response, and building restoration services",
    "provider": {
      "@type": "Organization",
      "name": "Samson Developments"
    },
    "areaServed": {
      "@type": "State",
      "name": "New South Wales"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Building Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Project Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Response"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Insurance Claim Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Building Restoration"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}