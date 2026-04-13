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

const Navbar = () => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between px-4 mb-4  ">
        <div className="flex-1">
          <div className="lg:hidden">
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
                    <p className="text-xl uppercase">Shop</p>
                    <p className="text-xl uppercase">Giftables</p>
                    <p className="text-xl uppercase">Collections</p>
                    <div className="h-0.5 bg-gray-300 w-full"></div>
                    <p className="text-xl uppercase">About Us</p>
                    <p className="text-xl uppercase">Contact Us</p>
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <Image
          src={"/logotrabg.png"}
          alt="logo"
          width={200}
          height={200}
          priority
        ></Image>
        <div className="flex-1 flex justify-end items-center">
          <FaPhoneAlt />
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 uppercase tracking-wider max-lg:hidden">
        <p>Shop</p>
        <p>Giftables</p>
        <p>Collections</p>
        <p>About Us</p>
      </div>
    </div>
  );
};
export default Navbar;
