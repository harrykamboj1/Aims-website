import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    "AIMS - #1 IELTS, PTE, CELPIP & French Training | Best Language Classes | Immigration Consultancy",
  description:
    "Get top IELTS, PTE & French scores with AIMS expert coaching in Surrey, Canada & Ferozepur, India. 95% success rate! Comprehensive training for IELTS band 7+, PTE 79+, French A1-C2. Free demo class. DELF/DALF/TEF/TCF prep. Canada PR & immigration assistance.",
  keywords: [
    // IELTS Keywords
    "IELTS training",
    "IELTS coaching",
    "IELTS preparation",
    "IELTS classes",
    "IELTS course",
    "best IELTS coaching",
    "IELTS band 7",
    "IELTS band 8",
    "IELTS online classes",
    "IELTS speaking",
    "IELTS writing",
    "IELTS reading",
    "IELTS listening",
    "IELTS academic",
    "IELTS general training",
    "IELTS mock test",
    "IELTS Surrey",
    "IELTS Canada",
    // PTE Keywords
    "PTE training",
    "PTE coaching",
    "PTE preparation",
    "PTE Academic",
    "PTE classes",
    "PTE course",
    "best PTE coaching",
    "PTE score 79",
    "PTE online classes",
    "PTE mock test",
    "PTE tips and tricks",
    "Pearson Test of English",
    // CELPIP Keywords
    "CELPIP training",
    "CELPIP preparation",
    "CELPIP coaching",
    "CELPIP exam",
    "Canadian English test",
    // French Keywords
    "French language classes",
    "French training",
    "French course",
    "learn French",
    "French classes near me",
    "DELF preparation",
    "DALF preparation",
    "TEF Canada",
    "TCF Canada",
    "French for immigration",
    "French for Canada",
    "French for Quebec",
    "French A1 to C2",
    // Immigration Keywords
    "immigration consultancy",
    "Canada PR",
    "Canada immigration",
    "visa assistance",
    "Express Entry",
    "Quebec PNP",
    // Location Keywords
    "Surrey education",
    "language training Canada",
    "language training India",
    "online language courses",
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
    siteName: "AIMS",
    images: [
      {
        url: "/AIMS_LIGHT.png",
        width: 1200,
        height: 630,
        alt: "AIMS - Language Training & Immigration Services",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
