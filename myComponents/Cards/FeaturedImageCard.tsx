import Image from "next/image";

const FeaturedImageCard = ({ data }) => {
  return (
    <div className="group cursor-pointer">
      {" "}
      {/* Added 'group' class here */}
      <div className="h-100 max-lg:h-60 w-full relative overflow-hidden">
        {/* Default Image */}
        <Image
          src={data?.imageSrc1}
          alt="clip"
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />

        {/* Hover Image */}
        <Image
          src={data?.imageSrc2}
          alt="clip hover"
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div>
        <p className="text-xl font-medium">{data?.name}</p>
        <p>₹ {data?.price}</p>
      </div>
    </div>
  );
};
export default FeaturedImageCard;
