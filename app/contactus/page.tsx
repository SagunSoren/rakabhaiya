"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MdLocalPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { items } from "@/db/FAQ";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API logic here
  };

  return (
    <div>
      {/* map */}
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.023770806!2d72.71354303141594!3d19.08226120793199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1775129698908!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8901838599268!2d76.75823276365543!3d30.63705233459726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febc0ca8276e1%3A0x6cfce8ef85763dd6!2sMCC%20(%20Mohali%20City%20Centre%20)!5e0!3m2!1sen!2sin!4v1775455450991!5m2!1sen!2sin"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>

      <div className="flex max-w-7xl max-lg:flex-col gap-10 mx-auto mt-20">
        {/* contact us */}
        <div className=" lg:w-120 max-lg:px-4 w-full">
          <p className="text-xl font-semibold pl-6">Head office</p>
          <div className="flex gap-2 mt-2 items-center">
            <div>
              <MdOutlineLocationOn className="text-black text-xl" />
            </div>
            <p>
              City Centre, F Block, Gmada Aerocity, Sahibzada Ajit Singh Nagar,
              Punjab 140306
            </p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <div>
              <MdLocalPhone className="text-black text-xl" />{" "}
            </div>
            <a href="tel:+91 81466 87151">+91 81466 87151</a>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <div>
              <MdOutlineEmail className="text-black text-xl" />{" "}
            </div>
            <p>aarucreatives@gmail.com</p>
          </div>
          {/* <p className="mt-10 font-semibold text-xl pl-6">Branch Office</p>
          <div className="flex gap-2 mt-2 items-center">
            <div>
              <MdOutlineLocationOn className="text-black text-xl" />
            </div>
            <p>
              Office No. 2003, Kamdhenu Commerz, Sector 14, Kharghar, Navi
              Mumbai, Maharashtra 410210
            </p>
          </div> */}
        </div>
        {/* form */}
        <form
          action="https://formsubmit.co/aarucreatives@gmail.com"
          method="POST"
          className="w-full max-lg:px-4"
        >
          <div className="flex max-lg:flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border-2 border-gray-300 p-2"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="w-full border-2 border-gray-300 p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-2 mt-4 hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* FAQ  */}
      <div className="h-1 bg-black/10 max-w-7xl mx-auto mt-10"></div>
      <div className="flex max-lg:flex-col max-w-7xl mx-auto mt-20 mb-20">
        <p className="lg:w-1/3 max-lg:text-center text-2xl">FAQ</p>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-full mx-auto  px-6"
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-xl">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default page;
