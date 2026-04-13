import FeaturedImageCard from "./Cards/FeaturedImageCard";

const Featured = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <p className="text-3xl mb-10">Featured</p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 max-lg:gap-4 px-10 gap-10">
        <FeaturedImageCard />
        <FeaturedImageCard />
        <FeaturedImageCard />
        <FeaturedImageCard />
      </div>
    </div>
  );
};
export default Featured;
