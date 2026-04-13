import ImageCard from "./Cards/ImageCard";

const Explore = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-3xl my-10">Explore</p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-2 max-lg:px-2 gap-10 px-10">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};
export default Explore;
