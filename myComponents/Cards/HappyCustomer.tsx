import { cormorant } from "@/lib/fonts";

const HappyCustomer = () => {
  return (
    <div className="flex items-center justify-center bg-[#f9f5f6]">
      <div className="py-10 px-12 bg-[#F1F0EC] text-center -translate-y-18 shadow-lg rounded-xl">
        <p
          className={`${cormorant.className} text-6xl font-bold text-[#f14c4c] text-start pb-2`}
        >
          500+{" "}
        </p>
        <p className="uppercase tracking-wide">Happy Customers</p>
      </div>
    </div>
  );
};
export default HappyCustomer;
