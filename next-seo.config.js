const title = "Daniel Castillejo";
const description =
  "Desarrollador de Software, entusiasta del Diseño y amante de la Música.";

const SEO = {
  title,
  description,
  canonical: "https://dkast.dev",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://dkast.dev",
    title,
    description,
    images: [
      {
        url: "https://dkast.dev/og.png",
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: "@dkast",
    site: "@dkast",
    cardType: "summary_large_image"
  }
};

export default SEO;
