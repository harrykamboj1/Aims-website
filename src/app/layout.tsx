import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "AIMS - Expert IELTS, PTE, CELPIP & French Language Training | Immigration Consultancy",
  description:
    "Master IELTS, PTE, CELPIP, and French with expert guidance at AIMS. Professional language training, immigration consultancy, and Canada PR assistance. Join thousands of successful students in Surrey, Canada.",
  keywords: [
    "IELTS training",
    "PTE coaching",
    "CELPIP preparation",
    "CELPIP training",
    "French language classes",
    "immigration consultancy",
    "Canada PR",
    "visa assistance",
    "language learning",
    "Surrey education",
    "online language courses",
    "IELTS preparation",
    "PTE preparation",
    "CELPIP exam",
    "French classes online",
    "Canadian English test",
  ],
  authors: [{ name: "AIMS Education" }],
  creator: "AIMS Education",
  publisher: "AIMS Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aims-education.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AIMS - Expert IELTS, PTE, CELPIP & French Language Training",
    description:
      "Master IELTS, PTE, CELPIP, and French with expert guidance. Professional language training and immigration consultancy services.",
    url: "https://aims-education.com",
    siteName: "AIMS Education",
    images: [
      {
        url: "/AIMS_LIGHT.png",
        width: 1200,
        height: 630,
        alt: "AIMS Education - Language Training & Immigration Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMS - Expert IELTS, PTE, CELPIP & French Language Training",
    description:
      "Master IELTS, PTE, CELPIP, and French with expert guidance. Professional language training and immigration consultancy.",
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
  verification: {
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://aims-education.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "AIMS",
              description:
                "Expert IELTS, PTE, CELPIP, and French language training with immigration consultancy services",
              url: "https://aims-education.com",
              logo: "https://aims-education.com/AIMS_LIGHT.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surrey",
                addressCountry: "CA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-672-866-7556",
                contactType: "Customer Service",
                areaServed: ["CA", "IN"],
                availableLanguage: ["en", "fr"],
              },
              sameAs: ["https://www.instagram.com/aims_604/"],
              offers: {
                "@type": "Offer",
                category: "Language Training",
                offers: [
                  {
                    "@type": "Offer",
                    name: "IELTS Training",
                    description: "Comprehensive IELTS preparation courses",
                  },
                  {
                    "@type": "Offer",
                    name: "PTE Training",
                    description: "Professional PTE exam preparation",
                  },
                  {
                    "@type": "Offer",
                    name: "CELPIP Training",
                    description:
                      "Comprehensive CELPIP exam preparation for Canadian immigration",
                  },
                  {
                    "@type": "Offer",
                    name: "French Language Training",
                    description: "Expert French language courses",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
