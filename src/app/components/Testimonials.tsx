"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { getApprovedReviews, StudentReview } from "@/lib/supabase";

interface TestimonialsProps {
    service?: "ielts" | "pte" | "french" | "celpip" | "immigration" | "general" | "all";
    title?: string;
    subtitle?: string;
    showBadge?: boolean;
    limit?: number;
}

const serviceLabels: { [key: string]: string } = {
    ielts: "IELTS",
    pte: "PTE",
    french: "French",
    celpip: "CELPIP",
    immigration: "Immigration",
    general: "General",
};

const Testimonials = ({
    service = "all",
    title = "What Our Students Say",
    subtitle = "Real success stories from our students who achieved their dreams",
    showBadge = true,
    limit = 6,
}: TestimonialsProps) => {
    const [reviews, setReviews] = useState<StudentReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getApprovedReviews(service === "all" ? undefined : service);
                setReviews(data.slice(0, limit));
            } catch {
                console.error("Error fetching reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [service, limit]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
    };

    if (loading) {
        return (
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-2xl p-8 animate-pulse">
                                    <div className="flex space-x-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <div key={s} className="w-5 h-5 bg-gray-200 rounded"></div>
                                        ))}
                                    </div>
                                    <div className="h-20 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (reviews.length === 0) {
        return null;
    }

    return (
        <section id="testimonials" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {showBadge && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6"
                        >
                            <Quote className="w-4 h-4" />
                            <span>Student Reviews</span>
                        </motion.div>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                        {title.split(" ").slice(0, -2).join(" ")}{" "}
                        <span className="gradient-text">{title.split(" ").slice(-2).join(" ")}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="relative">
                    {reviews.length > 3 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hidden lg:block"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hidden lg:block"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative group flex flex-col h-full"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-4 -left-4 w-10 h-10 gradient-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Quote className="w-5 h-5 text-white" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <div className="max-h-48 overflow-y-auto pr-2 mb-6 scrollbar-thin">
                                    <p className="text-gray-600 leading-relaxed italic">
                                        &quot;{review.review}&quot;
                                    </p>
                                </div>

                                {/* Reviewer Info */}
                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-gray-900">{review.name}</p>
                                            <p className="text-sm text-gray-500 flex items-center space-x-1">
                                                <span>{serviceLabels[review.service]}</span>
                                                {review.score && (
                                                    <>
                                                        <span>•</span>
                                                        <span className="text-primary font-medium">
                                                            {review.score}
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                        {review.score && (
                                            <div className="p-2 gradient-primary rounded-lg">
                                                <Award className="w-5 h-5 text-white" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots (for mobile) */}
                {reviews.length > 3 && (
                    <div className="flex justify-center space-x-2 mt-8 lg:hidden">
                        {[...Array(Math.ceil(reviews.length / 3))].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? "bg-primary w-6" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
