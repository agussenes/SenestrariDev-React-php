// src/components/partials/SEOJsonLD.jsx
import { Helmet } from 'react-helmet-async';

const SEOJsonLD = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Senestrari Dev",
          "url": "https://senestraridev.com",
          "description": "Desarrollo web Full Stack con experiencia en tecnologías modernas como React, Node.js, WordPress y GitHub.",
          "inLanguage": "es",
          "author": {
            "@type": "Person",
            "name": "Senestrari Dev"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+54-351-3505160",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOJsonLD;
