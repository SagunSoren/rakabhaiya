import { cormorant } from "@/lib/fonts";
import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import { FiScissors } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
const Services = () => {
  return (
    <div className="bg-[#292420] pt-10 pb-14 text-white/80">
      <div className="max-w-350 mx-auto grid grid-cols-5 max-md:grid-cols-3 max-lg: gap-4  items-center">
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 border-white/40 rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <FaTruck className="size-6" />
          </div>
          <h1 className="text-center uppercase">Free Shipping</h1>
          <p className="text-white/60 text-center">On orders above ₹999</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 border-white/40 rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <FiScissors className="size-6" />
          </div>
          <h1 className="text-center uppercase">Fall & Picot</h1>
          <p className="text-white/60 text-center">
            Premium finishing services
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 border-white/40 rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <CiHeart className="size-6" />
          </div>
          <h1 className="text-center uppercase">Handmade</h1>
          <p className="text-white/60 text-center">Crafted with love</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 border-white/40 rounded-full w-20 h-20 flex items-center justify-center mb-4">
            <IoDiamondOutline className="size-6" />
          </div>
          <h1 className="text-center uppercase">Pure Fabrics</h1>
          <p className="text-white/60 text-center">Only the finest materials</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 border-white/40 rounded-full w-20 h-20 flex items-center  justify-center mb-4">
            <AiFillSafetyCertificate className="size-6" />
          </div>
          <h1 className="text-center uppercase">Quality Assured</h1>
          <p className="text-white/60 text-center">100% satisfaction</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
