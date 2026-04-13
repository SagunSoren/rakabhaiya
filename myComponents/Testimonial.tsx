"use client";
import TestimonailCard from "@/myComponents/Cards/TestimonailCard";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonital({ clientData }: any) {
  return (
    <div className="bg-[#ffffff] py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <h1 className={` text-4xl tracking-widest mb-10`}>TESTIMONIALS</h1>
        </div>

        <div className="flex max-lg:flex-col items-center justify-between lg:gap-8">
          {/* Left Side: Review Summary */}
          <div className=" w-80 pt-10 rounded-lg shrink-0">
            <div className="flex gap-4">
              <div className="relative h-40 w-40 shadow-lg rounded-full shrink-0">
                <Image
                  src="/logo.jpg"
                  fill
                  sizes="100px"
                  alt="Vivah Photography"
                  className="rounded-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">{clientData?.name}</h1>
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-sm text-gray-600">7 google reviews</p>
                <button className="border border-black rounded-sm text-center p-1 mt-2 text-sm hover:bg-black hover:text-white transition-colors">
                  Write a review
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Shadcn Carousel */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            opts={{
              align: "center", // Keeps the active card centered
              loop: true,
            }}
            className="w-full max-w-4xl px-12 lg:px-0 " // Added padding so arrows have space on mobile
          >
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  // FIXED: Changed basis:full to basis-full
                  className="pl-2 md:pl-4 basis-full md:basis-1 lg:basis-1/3 flex justify-center"
                >
                  <div className="p-1 w-full max-w-90 sm:max-w-none">
                    <TestimonailCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* FIXED: Removed 'hidden md:block' to show on mobile */}
            <div className="flex mt-4">
              <CarouselPrevious className="static translate-y-0 translate-x-0 mr-2 lg:absolute lg:-left-12 lg:top-1/2 lg:-translate-y-1/2" />
              <CarouselNext className="static translate-y-0 translate-x-0 lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonital;
