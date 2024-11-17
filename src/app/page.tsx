import type { Viewport, Metadata } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sergiu-nica.vercel.app/"),
  openGraph: {
    siteName: "Sergiu Nica Website",
    type: "website",
    locale: "cz_CZ",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://dminhvu.com/rss.xml",
    },
  },
  applicationName: "Sergiu Nica Website",
  appleWebApp: {
    title: "Sergiu Nica Website",
    statusBarStyle: "default",
    capable: true,
  },
};

function Home() {}

export default Home;
