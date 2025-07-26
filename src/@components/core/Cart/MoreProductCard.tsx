"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils";

// Define the type for the data prop
interface ProductData {
  image: string;
  name: string;
  discount: string | number;
  price: number;
  originalPrice?: number;
}

interface ProductCardProps {
  data: any;
  onAddToCart?: () => void;
  onOrderNow?: () => void;
  imgClassName?: string;
  isAddToCartButton?: boolean;
}

const MoreProductCard: React.FC<ProductCardProps> = ({
  data,
  onAddToCart,
  onOrderNow,
  imgClassName,
  isAddToCartButton = true,
}) => {
  const router = useRouter();
  const handleDetails = (proName: string) => {
    router.push(`${slugify(proName)}`);
  };

  return (
    <div className="bg-white p-3 rounded-lg relative flex flex-col h-full border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:z-10">
      {/* Content above the buttons */}
      <div>
        <Image
          src={data?.featured_image?.src}
          alt={data?.featured_image?.title}
          width={200}
          height={200}
          className={`cursor-pointer ${
            imgClassName ? imgClassName : "rounded-lg h-48 object-cover w-full"
          }`}
          onClick={() => handleDetails(data?.slug)}
        />

        {/* Discount badge */}
        <p className="absolute bg-red-700 text-white text-xs px-2 rounded-lg py-1 left-5 top-5">
          -
          {Math.round(
            ((data?.pricing?.regular_price - data?.pricing?.sale_price) /
              data?.pricing.regular_price) *
              100
          )}
        </p>

        {/* Product name */}
        <p className="mt-2 font-semibold text-[14px] tracking-wider">
          {data.title}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-red-700 font-semibold text-sm">
            ৳{data?.pricing?.sale_price}
          </p>
          <p className="text-gray-400 text-sm">
            <del>
              ৳{data?.pricing?.regular_price ?? data?.pricing?.regular_price}
            </del>
          </p>
        </div>
      </div>

      {/* Buttons container */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        {isAddToCartButton && (
          <Button
            onClick={onAddToCart}
            className="w-full mt-4 !bg-blue-100 !text-blue-500 !text-xs font-semibold  !px-2 cursor-pointer text-nowrap"
          >
            Add To Cart
          </Button>
        )}

        {/* Order Now Button */}
        <Button
          className="w-full mt-4 bg-black font-semibold !text-xs !px-2 cursor-pointer text-nowrap"
          onClick={() => {
            router.push(`/checkout`);
          }}
        >
          ORDER NOW
        </Button>
      </div>
    </div>
  );
};

export default MoreProductCard;
