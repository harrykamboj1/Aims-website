import type { Metadata } from "next";
import PTEPageContent from "./PTEPageContent";

export const metadata: Metadata = {
    title:
        "Best PTE Training & Coaching Classes | Expert PTE Academic Preparation - AIMS",
    description:
        "Achieve your target PTE Academic score with AIMS expert coaching. Comprehensive PTE training covering Speaking, Writing, Reading, Listening. 95% success rate with real exam simulation. Free mock tests, personalized feedback. Join 500+ successful students in Surrey, Canada & Ferozepur, India.",
    keywords: [
        "PTE training",
        "PTE coaching",
        "PTE preparation",
        "PTE classes",
        "PTE course",
        "PTE Academic",
        "PTE exam preparation",
        "PTE speaking",
        "PTE writing",
        "PTE reading",
        "PTE listening",
        "PTE score 79+",
        "PTE score 65+",
        "best PTE coaching",
        "PTE online classes",
        "PTE offline classes",
        "PTE Surrey",
        "PTE Canada",
        "PTE India",
        "PTE mock test",
        "PTE for immigration",
        "PTE for Australia",
        "PTE for study abroad",
        "PTE Academic test",
        "Pearson Test of English",
        "PTE tips and tricks",
    ],
    alternates: {
        canonical: "/pte-training",
    },
    openGraph: {
        title: "Best PTE Academic Training & Coaching | AIMS - 95% Success Rate",
        description:
            "Expert PTE Academic preparation with real exam simulation. Join 500+ successful students. Free demo class available!",
        url: "https://aims-education.com/pte-training",
        siteName: "AIMS",
        images: [
            {
                url: "/AIMS_LIGHT.png",
                width: 1200,
                height: 630,
                alt: "AIMS PTE Training - Expert Coaching for 79+ Score",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best PTE Academic Training & Coaching | AIMS",
        description:
            "Expert PTE preparation with 95% success rate. Real exam simulation. Free mock tests & demo class!",
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

export default function PTEPage() {
    return <PTEPageContent />;
}
