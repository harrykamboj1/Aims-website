"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { testimonials } from "../data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = () => {
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    stopOnFocusIn: false,
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Student Success Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Don&apos;t just take our word for it. Hear from students who have
            achieved their dreams with AIMS.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            plugins={[Autoplay(autoplayOptions)]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Quote className="w-16 h-16 text-primary" />
                      </div>

                      {/* Decorative Gradient */}
                      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl"></div>

                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Stars */}
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.stars
                                  ? "text-warning fill-warning"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 mb-6 leading-relaxed flex-1 text-balance">
                          &quot;{testimonial.review}&quot;
                        </p>

                        {/* Author */}
                        <div className="pt-6 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                AIMS Student
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg hover:bg-primary hover:text-white" />
          </Carousel>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white rounded-full shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            {/* <div className="w-px h-12 bg-gray-200"></div> */}
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {testimonials.length}+
              </div>
              <div className="text-sm text-gray-600">Happy Students</div>
            </div> */}
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
