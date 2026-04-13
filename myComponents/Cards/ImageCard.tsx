import Image from "next/image";

const ImageCard = () => {
  return (
    <div>
      <div className="h-100 max-lg:h-60 w-full relative group overflow-hidden">
        <Image
          src={"/image1.jpg"}
          alt="clip"
          fill
          className="object-cover transition-all duration-300 group-hover:scale-110"
        ></Image>
      </div>
      <div>
        <p className="text-xl font-medium">Image Title</p>
        <p>Price</p>
      </div>
    </div>
  );
};
export default ImageCard;
