"use client";
import React from "react";
import Image from "next/image";
import Icon from "@/@components/core/Icon/Icon";
import img1 from "@/@assets/02.jpg";

import Button from "@/@components/core/Button/Button";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  return (
    <div className="max-w-[900px] mx-auto py-6">
      <p className="text-xl font-semibold text-[#7A9C59] p-6 text-center  rounded-xl outline-dashed">
        Thank you. Your order has been received.
      </p>
      <div>
        <div className="flex items-center gap-4 py-10">
          <p className="border-r border-gray-300 px-4 h-24">
            Order number: <br />{" "}
            <span className="text-lg font-semibold">125930</span>
          </p>
          <p className="border-r border-gray-300 px-4 text-center h-24">
            Date: <br />{" "}
            <span className="text-lg font-semibold">April 21, 2025</span>
          </p>

          <p className="border-r border-gray-300 px-4 text-center h-24">
            Email: <br />
            <span className="text-lg font-semibold">
              arjundasback515@gmail.com{" "}
            </span>
          </p>
          <p className="border-r border-gray-300 px-4 text-center h-24">
            Total: <br />{" "}
            <span className="text-lg font-semibold"> ৳4,050 </span>
          </p>
          <p className="text-center h-24">
            Payment method: <br />
            <span className="text-lg font-semibold">
              COD ( ক্যাশ অন ডেলিভারী )
            </span>
          </p>
        </div>
        <p className="text-gray-500">Pay with cash upon delivery.</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold my-8 uppercase">Order details</h3>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="font-semibold">Product</p>
          <p className="text-red-700 font-semibold">Total</p>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="">Casio MTP-VD02BL-2EUDF × 1</p>
          <p className="text-red-700 font-semibold">৳8,880</p>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="">Subtotal: </p>
          <p className="text-red-700 font-semibold">৳8,880</p>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="">Shipping: </p>
          <p className="text-red-700 font-semibold">৳8,880</p>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="">Payment method: </p>
          <p className="text-red-700 font-semibold">৳8,880</p>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="font-semibold text-xl">Total:</p>
          <p className="text-red-700 font-semibold">৳8,880</p>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <p className="font-semibold text-2xl">Actions: </p>
          <Button className="bg-black">INVOICE</Button>
        </div>
        <div className="py-7">
          <h3 className="text-2xl uppercase font-semibold">Billing address</h3>
          <address className="pt-4 text-gray-500">ARJUN</address>
          <address className="text-gray-500">
            ga-133 hazaribari, mohakhali, dhaka{" "}
          </address>
          <address className="text-gray-500">+8801824751931</address>
          <address className="text-gray-500">arjundasback515@gmail.com</address>
        </div>
      </div>
    </div>
  );
};

export default Page;
