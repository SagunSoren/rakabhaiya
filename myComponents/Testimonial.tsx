"use client";
import TestimonailCard from "@/myComponents/Cards/TestimonailCard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonital({ clientData }: any) {
  return (
    <div className="bg-[#f9f5f6]">
      <div className="max-w-7xl mx-auto pb-20">
        <div className="text-center">
          <p className="uppercase tracking-widest text-sm">
            What our customers say
          </p>
          <h1 className={`text-4xl tracking-widest mb-10 mt-2`}>
            TESTIMONIALS
          </h1>
        </div>

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            {/* You can map through clientData here later */}
            <CarouselItem className="">
              <TestimonailCard />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonailCard />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonailCard />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonailCard />
            </CarouselItem>
          </CarouselContent>

          {/* Wrapper for Bottom Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 border-black hover:bg-black hover:text-white bg-[#f9f5f6]" />
            <CarouselNext className="static translate-y-0 border-black hover:bg-black hover:text-white bg-[#f9f5f6]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonital;
