import Image from "next/image";

const HeroImageCard = ({ imagesrc }: { imagesrc: string }) => {
  return (
    <div className="relative h-140 w-full">
      <Image
        src={imagesrc}
        alt="hero image"
        fill
        className="object-cover"
        sizes="100vw"
      ></Image>
      <button className="absolute bg-white px-10 py-4 bottom-40 max-lg:bottom-10 max-lg:right-10 lg:left-50 uppercase font-light">
        Shop Now
      </button>
    </div>
  );
};
export default HeroImageCard;
