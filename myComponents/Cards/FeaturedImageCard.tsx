import Image from "next/image";

const FeaturedImageCard = () => {
  return (
    <div className="group cursor-pointer">
      {" "}
      {/* Added 'group' class here */}
      <div className="h-100 max-lg:h-60 w-full relative overflow-hidden">
        {/* Default Image */}
        <Image
          src="/image1.jpg"
          alt="clip"
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover Image */}
        <Image
          src="/image2.jpg"
          alt="clip hover"
          fill
          className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div>
        <p className="text-xl font-medium">Image Title</p>
        <p>Price</p>
      </div>
    </div>
  );
};
export default FeaturedImageCard;
