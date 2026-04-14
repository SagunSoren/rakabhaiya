import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#d8d7d5]">
      <div className="py-20  text-black flex max-lg:flex-col max-lg:items-center max-w-7xl mx-auto justify-between">
        <div className="lg:w-100 max-lg:w-full max-lg:px-10">
          <div className="w-80">
            <div>
              <h1 className="text-2xl mb-4">
                <Image
                  src="/logo.jpg"
                  className="rounded-full shadow-lg"
                  alt="Logo"
                  width={200}
                  height={100}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </h1>
            </div>
            <p className="">
              Curating timeless ethnic wear for the modern woman. From
              hand-woven sarees to contemporary kurtis, we celebrate the art of
              Indian craftsmanship
            </p>
            <div className="flex items-center gap-2">
              <FaLongArrowAltRight />
              <Link href={"/aboutus"}>
                <p className="text-orange-600">Find more</p>
              </Link>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div className=" lg:w-100 max-lg:w-full max-lg:px-10 max-lg:mt-10">
          <h1>Contact Us</h1>
          <div className="text-black/70 text-sm">
            <p className=" mt-6 font-medium">Head office</p>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineLocationOn className="text-black text-2xl" />
              </div>
              <p>City Centre, F Block, Ranchi 834001, Jharkhand, India</p>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <div>
                <MdLocalPhone className="text-black text-2xl" />{" "}
              </div>
              <a href="tel:+91 81466 87151">+91 9111270747</a>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineEmail className="text-black text-2xl" />{" "}
              </div>
              <p>aarucreatives@gmail.com</p>
            </div>
            {/* branch office */}
            <p className="mt-6 font-medium">Branch Office</p>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineLocationOn className="text-black text-2xl" />
              </div>
              <p>8th Street,Jamshedpur,Jharkhand 831002</p>
            </div>
          </div>
        </div>
        {/* Follow Us */}
        <div className="lg:w-60 max-lg:mt-10">
          <p className="mb-4 max-lg:hidden">Follow Us</p>
          <div className="flex gap-2">
            <div className="h-12 flex items-center justify-center w-12 bg-blue-400 rounded-full text-2xl">
              <FaFacebook className="text-white" />
            </div>
            <div className="h-12 flex items-center justify-center w-12 bg-orange-400 rounded-full text-2xl">
              <a
                target="_blank"
                href={
                  "https://www.instagram.com/aarucreatives.0?igsh=aW9hZHhhN3FkdHdx"
                }
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-red-400 rounded-full text-2xl">
              <FaYoutube className="text-white" />
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-blue-400 rounded-full text-2xl">
              <FaLinkedin className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-black flex text-sm justify-between pb-4">
        <p>© 2026 Aaru Creatives</p>
        <div className="flex gap-8 max-lg:hidden">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/aboutus">
            <p>About Us</p>
          </Link>
          <Link href="/contactus">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
