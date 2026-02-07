import type { Metadata } from "next";
import CELPIPPageContent from "./CELPIPPageContent";

export const metadata: Metadata = {
    title:
        "Best CELPIP Training & Coaching Classes | Expert CELPIP Preparation - AIMS",
    description:
        "Achieve your target CELPIP score with AIMS expert coaching. Comprehensive CELPIP training for all 4 components - Listening, Reading, Writing, Speaking. 95% success rate. Perfect for Canadian immigration, citizenship, and PR applications. Free mock tests in Surrey, Canada & Ferozepur, India.",
    keywords: [
        "CELPIP training",
        "CELPIP coaching",
        "CELPIP preparation",
        "CELPIP classes",
        "CELPIP course",
        "CELPIP exam preparation",
        "CELPIP speaking",
        "CELPIP writing",
        "CELPIP reading",
        "CELPIP listening",
        "CELPIP General",
        "CELPIP General LS",
        "best CELPIP coaching",
        "CELPIP online classes",
        "CELPIP offline classes",
        "CELPIP Surrey",
        "CELPIP Canada",
        "CELPIP India",
        "CELPIP mock test",
        "CELPIP for immigration",
        "CELPIP for Canada PR",
        "CELPIP for citizenship",
        "Canadian English Language Proficiency",
        "CELPIP CLB",
        "CELPIP score 9",
        "CELPIP score 10",
    ],
    alternates: {
        canonical: "/celpip-training",
    },
    openGraph: {
        title: "Best CELPIP Training & Coaching | AIMS - 95% Success Rate",
        description:
            "Expert CELPIP preparation for Canadian immigration & citizenship. All 4 components covered. Free demo class available!",
        url: "https://aims-education.com/celpip-training",
        siteName: "AIMS",
        images: [
            {
                url: "/AIMS_LIGHT.png",
                width: 1200,
                height: 630,
                alt: "AIMS CELPIP Training - Expert Coaching for CLB 9+",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best CELPIP Training & Coaching | AIMS",
        description:
            "Expert CELPIP preparation with 95% success rate. All 4 components covered. Free mock tests & demo class!",
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

export default function CELPIPPage() {
    return <CELPIPPageContent />;
}
