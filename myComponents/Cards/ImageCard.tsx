import Image from "next/image";

const ImageCard = ({ data }) => {
  return (
    <div>
      <div className="h-100 max-lg:h-60 w-full relative group overflow-hidden">
        <Image
          src={data?.imageSrc}
          alt="clip"
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-all duration-300 group-hover:scale-110"
        ></Image>
        <div className="absolute bg-white/90 rounded-xl top-4 left-4 px-4 uppercase text-sm py-1 tracking-wide">
          <p>{data.category}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xl font-medium">{data.name}</p>
        <p className="text-gray-700">₹{data.price}</p>
      </div>
    </div>
  );
};
export default ImageCard;
