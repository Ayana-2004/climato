import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SITE_URL = "https://climato-peach.vercel.app";
const TITLE = "Climato — Weather That Guides You";
const DESCRIPTION =
  "Climato, by Faircode, is an all-in-one weather forecast companion: live local conditions, global city search, Skye the AI Weather Assistant, Favorites, and Nearby Explorer. Download free on iOS and Android.";
const KEYWORDS = [
  "weather app",
  "AI weather assistant",
  "Climato weather",
  "free weather app",
  "live weather forecast",
  "weather for any city",
  "weather app for iPhone",
  "weather app for Android",
  "Skye weather AI",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Climato",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Climato weather app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#57a9f5",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Climato",
      url: SITE_URL,
      description: DESCRIPTION,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      name: "Faircode",
      url: "https://faircodetech.com",
      logo: `${SITE_URL}/opengraph-image.png`,
      sameAs: [
        "https://apps.apple.com/us/app/climato/id6755456353",
        "https://play.google.com/store/apps/details?id=com.climato",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Climato",
      url: SITE_URL,
      applicationCategory: "WeatherApplication",
      operatingSystem: "iOS, Android",
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: "Faircode",
        url: "https://faircodetech.com",
      },
      sameAs: [
        "https://apps.apple.com/us/app/climato/id6755456353",
        "https://play.google.com/store/apps/details?id=com.climato",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
