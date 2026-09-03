import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
import { Instrument_Serif } from "next/font/google";

import "@/app/globals.css";

import DisableInspect from "@/app/components/DisableInspect";
import SmoothScroll from "@/app/components/SmoothScroll";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://valenciaplazaapts.com";

const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Valencia Plaza Apartment Homes ";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "8174467470";

const LEASING_EMAIL =
  process.env.NEXT_PUBLIC_EMAIL ?? "valenciamanager@livenjoymgt.com";

const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS ?? "7050 John T White Rd";

const CITY = process.env.NEXT_PUBLIC_CITY ?? "Fort Worth";

const STATE = process.env.NEXT_PUBLIC_STATE ?? "TX";

const ZIP = process.env.NEXT_PUBLIC_ZIP ?? "76120";

const OG_IMAGE = `/images/logo.png`;

const FULL_PHONE = `+1${PHONE}`;

const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/* =========================================================
   DISPLAY FONT
========================================================= */

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3872",
  colorScheme: "light",
};

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Valencia Plaza Apartment Homes | Apartments in Fort Worth, TX",
    template: "%s | Valencia Plaza Apartment Homes ",
  },

  description:
    "Discover Valencia Plaza Apartment Homes in Fort Worth, Texas. Explore comfortable 2 bedroom apartment homes, floor plans, community amenities, pricing, and leasing options.",

  keywords: [
    "Valencia Plaza Apartment Homes ",
    "Valencia Plaza Apartments",
    "Valencia Plaza Apartments Fort Worth TX",
    "Fort Worth Apartments",
    "Apartments in Fort Worth TX",
    "Fort Worth Texas Apartments",
    "2 Bedroom Apartments Fort Worth TX",
    "2 Bedroom Apartments for Rent Fort Worth",
    "Apartments for rent in Fort Worth",
    "Apartment homes Fort Worth Texas",
    "Valencia Plaza Fort Worth TX",
    "Apartments near John T White Rd",
    "Apartments near East Fort Worth",
  ],

  applicationName: COMPANY_NAME,

  authors: [
    {
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  ],

  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,

  category: "Real Estate",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,

    title: "Valencia Plaza Apartment Homes | Apartments in Fort Worth, TX",

    description:
      "Explore 2 bedroom apartment homes, floor plans, community amenities, pricing, and convenient living at Valencia Plaza Apartment Homes in Fort Worth, Texas.",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Valencia Plaza Apartment Homes in Fort Worth, Texas",
      },
    ],
  },

  /* =======================================================
     TWITTER
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title: "Valencia Plaza Apartment Homes | Apartments in Fort Worth, TX",

    description:
      "Explore 2 bedroom apartments, floor plans, community amenities, pricing, and convenient living at Valencia Plaza Apartment Homes .",

    images: [OG_IMAGE],
  },

  /* =======================================================
     FAVICONS
  ======================================================= */

  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  referrer: "origin-when-cross-origin",
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const apartmentSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",

  "@id": `${SITE_URL}/#apartment-complex`,

  name: COMPANY_NAME,

  description:
    "Valencia Plaza Apartment Homes offers comfortable two bedroom apartment homes in Fort Worth, Texas.",

  url: SITE_URL,

  image: [OG_IMAGE],

  telephone: FULL_PHONE,

  email: LEASING_EMAIL,

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS,
    addressLocality: CITY,
    addressRegion: STATE,
    postalCode: ZIP,
    addressCountry: "US",
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: FULL_PHONE,
    contactType: "leasing",
    email: LEASING_EMAIL,
    areaServed: "US",
    availableLanguage: ["English"],
  },

  numberOfBedrooms: ["2"],

  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming Pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Laundry Facility",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Playground",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Courtyard",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Picnic Area",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Grill",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Walk-In Closets",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Dishwasher",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Refrigerator",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Washer/Dryer Hookups",
      value: true,
    },
  ],
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body className="min-h-screen font-sans antialiased">
        {/* Google Tag Manager */}
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GTM_ID && (
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
          )}

        {clarityId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}

        {/* Structured Data */}
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Production Protection */}
        {process.env.NODE_ENV === "production" && <DisableInspect />}

        <Script
          id="rentbamboo-charles"
          src="https://charles.rentbamboo.com/w"
          data-client-id="bamboo_ipwo8yj1"
          data-position="right"
          data-color="#1E3872"
        />

        {/* Smooth Scroll */}
        <SmoothScroll />
        <CookieConsent />

        {/* Application */}
        {children}

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1E3872",
              color: "#ffffff",
              borderRadius: "12px",
              fontFamily: '"Plus Jakarta Sans Variable", sans-serif',
            },
          }}
        />
      </body>
    </html>
  );
}
