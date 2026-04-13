import Hero from "@/myComponents/Hero";
import Navbar from "../myComponents/Navbar";
import Explore from "@/myComponents/Explore";
import Footer from "@/myComponents/Footer";
import Featured from "@/myComponents/Featured";
import Testimonital from "@/myComponents/Testimonial";
import MadebyWomen from "@/myComponents/MadebyWomen";
import Services from "@/myComponents/Services";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Featured />
      <Services />
      <MadebyWomen />
      <Testimonital />

      <Footer />
    </div>
  );
};
export default page;
