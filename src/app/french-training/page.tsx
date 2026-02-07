import type { Metadata } from "next";
import FrenchPageContent from "./FrenchPageContent";

export const metadata: Metadata = {
    title:
        "Best French Language Classes & Training | Learn French Online & Offline - AIMS",
    description:
        "Learn French with expert instructors at AIMS. Comprehensive French language training from A1 to C2 levels. DELF/DALF exam preparation, TEF/TCF coaching. Perfect for Canada immigration, Quebec PNP. Classes in Surrey, Canada & Ferozepur, India. Book free demo today!",
    keywords: [
        "French language classes",
        "French training",
        "French course",
        "learn French",
        "French classes near me",
        "French language course",
        "French speaking classes",
        "French online classes",
        "French offline classes",
        "DELF preparation",
        "DALF preparation",
        "TEF Canada",
        "TCF Canada",
        "French for immigration",
        "French for Canada",
        "French for Quebec",
        "Quebec immigration French",
        "French A1",
        "French A2",
        "French B1",
        "French B2",
        "French C1",
        "French C2",
        "French speaking course",
        "French writing course",
        "French Surrey",
        "French Canada",
        "French India",
        "conversational French",
        "business French",
    ],
    alternates: {
        canonical: "/french-training",
    },
    openGraph: {
        title: "Best French Language Classes | AIMS - A1 to C2 Levels",
        description:
            "Expert French training for all levels. DELF/DALF/TEF/TCF preparation. Perfect for Canada immigration & Quebec PNP. Free demo class!",
        url: "https://aims-education.com/french-training",
        siteName: "AIMS",
        images: [
            {
                url: "/AIMS_LIGHT.png",
                width: 1200,
                height: 630,
                alt: "AIMS French Language Training - Expert Classes A1 to C2",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best French Language Classes | AIMS",
        description:
            "Expert French training A1-C2. DELF/DALF/TEF/TCF prep. Free demo class available!",
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

export default function FrenchPage() {
    return <FrenchPageContent />;
}
