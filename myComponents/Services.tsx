import Image from "next/image";
import { FaTruck } from "react-icons/fa6";
const Services = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-3xl text-center mb-10">
        <p>Services</p>
      </div>
      <div className="max-w-350 mx-auto grid grid-cols-5 max-md:grid-cols-3  items-center">
        <div className="flex flex-col items-center">
          <Image
            src={"/serviceslogos/image1.avif"}
            alt="Free Shipping"
            width={100}
            height={100}
          />
          <h1 className="text-center uppercase">Free Shipping</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/serviceslogos/image2.avif"}
            alt="Fall and picot services"
            width={100}
            height={100}
          />
          <h1 className="text-center uppercase">Fall and picot services</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/serviceslogos/image3.avif"}
            alt="HandMade"
            width={100}
            height={100}
          />
          <h1 className="text-center uppercase">HandMade</h1>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={"/serviceslogos/image4.avif"}
            alt="Pure Fabrics"
            width={100}
            height={100}
          />
          <h1 className="text-center uppercase">Pure Fabrics</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/serviceslogos/image5.avif"}
            alt="Quality Assurance"
            width={100}
            height={100}
          />
          <h1 className="text-center uppercase">Quality Assurance</h1>
        </div>
      </div>
    </div>
  );
};
export default Services;
