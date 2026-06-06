"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Award, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";
import PageHero from "../components/PageHero";
import { getApprovedReviews, StudentReview } from "@/lib/supabase";

const serviceOptions = [
    { value: "all", label: "All Reviews" },
    { value: "ielts", label: "IELTS" },
    { value: "pte", label: "PTE" },
    { value: "french", label: "French" },
    { value: "celpip", label: "CELPIP" },
    { value: "immigration", label: "Immigration" },
    { value: "general", label: "General" },
];

const serviceLabels: { [key: string]: string } = {
    ielts: "IELTS Training",
    pte: "PTE Coaching",
    french: "French Language",
    celpip: "CELPIP Training",
    immigration: "Immigration Services",
    general: "General",
};

const ReviewsPageContent = () => {
    const [reviews, setReviews] = useState<StudentReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedService, setSelectedService] = useState("all");

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            try {
                const data = await getApprovedReviews(selectedService === "all" ? undefined : selectedService);
                setReviews(data);
            } catch {
                console.error("Error fetching reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [selectedService]);

    return (
        <main className="min-h-screen">
            <Navbar />

            <PageHero
                badge="Student Testimonials"
                badgeIcon={Quote}
                title={
                    <>
                        What Our <span className="text-accent">Students Say</span>
                    </>
                }
                description="Real success stories from students who achieved their dreams with AIMS. Read verified reviews and share your own experience!"
                primaryCta={{ label: "Share Your Story", href: "#review-form" }}
                secondaryCta={{ label: "Book Demo Class", href: "/#contact", isPhone: false }}
            />

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    {/* Filter */}
                    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                        <h2 className="text-2xl font-heading font-bold text-gray-900">
                            Student Reviews
                        </h2>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-5 h-5 text-gray-400" />
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none bg-white"
                            >
                                {serviceOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Reviews Grid */}
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 animate-pulse">
                                    <div className="flex space-x-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <div key={s} className="w-5 h-5 bg-gray-200 rounded"></div>
                                        ))}
                                    </div>
                                    <div className="h-24 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                                </div>
                            ))}
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-2xl">
                            <Quote className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">No reviews found for this category.</p>
                            <p className="text-sm text-gray-400 mt-2">Be the first to share your experience!</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="card-elevated p-6 flex flex-col h-[300px]"
                                >
                                    {/* Rating */}
                                    <div className="flex items-center justify-between mb-3 flex-shrink-0">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating
                                                        ? "text-yellow-400 fill-current"
                                                        : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                            {serviceLabels[review.service]}
                                        </span>
                                    </div>

                                    {/* Review Text */}
                                    <div className="review-scroll flex-1 min-h-0 mb-4">
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            &quot;{review.review}&quot;
                                        </p>
                                    </div>

                                    {/* Reviewer Info */}
                                    <div className="flex items-center justify-between mt-auto flex-shrink-0">
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">
                                                {review.name}
                                            </p>
                                            {review.score && (
                                                <p className="text-xs text-primary font-medium flex items-center space-x-1">
                                                    <Award className="w-3 h-3" />
                                                    <span>{review.score}</span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Share Your Experience Section - Full Width */}
            <section id="review-form" className="section-padding bg-cream">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Share Your <span className="gradient-text">Success Story</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Your experience can inspire and guide future students. Share how AIMS helped you achieve your goals!
                        </p>
                    </motion.div>

                    <div className="max-w-2xl mx-auto">
                        <ReviewForm showServiceSelect={true} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ReviewsPageContent;
