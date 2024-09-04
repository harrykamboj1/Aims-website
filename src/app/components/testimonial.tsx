import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = () => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnFocusIn: false,
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-mainPurple">
          What Our Students Say
        </h2>
        <Carousel
          plugins={[Autoplay(autoplayOptions)]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
              >
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-md h-72 flex flex-col justify-between m-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.stars
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill={i < testimonial.stars ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">
                      {testimonial.review}
                    </p>
                  </div>
                  <p className="font-semibold text-mainPurple text-sm">
                    {testimonial.name}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
