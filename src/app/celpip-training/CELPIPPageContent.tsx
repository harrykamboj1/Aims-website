"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Award,
    Users,
    Clock,
    Star,
    Headphones,
    BookOpen,
    PenTool,
    MessageCircle,
    Target,
    MapPin,
    Phone,
    ArrowRight,
    Flag,
    Shield,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/testimonial";
import ReviewForm from "../components/ReviewForm";

const CELPIPPageContent = () => {
    const modules = [
        {
            icon: Headphones,
            title: "Listening",
            description:
                "Master all CELPIP listening question types with authentic Canadian English audio materials and proven strategies.",
            tips: [
                "Practice with Canadian accents",
                "Question prediction techniques",
                "Note-taking strategies",
                "Time management skills",
            ],
        },
        {
            icon: BookOpen,
            title: "Reading",
            description:
                "Develop speed reading and comprehension skills for all CELPIP reading task types including correspondence and viewpoints.",
            tips: [
                "Skimming & scanning techniques",
                "Vocabulary building",
                "Understanding Canadian context",
                "Multiple choice strategies",
            ],
        },
        {
            icon: PenTool,
            title: "Writing",
            description:
                "Learn to write effective emails and respond to surveys with our structured approach to CELPIP writing tasks.",
            tips: [
                "Email writing templates",
                "Survey response strategies",
                "Tone & register mastery",
                "Grammar & vocabulary focus",
            ],
        },
        {
            icon: MessageCircle,
            title: "Speaking",
            description:
                "Build confidence and fluency for all 8 speaking tasks with personalized feedback and mock interview practice.",
            tips: [
                "All 8 task types covered",
                "Response timing practice",
                "Fluency & pronunciation",
                "Mock speaking tests",
            ],
        },
    ];

    const features = [
        {
            icon: Award,
            title: "95% Success Rate",
            description: "Students achieving CLB 9+ consistently",
        },
        {
            icon: Flag,
            title: "Canadian Focus",
            description: "Authentic Canadian English training",
        },
        {
            icon: Clock,
            title: "Flexible Schedules",
            description: "Morning, evening & weekend batches",
        },
        {
            icon: Target,
            title: "Immigration Ready",
            description: "Designed for PR & citizenship needs",
        },
    ];

    const courseHighlights = [
        "Comprehensive coverage of all 4 CELPIP components",
        "Unlimited mock tests with instant scoring",
        "One-on-one speaking practice sessions",
        "Access to extensive study materials",
        "Canadian English vocabulary & expressions",
        "Weekly full-length practice tests",
        "Tips from CLB 10+ score achievers",
        "Online & offline classes available",
    ];

    const whyCELPIP = [
        {
            icon: Flag,
            title: "100% Canadian",
            description: "Designed specifically for Canadian immigration & citizenship",
        },
        {
            icon: Clock,
            title: "Fast Results",
            description: "Get your scores within 4-5 business days",
        },
        {
            icon: Shield,
            title: "Widely Accepted",
            description: "Accepted by IRCC for all immigration programs",
        },
        {
            icon: Target,
            title: "Computer-Based",
            description: "Modern, comfortable testing experience",
        },
    ];

    const clbLevels = [
        { clb: "CLB 4", listening: "4", reading: "4", writing: "4", speaking: "4" },
        { clb: "CLB 5", listening: "5", reading: "5", writing: "5", speaking: "5" },
        { clb: "CLB 6", listening: "6", reading: "6", writing: "6", speaking: "6" },
        { clb: "CLB 7", listening: "7", reading: "7", writing: "7", speaking: "7" },
        { clb: "CLB 8", listening: "8", reading: "8", writing: "8", speaking: "8" },
        { clb: "CLB 9", listening: "9", reading: "9", writing: "9", speaking: "9" },
        { clb: "CLB 10+", listening: "10-12", reading: "10-12", writing: "10-12", speaking: "10-12" },
    ];

    // Static testimonials removed - now using dynamic Testimonial component

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-red-500/10 via-white to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 rounded-full text-red-600 font-semibold text-sm mb-6"
                        >
                            <Flag className="w-4 h-4" />
                            <span>Canadian English Experts</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
                        >
                            Master CELPIP with{" "}
                            <span className="gradient-text">Expert Coaching</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 mb-8 leading-relaxed"
                        >
                            Achieve your target CLB score for Canadian immigration and
                            citizenship with our specialized CELPIP training program. Join
                            500+ successful students!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center space-x-2 px-8 py-4 gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <span>Book Free Demo Class</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:+16728667556"
                                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Call Now</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why CELPIP */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Why Choose <span className="gradient-text">CELPIP?</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {whyCELPIP.map((item, index) => (
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

            {/* Stats Section */}
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
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                            Master All{" "}
                            <span className="gradient-text">4 CELPIP Components</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive training covers every aspect of the CELPIP exam
                            with Canadian English focus.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-4 gradient-primary rounded-xl flex-shrink-0">
                                        <module.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                                            {module.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{module.description}</p>
                                        <ul className="space-y-2">
                                            {module.tips.map((tip, tipIndex) => (
                                                <li
                                                    key={tipIndex}
                                                    className="flex items-center space-x-2 text-sm text-gray-700"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLB Score Table */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            CELPIP to <span className="gradient-text">CLB Score Chart</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Understand how CELPIP scores translate to Canadian Language
                            Benchmark (CLB) levels
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="gradient-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">CLB Level</th>
                                        <th className="px-6 py-4 text-center font-semibold">Listening</th>
                                        <th className="px-6 py-4 text-center font-semibold">Reading</th>
                                        <th className="px-6 py-4 text-center font-semibold">Writing</th>
                                        <th className="px-6 py-4 text-center font-semibold">Speaking</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clbLevels.map((level, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                }`}
                                        >
                                            <td className="px-6 py-4 font-semibold text-primary">
                                                {level.clb}
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-700">
                                                {level.listening}
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-700">
                                                {level.reading}
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-700">
                                                {level.writing}
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-700">
                                                {level.speaking}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
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
                                <span className="gradient-text">AIMS CELPIP Training?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our CELPIP program is designed by Canadian English experts who
                                understand exactly what it takes to achieve high CLB scores.
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
                                Start Your CELPIP Journey Today!
                            </h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Free Diagnostic Test</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Canadian English Focus</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Immigration Expert Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>CLB Score Guarantee</span>
                                </li>
                            </ul>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center w-full space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <span>Enroll Now</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Testimonials */}
            <Testimonial service="celpip" showAddReviewButton={true} />

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
                                Share Your <span className="gradient-text">CELPIP Journey</span>
                            </h2>
                            <p className="text-gray-600">
                                Completed your CELPIP with AIMS? Share your experience and help future students!
                            </p>
                        </motion.div>
                        <ReviewForm defaultService="celpip" showServiceSelect={false} />
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
                            Ready to Ace Your CELPIP?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join hundreds of successful students. Book your free demo class
                            today and take the first step towards your Canadian dream!
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

            {/* Structured Data for CELPIP Course */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: "CELPIP Training Course",
                        description:
                            "Comprehensive CELPIP preparation course covering all 4 components - Listening, Reading, Writing, Speaking. Expert coaching with 95% success rate for Canadian immigration.",
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
                        educationalLevel: "Beginner to Advanced",
                        about: {
                            "@type": "Thing",
                            name: "CELPIP Examination",
                        },
                        teaches: [
                            "CELPIP Listening",
                            "CELPIP Reading",
                            "CELPIP Writing",
                            "CELPIP Speaking",
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: "400",
                            bestRating: "5",
                            worstRating: "1",
                        },
                    }),
                }}
            />
        </main>
    );
};

export default CELPIPPageContent;
