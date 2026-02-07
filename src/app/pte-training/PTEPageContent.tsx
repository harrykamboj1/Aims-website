"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Award,
    Users,
    Clock,
    Star,
    Monitor,
    Mic,
    PenTool,
    BookOpen,
    Headphones,
    Target,
    Zap,
    Phone,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/testimonial";
import ReviewForm from "../components/ReviewForm";

const PTEPageContent = () => {
    const modules = [
        {
            icon: Mic,
            title: "Speaking & Writing",
            description:
                "Master integrated speaking and writing tasks with our specialized training on all question types including Read Aloud, Repeat Sentence, Describe Image, and Essays.",
            tips: [
                "Read Aloud with proper intonation",
                "Repeat Sentence memory techniques",
                "Describe Image templates",
                "Essay structure mastery",
            ],
        },
        {
            icon: BookOpen,
            title: "Reading",
            description:
                "Develop speed reading and comprehension skills for Fill in the Blanks, Multiple Choice, and Re-order Paragraphs.",
            tips: [
                "Re-order paragraph strategies",
                "Fill in the blanks techniques",
                "Multiple choice approach",
                "Time management skills",
            ],
        },
        {
            icon: Headphones,
            title: "Listening",
            description:
                "Train your ears with authentic audio materials covering Summarize Spoken Text, Multiple Choice, Fill in Blanks, and Highlight Correct Summary.",
            tips: [
                "Note-taking strategies",
                "Accent familiarity training",
                "Summarize spoken text templates",
                "Write from dictation techniques",
            ],
        },
    ];

    const features = [
        {
            icon: Award,
            title: "95% Success Rate",
            description: "Students achieving 65+ scores consistently",
        },
        {
            icon: Monitor,
            title: "Real Exam Simulation",
            description: "Practice on actual PTE software interface",
        },
        {
            icon: Zap,
            title: "AI-Scored Practice",
            description: "Get instant feedback on your responses",
        },
        {
            icon: Target,
            title: "Score Guarantee",
            description: "Achieve your target score or extended support",
        },
    ];

    const courseHighlights = [
        "Full PTE Academic syllabus coverage",
        "Unlimited mock tests on real PTE software",
        "AI-powered scoring and instant feedback",
        "Speaking practice with native speaker standards",
        "Proven templates for all question types",
        "Weekly full-length scored practice tests",
        "Tips from 79+ score achievers",
        "Online & offline flexible learning",
    ];

    const questionTypes = [
        {
            section: "Speaking",
            types: [
                "Read Aloud",
                "Repeat Sentence",
                "Describe Image",
                "Re-tell Lecture",
                "Answer Short Question",
            ],
        },
        {
            section: "Writing",
            types: ["Summarize Written Text", "Essay (20 minutes)"],
        },
        {
            section: "Reading",
            types: [
                "Fill in the Blanks",
                "Multiple Choice (Single/Multiple)",
                "Re-order Paragraphs",
            ],
        },
        {
            section: "Listening",
            types: [
                "Summarize Spoken Text",
                "Multiple Choice",
                "Fill in the Blanks",
                "Highlight Correct Summary",
                "Select Missing Word",
                "Write from Dictation",
            ],
        },
    ];

    // Static testimonials removed - now using dynamic Testimonial component

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent/10 via-white to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6"
                        >
                            <Monitor className="w-4 h-4" />
                            <span>PTE Academic Experts</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
                        >
                            Ace PTE Academic with{" "}
                            <span className="gradient-text">Expert Training</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 mb-8 leading-relaxed"
                        >
                            Get your dream PTE score with our computer-based training, real
                            exam simulation, and proven strategies. Join 500+ students who
                            achieved 79+ scores!
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

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-2xl"
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
            <section className="section-padding bg-gradient-to-b from-white to-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                            Master All <span className="gradient-text">PTE Sections</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive training covers every PTE question type with
                            proven strategies and templates.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="p-4 gradient-primary rounded-xl inline-block mb-6">
                                    <module.icon className="w-8 h-8 text-white" />
                                </div>
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Question Types */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                            Complete{" "}
                            <span className="gradient-text">Question Type Coverage</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We prepare you for every single question type in the PTE exam
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {questionTypes.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6"
                            >
                                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                                    {section.section}
                                </h3>
                                <ul className="space-y-2">
                                    {section.types.map((type, typeIndex) => (
                                        <li
                                            key={typeIndex}
                                            className="flex items-center space-x-2 text-sm text-gray-700"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                                            <span>{type}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Highlights & CTA */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                                Why Choose{" "}
                                <span className="gradient-text">AIMS PTE Training?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our PTE program uses the latest technology and proven strategies
                                to help you achieve your target score quickly and efficiently.
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
                                Start Your PTE Journey Today!
                            </h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Free Diagnostic Test</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Real Exam Environment</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>AI-Powered Feedback</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <span>Score Improvement Guarantee</span>
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
            <Testimonial service="pte" showAddReviewButton={true} />

            {/* Add Review Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                Share Your <span className="gradient-text">PTE Journey</span>
                            </h2>
                            <p className="text-gray-600">
                                Completed your PTE with AIMS? Share your experience and help future students!
                            </p>
                        </motion.div>
                        <ReviewForm defaultService="pte" showServiceSelect={false} />
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
                            Ready to Ace Your PTE?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join hundreds of successful students. Book your free demo class
                            today and take the first step towards your target score!
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

            {/* Structured Data for PTE Course */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: "PTE Academic Training Course",
                        description:
                            "Comprehensive PTE Academic preparation course with real exam simulation, AI-scored practice, and expert coaching. 95% success rate.",
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
                            name: "PTE Academic Examination",
                        },
                        teaches: [
                            "PTE Speaking",
                            "PTE Writing",
                            "PTE Reading",
                            "PTE Listening",
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: "450",
                            bestRating: "5",
                            worstRating: "1",
                        },
                    }),
                }}
            />
        </main>
    );
};

export default PTEPageContent;
