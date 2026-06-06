"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight, Award } from "lucide-react";
import { testimonials } from "../data/data";
import { getApprovedReviews, StudentReview } from "@/lib/supabase";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const serviceLabels: Record<string, string> = {
  ielts: "IELTS",
  pte: "PTE",
  french: "French",
  celpip: "CELPIP",
  immigration: "Immigration",
  general: "General",
};

interface TestimonialProps {
  service?: string;
  showAddReviewButton?: boolean;
}

interface UnifiedTestimonial {
  name: string;
  review: string;
  stars: number;
  service?: string;
  score?: string;
  isDynamic: boolean;
}

const Testimonial = ({ service, showAddReviewButton = true }: TestimonialProps) => {
  const [dynamicReviews, setDynamicReviews] = useState<StudentReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getApprovedReviews(service);
        setDynamicReviews(reviews);
      } catch {
        console.error("Error fetching reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [service]);

  const allTestimonials: UnifiedTestimonial[] = [
    ...dynamicReviews.map((review) => ({
      name: review.name,
      review: review.review,
      stars: review.rating,
      service: review.service,
      score: review.score,
      isDynamic: true,
    })),
    ...testimonials.map((t) => ({
      name: t.name,
      review: t.review,
      stars: t.stars,
      service: undefined,
      score: undefined,
      isDynamic: false,
    })),
  ];

  const filteredTestimonials = service
    ? allTestimonials.filter((t) => !t.isDynamic || t.service === service)
    : allTestimonials;

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="section-label justify-center mb-4">
            <span>Student Success Stories</span>
          </div>
          <h2 className="heading-display text-3xl md:text-5xl mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real students who achieved their dreams with AIMS.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex gap-4 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elevated p-8 w-80 animate-pulse">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-4 h-4 bg-muted rounded" />
                  ))}
                </div>
                <div className="h-24 bg-muted rounded mb-4" />
                <div className="h-4 bg-muted rounded w-32" />
              </div>
            ))}
          </div>
        ) : (
          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false, stopOnFocusIn: false })]}
            className="w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {filteredTestimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="card-elevated p-7 h-[340px] flex flex-col relative group hover:-translate-y-1">
                    <Quote className="absolute top-5 right-5 w-10 h-10 text-navy/5 pointer-events-none" />

                    <div className="flex items-center justify-between mb-4 flex-shrink-0">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.stars ? "text-warning fill-warning" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      {testimonial.isDynamic && testimonial.service && (
                        <span className="text-xs px-2.5 py-1 bg-navy/8 text-navy rounded-full font-semibold">
                          {serviceLabels[testimonial.service]}
                        </span>
                      )}
                    </div>

                    <div className="review-scroll flex-1 min-h-0 mb-4">
                      <p className="text-navy/70 text-sm leading-relaxed">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-5 border-t border-navy/8 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.isDynamic && testimonial.score
                            ? testimonial.score
                            : "AIMS Student"}
                        </p>
                      </div>
                      {testimonial.isDynamic && testimonial.score && (
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Award className="w-4 h-4 text-accent" />
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border border-navy/10 hover:bg-navy hover:text-white shadow-md" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border border-navy/10 hover:bg-navy hover:text-white shadow-md" />
          </Carousel>
        )}

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-8 px-8 py-4 card-elevated">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-navy">5.0</div>
              <div className="text-xs text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-10 bg-navy/10" />
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-navy">95%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {showAddReviewButton && (
            <Link href="/reviews" className="btn-navy">
              Share Your Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
