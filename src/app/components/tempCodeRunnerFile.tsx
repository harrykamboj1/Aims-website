"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"; // Importing Next.js Image component
import Autoplay from "embla-carousel-autoplay";

const CarouselSection = () => {
  // Autoplay options for left-to-right carousel
  const leftToRightAutoplay = {
    delay: 3000,
  };
  return (
    <div className="h-fit">
      {/* Left to Right Carousel */}
      <div className="mt-10 ">
        <Carousel
          plugins={[
            Autoplay({
              delay: leftToRightAutoplay.delay,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 sm:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1 bg-white">
                  <Card className="shadow-lg bg-white rounded-lg shadow-purple-100">
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="w-full h-60 relative">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
