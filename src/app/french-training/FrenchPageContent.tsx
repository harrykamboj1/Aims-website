"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Award,
    Users,
    Globe,
    Star,
    BookOpen,
    Mic,
    PenTool,
    Headphones,
    Target,
    MapPin,
    Phone,
    ArrowRight,
    GraduationCap,
    Briefcase,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/testimonial";
import ReviewForm from "../components/ReviewForm";
import PageHero from "../components/PageHero";

const FrenchPageContent = () => {
    const levels = [
        {
            level: "A1 - Beginner",
            description:
                "Start your French journey! Learn basic vocabulary, introduce yourself, ask simple questions, and understand everyday expressions.",
            topics: [
                "Greetings & introductions",
                "Numbers, colors, dates",
                "Basic sentence structure",
                "Common everyday phrases",
            ],
        },
        {
            level: "A2 - Elementary",
            description:
                "Build on basics with routine communication, describe your background, and handle simple day-to-day situations.",
            topics: [
                "Past tense (passé composé)",
                "Describing routines",
                "Shopping & travel vocabulary",
                "Writing short messages",
            ],
        },
        {
            level: "B1 - Intermediate",
            description:
                "Communicate effectively in most situations. Express opinions, describe experiences, and write coherent texts on familiar topics.",
            topics: [
                "Complex grammar structures",
                "Expressing opinions & feelings",
                "Work & education topics",
                "TEF/TCF Canada preparation",
            ],
        },
        {
            level: "B2 - Upper Intermediate",
            description:
                "Achieve fluency with spontaneous conversations, understand complex texts, and express yourself clearly on diverse topics.",
            topics: [
                "Advanced grammar mastery",
                "Debate & argumentation",
                "Professional communication",
                "DELF B2 preparation",
            ],
        },
        {
            level: "C1 - Advanced",
            description:
                "Near-native proficiency! Express complex ideas fluently, understand demanding texts, and use language effectively for academic or professional purposes.",
            topics: [
                "Nuanced expression",
                "Academic writing",
                "Literary analysis",
                "DALF C1 preparation",
            ],
        },
        {
            level: "C2 - Mastery",
            description:
                "Achieve native-like proficiency with effortless comprehension and precise expression in any situation.",
            topics: [
                "Native-level fluency",
                "Idiomatic expressions",
                "Professional mastery",
                "DALF C2 preparation",
            ],
        },
    ];

    const examPrep = [
        {
            icon: GraduationCap,
            title: "DELF/DALF",
            description:
                "Official French proficiency diplomas recognized worldwide for academic and professional purposes.",
            levels: "A1, A2, B1, B2 (DELF) / C1, C2 (DALF)",
        },
        {
            icon: MapPin,
            title: "TEF Canada",
            description:
                "Required for Canada immigration (Express Entry) and Quebec selection. We prepare you for all 4 sections.",
            levels: "Speaking, Listening, Reading, Writing",
        },
        {
            icon: Globe,
            title: "TCF Canada",
            description:
                "Alternative French test accepted for Canadian immigration. Comprehensive preparation available.",
            levels: "All components covered",
        },
        {
            icon: Briefcase,
            title: "Business French",
            description:
                "Professional French courses for workplace communication, presentations, and business correspondence.",
            levels: "Corporate training available",
        },
    ];

    const features = [
        {
            icon: Award,
            title: "Certified Instructors",
            description: "Native & certified French teachers",
        },
        {
            icon: Users,
            title: "Small Batch Size",
            description: "Maximum 10 students per batch",
        },
        {
            icon: Globe,
            title: "Cultural Immersion",
            description: "Learn French culture & etiquette",
        },
        {
            icon: Target,
            title: "Exam Success",
            description: "95% exam pass rate",
        },
    ];

    const courseHighlights = [
        "All levels from A1 to C2 covered",
        "DELF/DALF/TEF/TCF exam preparation",
        "Native French speaking instructors",
        "Interactive conversation classes",
        "Comprehensive grammar training",
        "French for Canada immigration",
        "Quebec PNP French requirements",
        "Online & offline flexibility",
        "Cultural immersion activities",
        "Personalized learning plans",
    ];

    // Static testimonials removed - now using dynamic Testimonial component

    const whyLearnFrench = [
        {
            icon: MapPin,
            title: "Canada Immigration",
            description:
                "Extra CRS points for Express Entry, required for Quebec immigration",
        },
        {
            icon: GraduationCap,
            title: "Study Abroad",
            description:
                "Access universities in France, Belgium, Switzerland, Canada",
        },
        {
            icon: Briefcase,
            title: "Career Opportunities",
            description: "5th most spoken language, used in 29 countries globally",
        },
        {
            icon: Globe,
            title: "Cultural Access",
            description: "Explore French literature, cinema, cuisine, and art",
        },
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <PageHero
                badge="Parlez-vous français?"
                badgeIcon={Globe}
                title={
                    <>
                        Learn French with{" "}
                        <span className="text-royal">Expert Instructors</span>
                    </>
                }
                description="Master the language of love with our comprehensive French training program. From complete beginners to advanced speakers — we help you achieve fluency for immigration, career, or personal growth!"
            />

            {/* Why Learn French */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Why <span className="gradient-text">Learn French?</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {whyLearnFrench.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-2xl"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 gradient-primary rounded-xl mb-4">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Levels */}
            <section className="section-padding bg-gradient-to-b from-white to-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                            All Levels from{" "}
                            <span className="gradient-text">A1 to C2 Covered</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Whether you&apos;re a complete beginner or looking to master
                            French, we have the perfect course for you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {levels.map((level, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="inline-block px-4 py-2 gradient-primary text-white font-semibold rounded-lg text-sm mb-4">
                                    {level.level}
                                </div>
                                <p className="text-gray-600 mb-4 text-sm">{level.description}</p>
                                <ul className="space-y-2">
                                    {level.topics.map((topic, topicIndex) => (
                                        <li
                                            key={topicIndex}
                                            className="flex items-center space-x-2 text-sm text-gray-700"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exam Preparation */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                            <span className="gradient-text">Exam Preparation</span> & Certifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get certified with internationally recognized French proficiency
                            tests
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {examPrep.map((exam, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-xl mb-4">
                                    <exam.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                                    {exam.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">{exam.description}</p>
                                <span className="text-xs text-primary font-semibold">
                                    {exam.levels}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-md"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 gradient-primary rounded-xl mb-4">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Highlights & CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Why Choose{" "}
                                <span className="gradient-text">AIMS French Training?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our French program is designed by certified instructors who
                                understand what it takes to achieve proficiency quickly and
                                effectively.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {courseHighlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{highlight}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white"
                        >
                            <h3 className="text-2xl font-heading font-bold mb-6">
                                Start Your French Journey Today!
                            </h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Free Level Assessment</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Native French Instructors</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Cultural Immersion Classes</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Flexible Online & Offline</span>
                                </li>
                            </ul>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center w-full space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <span>Commencer Maintenant (Start Now)</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Testimonials */}
            <Testimonial service="french" showAddReviewButton={true} />

            {/* Add Review Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                Partagez Votre <span className="gradient-text">Expérience</span>
                            </h2>
                            <p className="text-gray-600">
                                Completed your French course with AIMS? Share your experience and help future students!
                            </p>
                        </motion.div>
                        <ReviewForm defaultService="french" showServiceSelect={false} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary to-accent">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                            Prêt à Apprendre le Français?
                        </h2>
                        <p className="text-xl text-white/90 mb-2">
                            (Ready to Learn French?)
                        </p>
                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                            Join hundreds of successful students. Book your free demo class
                            today and take the first step towards French fluency!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <span>Get Started Today</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:+16728667556"
                                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                <span>+1 672 866 7556</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            {/* Structured Data for French Course */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: "French Language Training Course",
                        description:
                            "Comprehensive French language training from A1 to C2 levels. DELF/DALF/TEF/TCF exam preparation. Perfect for Canada immigration and Quebec PNP.",
                        provider: {
                            "@type": "Organization",
                            name: "AIMS",
                            sameAs: "https://aims-education.com",
                        },
                        hasCourseInstance: [
                            {
                                "@type": "CourseInstance",
                                courseMode: "onsite",
                                location: {
                                    "@type": "Place",
                                    address: {
                                        "@type": "PostalAddress",
                                        addressLocality: "Surrey",
                                        addressCountry: "CA",
                                    },
                                },
                            },
                            {
                                "@type": "CourseInstance",
                                courseMode: "online",
                            },
                        ],
                        educationalLevel: "A1 to C2",
                        about: {
                            "@type": "Thing",
                            name: "French Language",
                        },
                        teaches: [
                            "French Speaking",
                            "French Writing",
                            "French Reading",
                            "French Listening",
                            "DELF Preparation",
                            "DALF Preparation",
                            "TEF Canada",
                            "TCF Canada",
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: "350",
                            bestRating: "5",
                            worstRating: "1",
                        },
                    }),
                }}
            />
        </main>
    );
};

export default FrenchPageContent;
