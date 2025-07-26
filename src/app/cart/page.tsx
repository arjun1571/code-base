"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/@components/core/Icon/Icon";
import img1 from "@/@assets/02.jpg";

import Button from "@/@components/core/Button/Button";
import { useRouter } from "next/navigation";
import RadioGroup from "@/@components/core/Radio/RadioGroup";

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <div className="max-w-[1192px] mx-auto py-6">
      <div className="flex flex-col md:flex-row ">
        {/* Left Side - Image Gallery */}
        <div className="w-full md:w-4/6 h-[100%] pe-5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Action</th>
                <th className="text-left py-3 px-4">Image</th>
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row - you can map through your data to generate multiple rows */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">
                  <Icon name={"close"} size={20} className="text-green-200" />
                </td>
                <td className="py-3 px-4">
                  <Image
                    src={img1}
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-4">Product Name</td>
                <td className="py-3 px-4">$19.99</td>
                <td className="py-3 px-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 border rounded px-2 py-1"
                  />
                </td>
                <td className="py-3 px-4">$19.99</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-2/6 border-2 border-gray-200 p-5 rounded-lg">
          <h2 className="text-xl font-semibold">Cart totals</h2>

          <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <p className="font-semibold">Subtotal</p>
            <p className="text-red-700 font-semibold">৳8,880</p>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <p className="font-semibold">Shippingsss</p>
            <div className="text-right">
              <p className="">Free shipping</p>
              <p className="py-1">All Bangladesh: ৳100</p>
              <p className="">Dhaka City: ৳60</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-4 ">
            <p className="font-semibold">Total</p>
            <p className="text-red-700 font-semibold">৳8,880</p>
          </div>
          <div className="pt-5">
            <Button
              className="bg-red-700 w-full !py-3"
              onClick={() => {
                router.push("/checkout");
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
