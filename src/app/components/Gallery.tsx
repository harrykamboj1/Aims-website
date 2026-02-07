"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

const Gallery = () => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnFocusIn: false,
  };

  const images = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/aims_image_${i + 1}.jpeg`,
    alt: `AIMS Gallery Image ${i + 1}`,
  }));

  return (
    <section
      id="gallery"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Gallery</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Moments from <span className="gradient-text">Our Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Explore our vibrant learning environment, student achievements, and
            the community that makes AIMS special.
          </p>
        </motion.div>

        {/* Gallery Carousel */}
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
              {images.map((image, index) => (
                <CarouselItem
                  key={image.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-0">
                        <div className="relative w-full aspect-[4/3] overflow-hidden group">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            loading={index < 4 ? "eager" : "lazy"}
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <div className="text-white">
                              <Award className="w-5 h-5 mb-1" />
                              <p className="text-sm font-semibold">
                                AIMS Education
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg hover:bg-primary hover:text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
