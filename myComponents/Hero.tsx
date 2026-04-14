"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroImageCard from "./Cards/HeroImageCard";
import Autoplay from "embla-carousel-autoplay";
const Hero = () => {
  return (
    <div className="h-200 w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <HeroImageCard imagesrc="/hero/image1.png" />
          </CarouselItem>
          <CarouselItem>
            <HeroImageCard imagesrc="/hero/image2.png" />
          </CarouselItem>
          <CarouselItem>
            <HeroImageCard imagesrc="/hero/image3.png" />
          </CarouselItem>
          <CarouselItem>
            <HeroImageCard imagesrc="/hero/image4.png" />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};
export default Hero;
