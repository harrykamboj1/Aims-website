import type { Metadata } from "next";
import IELTSPageContent from "./IELTSPageContent";

export const metadata: Metadata = {
  title:
    "Best IELTS Training & Coaching Classes | Expert IELTS Preparation - AIMS",
  description:
    "Get top IELTS scores with AIMS expert coaching. Comprehensive IELTS training covering all 4 modules - Listening, Reading, Writing, Speaking. 95% success rate. Free mock tests, personalized feedback & flexible schedules. Join 3000+ successful students in Surrey, Canada & Ferozepur, India.",
  keywords: [
    "IELTS training",
    "IELTS coaching",
    "IELTS preparation",
    "IELTS classes",
    "IELTS course",
    "IELTS exam preparation",
    "IELTS speaking",
    "IELTS writing",
    "IELTS reading",
    "IELTS listening",
    "IELTS band 7",
    "IELTS band 8",
    "best IELTS coaching",
    "IELTS online classes",
    "IELTS offline classes",
    "IELTS Surrey",
    "IELTS Canada",
    "IELTS India",
    "IELTS Ferozepur",
    "IELTS mock test",
    "IELTS academic",
    "IELTS general training",
    "IELTS for immigration",
    "IELTS for Canada PR",
    "IELTS for study abroad",
  ],
  alternates: {
    canonical: "/ielts-training",
  },
  openGraph: {
    title: "Best IELTS Training & Coaching | AIMS - 95% Success Rate",
    description:
      "Expert IELTS preparation with comprehensive training for all 4 modules. Join 3000+ successful students. Free demo class available!",
    url: "https://aims-education.com/ielts-training",
    siteName: "AIMS",
    images: [
      {
        url: "/AIMS_LIGHT.png",
        width: 1200,
        height: 630,
        alt: "AIMS IELTS Training - Expert Coaching for Band 7+",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IELTS Training & Coaching | AIMS",
    description:
      "Expert IELTS preparation with 95% success rate. All 4 modules covered. Free mock tests & demo class!",
    images: ["/AIMS_LIGHT.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function IELTSPage() {
  return <IELTSPageContent />;
}
