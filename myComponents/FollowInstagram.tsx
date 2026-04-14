import { cormorant } from "@/lib/fonts";
import InstagramPhotoCard from "@/myComponents/Cards/InstagramPhotoCard";
import { FaInstagram } from "react-icons/fa";
import { instagramData } from "@/db/instagramData";
import Link from "next/link";

function FollowInstagram() {
  return (
    <div className="pt-10">
      <div className="text-center">
        <h1 className={`text-4xl ${cormorant.className} tracking-[7]`}>
          FOLLOW US ON INSTAGRAM
        </h1>
        <p className={`${cormorant.className} text-2xl tracking-wide mb-10`}>
          @aarucreatives
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 md:gap-2 md:p-10 py-10">
          {instagramData.map((item) => (
            <InstagramPhotoCard
              key={item.id}
              imagesrc={item.imagesrc}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className="text-white text-center mb-10">
        <a
          href={
            "https://www.instagram.com/aarucreatives.0?igsh=aW9hZHhhN3FkdHdx"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#acaca9] w-50 p-2 rounded-sm mx-auto flex items-center justify-center gap-3">
            <FaInstagram />
            <h1 className="text-sm">Follow on instagram</h1>
          </div>
        </a>
      </div>
    </div>
  );
}
export default FollowInstagram;
