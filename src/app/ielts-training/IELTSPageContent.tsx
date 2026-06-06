"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Users,
  Clock,
  Star,
  BookOpen,
  Headphones,
  PenTool,
  MessageCircle,
  Target,
  TrendingUp,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/testimonial";
import ReviewForm from "../components/ReviewForm";
import PageHero from "../components/PageHero";

const IELTSPageContent = () => {
  const modules = [
    {
      icon: Headphones,
      title: "Listening",
      description:
        "Master all question types including multiple choice, matching, form completion, and map/plan labeling with audio from various accents.",
      tips: [
        "Practice with British, American, Australian accents",
        "Learn to predict answers before listening",
        "Develop note-taking strategies",
      ],
    },
    {
      icon: BookOpen,
      title: "Reading",
      description:
        "Develop advanced reading strategies to tackle academic passages, understand complex vocabulary, and manage time effectively.",
      tips: [
        "Skim and scan techniques",
        "Understanding paraphrasing",
        "Time management for 3 passages",
      ],
    },
    {
      icon: PenTool,
      title: "Writing",
      description:
        "Learn to write compelling Task 1 reports and Task 2 essays that meet all assessment criteria for band 7+.",
      tips: [
        "Task 1: Graph, chart, process descriptions",
        "Task 2: Essay structures and arguments",
        "Grammar and vocabulary enhancement",
      ],
    },
    {
      icon: MessageCircle,
      title: "Speaking",
      description:
        "Build confidence and fluency for all three parts of the speaking test with personalized feedback and mock interviews.",
      tips: [
        "Part 1: Personal questions practice",
        "Part 2: Cue card strategies",
        "Part 3: Discussion and opinion skills",
      ],
    },
  ];

  const features = [
    {
      icon: Award,
      title: "95% Success Rate",
      description: "Our students consistently achieve their target band scores",
    },
    {
      icon: Users,
      title: "3000+ Students Trained",
      description: "Join our community of successful IELTS achievers",
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Morning, evening & weekend batches available",
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description:
        "Customized study plans based on your strengths & weaknesses",
    },
  ];

  const courseHighlights = [
    "Comprehensive coverage of all 4 IELTS modules",
    "Unlimited mock tests with detailed feedback",
    "One-on-one speaking practice sessions",
    "Access to extensive study materials & resources",
    "Regular vocabulary & grammar workshops",
    "Weekly full-length practice tests",
    "Tips & strategies from 8+ band scorers",
    "Online & offline classes available",
  ];

  // Static testimonials removed - now using dynamic Testimonial component

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        badge="#1 IELTS Training Center"
        badgeIcon={Award}
        title={
          <>
            Master IELTS with{" "}
            <span className="text-accent">Expert Coaching</span>
          </>
        }
        description="Achieve your dream IELTS band score with our proven strategies, expert instructors, and comprehensive training program. Join 3000+ successful students who've transformed their scores!"
      />

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
              Master All <span className="gradient-text">4 IELTS Modules</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training covers every aspect of the IELTS exam
              to ensure you&apos;re fully prepared for success.
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
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

      {/* Course Highlights */}
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
                <span className="gradient-text">AIMS IELTS Training?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our IELTS program is designed by experts who understand exactly
                what it takes to achieve band 7+ scores. We combine proven
                strategies with personalized coaching to help you succeed.
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
                Start Your IELTS Journey Today!
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Free Assessment Test</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Personalized Study Plan</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Expert Faculty Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Flexible Batch Timings</span>
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
      <Testimonial service="ielts" showAddReviewButton={true} />

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
                Share Your <span className="gradient-text">IELTS Journey</span>
              </h2>
              <p className="text-gray-600">
                Completed your IELTS with AIMS? Share your experience and help
                future students!
              </p>
            </motion.div>
            <ReviewForm defaultService="ielts" showServiceSelect={false} />
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
              Ready to Ace Your IELTS?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students. Book your free demo class
              today and take the first step towards your dream score!
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

      {/* Structured Data for IELTS Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "IELTS Training Course",
            description:
              "Comprehensive IELTS preparation course covering all 4 modules - Listening, Reading, Writing, Speaking. Expert coaching with 95% success rate.",
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
              name: "IELTS Examination",
            },
            teaches: [
              "IELTS Listening",
              "IELTS Reading",
              "IELTS Writing",
              "IELTS Speaking",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
    </main>
  );
};

export default IELTSPageContent;
