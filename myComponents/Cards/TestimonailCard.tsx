import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
function TestimonailCard() {
  return (
    <div className=" mx-auto lg:w-150 mt-10 text-center flex flex-col gap-10 ">
      <div className="flex items-center justify-center mb-2 mt-2 text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div>
        <p className="text-2xl">
          " Ordered the gift set for my sister's birthday she absolutely loved
          it. The packaging was gorgeous and the quality is outstanding."
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="bg-pink-900 rounded-full w-10 h-10 flex items-center justify-center">
          <p className="text-white">P</p>
        </div>
        <div className="text-start">
          <p className="font-semibold">Priya M.</p>
          <p className="text-gray-600">3 months ago</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonailCard;
