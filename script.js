function addStructuredData() {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Ra Vattra's Resume",
      "url": "https://vattraf4.github.io/Ra-Vattra-Resume-Kh-and-Eng",
      "image": "https://vattraf4.github.io/Ra-Vattra-Resume-Kh-and-Eng/Source/icon/fav-image.png",
      "description": "Explore Ra Vattra's online resume, an IT student at RUPP with a passion for coding and GitHub projects.",
      "publisher": {
        "@type": "Organization",
        "name": "Ra Vattra",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vattraf4.github.io/Ra-Vattra-Resume-Kh-and-Eng/Source/icon/fav-image.png"
        }
      }
    });
    document.head.appendChild(script);
  }
  // Call the function to add structured data to the document head
  addStructuredData();

  
