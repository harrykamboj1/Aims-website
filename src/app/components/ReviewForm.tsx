"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    Send,
    User,
    Mail,
    MessageSquare,
    Award,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from "lucide-react";
import { saveStudentReview } from "@/lib/supabase";

interface ReviewFormProps {
    defaultService?: "ielts" | "pte" | "french" | "celpip" | "immigration" | "general";
    showServiceSelect?: boolean;
}

const ReviewForm = ({ defaultService = "general", showServiceSelect = true }: ReviewFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: defaultService,
        rating: 5,
        review: "",
        score: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [hoveredRating, setHoveredRating] = useState(0);

    const services = [
        { value: "ielts", label: "IELTS Training" },
        { value: "pte", label: "PTE Coaching" },
        { value: "french", label: "French Language" },
        { value: "celpip", label: "CELPIP Training" },
        { value: "immigration", label: "Immigration Services" },
        { value: "general", label: "General / Other" },
    ];

    const scorePlaceholders: { [key: string]: string } = {
        ielts: "e.g., Band 7.5",
        pte: "e.g., 79+",
        french: "e.g., DELF B2",
        celpip: "e.g., CLB 9",
        immigration: "e.g., PR Approved",
        general: "e.g., Excellent",
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            await saveStudentReview({
                name: formData.name,
                email: formData.email,
                service: formData.service as "ielts" | "pte" | "french" | "celpip" | "immigration" | "general",
                rating: formData.rating,
                review: formData.review,
                score: formData.score || undefined,
            });

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                service: defaultService,
                rating: 5,
                review: "",
                score: "",
            });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100"
        >
            {/* Header Section */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-4">
                    <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
                    Share Your Experience
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                    Your success story can inspire others! Help future students by sharing your journey with AIMS.
                </p>
            </div>

            <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-8"
                    >
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-4">
                            Your review has been submitted successfully and is now live!
                        </p>
                        <button
                            onClick={() => setSubmitStatus("idle")}
                            className="text-primary font-semibold hover:underline"
                        >
                            Submit Another Review
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Service & Score Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {showServiceSelect && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service *
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none bg-white text-base"
                                    >
                                        {services.map((service) => (
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className={showServiceSelect ? "" : "md:col-span-2"}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Score/Achievement
                                </label>
                                <div className="relative">
                                    <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="score"
                                        value={formData.score}
                                        onChange={handleChange}
                                        placeholder={scorePlaceholders[formData.service]}
                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-base"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Rating Selection */}
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                            <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                                Your Rating *
                            </label>
                            <div className="flex items-center justify-center space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                                    >
                                        <Star
                                            className={`w-10 h-10 transition-colors drop-shadow-sm ${star <= (hoveredRating || formData.rating)
                                                    ? "text-yellow-400 fill-current"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-3">
                                {formData.rating === 5 ? "Excellent! ⭐" :
                                    formData.rating === 4 ? "Very Good! 👍" :
                                        formData.rating === 3 ? "Good" :
                                            formData.rating === 2 ? "Fair" : "Poor"}
                                <span className="ml-2 font-medium">({formData.rating}/5)</span>
                            </p>
                        </div>

                        {/* Review Text */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Your Review *
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                <textarea
                                    name="review"
                                    value={formData.review}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Share your experience with AIMS. What did you like? How did we help you achieve your goals? What would you tell other students considering our courses?"
                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none text-base"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Minimum 50 characters recommended for a helpful review</p>
                        </div>

                        {/* Error Message */}
                        {submitStatus === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl"
                            >
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <span>Something went wrong. Please try again.</span>
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-5 gradient-primary text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3 disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Submit Review</span>
                                </>
                            )}
                        </button>

                        {/* <p className="text-xs text-gray-500 text-center">
                            Your 5-star review will be visible immediately. Thank you for sharing!
                        </p> */}
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ReviewForm;
