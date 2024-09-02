"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Gallery = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const autoplayOptions = {
    delay: 3000,
  };

  return (
    <motion.div
      className="h-screen   bg-gradient-to-r from-purple-50 to-pink-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="gallery"
    >
      <motion.div
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-mainPurple">
          Our Gallery
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
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="shadow-lg bg-white rounded-lg overflow-hidden h-64">
                    <CardContent className="p-4 h-full flex flex-col justify-between">
                      <div className="relative w-full h-64 mb-2">
                        <Image
                          src={`/aims_image_${index + 1}.jpeg`}
                          alt={`Slide ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                          priority
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
