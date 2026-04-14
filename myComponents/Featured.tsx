import { cormorant } from "@/lib/fonts";
import FeaturedImageCard from "./Cards/FeaturedImageCard";
import { featureLists } from "@/db/data";

const Featured = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <p className={`${cormorant.className} text-6xl font-bold mt-4`}>
          Featured
        </p>
        <div className="h-1 bg-yellow-300 w-20 mx-auto mt-4 mb-8"></div>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 max-lg:gap-4 px-10 gap-10">
        {featureLists.map((item, index) => (
          <FeaturedImageCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Featured;
