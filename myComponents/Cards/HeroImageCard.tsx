import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { cormorant } from "@/lib/fonts";
import Link from "next/link";

const HeroImageCard = ({ imagesrc }: { imagesrc: string }) => {
  return (
    <div className="relative h-200 w-full">
      <Image
        src={imagesrc}
        alt="hero image"
        fill
        className="object-cover"
        sizes="100vw"
      ></Image>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
      {/* <div className="flex gap-10 absolute bg-white h-full    bottom-20 max-lg:bottom-10 max-lg:right-10 lg:left-50 font-light">
        <button className="bg-[#f6339a] px-10 py-4  text-white uppercase">
          Shop Now
        </button>
        <button className="bg-transparent border-2 px-10 py-4 text-white uppercase">
          our story
        </button>
      </div> */}
      <div className=" h-full z-10 max-w-3xl w-full absolute left-0 px-30 max-lg:px-4 bottom-30 flex flex-col justify-end gap-10">
        <div className="bg-white/20 backdrop-blur-sm border border-white/30  rounded-4xl shadow-xl max-w-md w-fit px-4 py-2 flex gap-4 items-center">
          <BsStars className="text-yellow-400" size={40} />
          <p className="uppercase font-light text-white tracking-widest ">
            Handmade embroidered accessories
          </p>
        </div>
        <div>
          <h1
            className={`text-8xl text-white ${cormorant.className} tracking-wide max-lg:text-5xl `}
          >
            Crafted <br /> with Love
          </h1>
        </div>
        <div className="h-1 bg-yellow-300 w-20"></div>
        <div className="text-white/90">
          Discover our collection of hand-embroidered hair accessories and
          artisanal giftables — crafted by women who lead, for women who
          inspire.
        </div>
        <div className="flex gap-4">
          <a
            href="#explore"
            className="bg-[#f6339a] flex-1 justify-center h-20 text-white uppercase flex items-center gap-4"
          >
            Shop Now
            <FaArrowRightLong size={20} />
          </a>
          <Link
            href="/aboutus"
            className="flex flex-1 items-center justify-center h-20  bg-transparent border-2 border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            our story
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroImageCard;
