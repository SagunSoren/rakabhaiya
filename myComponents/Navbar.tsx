import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="py-1">
      <div className="flex items-center justify-between px-4 mb-4  ">
        <div className=" lg:hidden">
          <div className="">
            <Drawer direction="left">
              <DrawerTrigger>
                <GiHamburgerMenu size={20} className="text-gray-500" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerClose className="flex justify-end">
                    <button className="text-2xl">
                      <IoMdClose />
                    </button>
                  </DrawerClose>
                  <DrawerDescription className="flex flex-col gap-4 mt-10">
                    <DrawerClose asChild>
                      <Link href={"/"}>
                        <p className="text-xl uppercase">Collections</p>
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href={"/aboutus"}>
                        <p className="text-xl uppercase">About Us</p>
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href={"/contactus"}>
                        <p className="text-xl uppercase">Contact Us</p>
                      </Link>
                    </DrawerClose>
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <Image
          src={"/logotrabg.png"}
          alt="logo"
          width={180}
          height={180}
          priority
          sizes="(max-width: 1024px) 50vw, 25vw"
        ></Image>
        <div className="flex justify-between gap-10 max-lg:hidden">
          <Link href="/">
            <p className="uppercase tracking-wider hover:underline underline-offset-8">
              Collections
            </p>
          </Link>
          <Link href="/aboutus">
            <p className="uppercase tracking-wider hover:underline underline-offset-8">
              About us
            </p>
          </Link>
          <Link href="/contactus">
            <p className="uppercase tracking-wider hover:underline underline-offset-8">
              Contact Us
            </p>
          </Link>
        </div>
        <a
          href={
            "https://www.instagram.com/aarucreatives.0?igsh=aW9hZHhhN3FkdHdx"
          }
          target="_blank"
        >
          <div className=" flex max-lg:flex-1 justify-end items-center gap-2">
            <FaInstagram className="text-2xl" />
            <p className="uppercase max-lg:hidden">Follow Us</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
