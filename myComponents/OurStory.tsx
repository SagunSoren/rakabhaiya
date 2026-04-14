import { cormorant } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const OurStory = () => {
  return (
    <div>
      <div className="bg-white w-full h-200 max-lg:h-full p-20 max-lg:p-2">
        <div className="bg-[#f8f6f4] w-full h-full flex max-lg:flex-col">
          <div className="w-1/2 h-full relative max-lg:w-full max-lg:h-100">
            <Image
              src={"/hero/image1.png"}
              alt="image"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className="w-1/2 p-10 flex flex-col gap-10 max-lg:w-full ">
            <h1 className="uppercase tracking-widest">Our story</h1>
            <p
              className={`text-7xl max-lg:text-5xl ${cormorant.className} font-bold`}
            >
              Designed by women who lead,{" "}
              <span className="text-pink-600">for women who inspire </span>
            </p>
            <div className="h-2 w-30 bg-yellow-500"></div>
            <p className="text-[#897b74]">
              At our core, we are a brand that celebrates Indian craftsmanship.
              Each piece is lovingly hand-embroidered, weaving tradition into
              contemporary elegance.
            </p>
            <p className="text-[#897b74]">
              From our studio in Ranchi to your hands — every stitch tells a
              story of heritage, passion, and meticulous artistry.
            </p>
            <Link
              href={"/"}
              className="bg-[#292421] text-white text-2xl max-lg:text-xl uppercase px-10 py-4 flex w-fit items-center gap-4"
            >
              View Collection <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStory;
