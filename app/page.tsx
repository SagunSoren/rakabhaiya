import Hero from "@/myComponents/Hero";
import Navbar from "../myComponents/Navbar";
import Explore from "@/myComponents/Explore";
import Footer from "@/myComponents/Footer";
import Featured from "@/myComponents/Featured";
import Testimonital from "@/myComponents/Testimonial";
import MadebyWomen from "@/myComponents/MadebyWomen";
import Services from "@/myComponents/Services";
import HappyCustomer from "@/myComponents/Cards/HappyCustomer";
import FollowInstagram from "@/myComponents/FollowInstagram";

const page = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <Featured />
      <Services />
      <MadebyWomen />
      <HappyCustomer />
      <Testimonital />
      <FollowInstagram />

    </div>
  );
};
export default page;
