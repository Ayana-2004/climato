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
const TITLE = "Climato | Weather That Guides You";
const DESCRIPTION =
  "Climato, by Faircode, is an all-in-one weather forecast companion: live local conditions, global city search, Skye the AI Weather Assistant, Favorites, and Nearby Explorer. Download free on iOS and Android.";
const STORE_LINKS = [
  "https://apps.apple.com/us/app/climato/id6755456353",
  "https://play.google.com/store/apps/details?id=com.climato",
];
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
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#57a9f5",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://faircodetech.com/#organization",
      name: "Faircode",
      url: "https://faircodetech.com",
      logo: `${SITE_URL}/Faircode.webp`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Climato",
      url: SITE_URL,
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": "https://faircodetech.com/#organization" },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Climato",
      url: SITE_URL,
      image: `${SITE_URL}/climato-icon.png`,
      applicationCategory: "WeatherApplication",
      operatingSystem: "iOS, Android",
      description: DESCRIPTION,
      featureList: [
        "Live local weather: temperature, humidity, rain, wind, UV index, visibility",
        "Search any city worldwide",
        "Skye, an AI Weather Assistant that explains the forecast",
        "Favorites list for frequently checked cities",
        "Nearby Explorer with distance and walk time to nearby places",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": "https://faircodetech.com/#organization" },
      installUrl: STORE_LINKS,
      sameAs: STORE_LINKS,
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
