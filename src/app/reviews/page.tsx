import type { Metadata } from "next";
import ReviewsPageContent from "./ReviewsPageContent";

export const metadata: Metadata = {
    title: "Student Reviews & Testimonials | AIMS Education Success Stories",
    description:
        "Read verified reviews from AIMS students. Real success stories from IELTS, PTE, CELPIP, French training. Share your own experience and help others achieve their goals.",
    keywords: [
        "AIMS reviews",
        "IELTS coaching reviews",
        "PTE training reviews",
        "CELPIP coaching testimonials",
        "French language course reviews",
        "student testimonials",
        "AIMS success stories",
        "language training reviews",
    ],
    openGraph: {
        title: "Student Reviews & Success Stories | AIMS",
        description:
            "Read verified reviews from our successful students. IELTS, PTE, CELPIP & French training testimonials.",
        url: "https://aims-education.com/reviews",
        siteName: "AIMS",
        locale: "en_US",
        type: "website",
    },
};

export default function ReviewsPage() {
    return <ReviewsPageContent />;
}
