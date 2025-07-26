"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils";
import Button from "@/@components/core/Button/Button";
import { setCookie, getCookie } from "cookies-next";

interface PricingData {
  regular_price: number;
  sale_price: number;
}

interface FeaturedImage {
  src: string;
  title?: string;
}

interface ProductData {
  id: string | number;
  title: string;
  slug: string;
  featured_image: FeaturedImage;
  pricing: PricingData;
}

interface CartItem extends ProductData {
  quantity: number;
}

interface ProductCardProps {
  data: ProductData;
  onAddToCart?: () => void;
  imgClassName?: string;
  isAddToCartButton?: boolean;
}

const WatchCard: React.FC<ProductCardProps> = ({
  data,
  onAddToCart,
  imgClassName,
  isAddToCartButton = true,
}) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/product/${slugify(data.slug)}`);
  };

  const calculateDiscount = () => {
    return Math.round(
      ((data.pricing.regular_price - data.pricing.sale_price) /
        data.pricing.regular_price) *
        100
    );
  };

  const handleOrderNow = async (products: any) => {
    try {
      const existingCart = getCookie("cartData");
      let cartItems: CartItem[] = existingCart
        ? JSON.parse(existingCart.toString())
        : [];

      for (const product of products) {
        const existingItemIndex = cartItems.findIndex(
          (item) => item.id === product.id
        );

        if (existingItemIndex >= 0) {
          cartItems[existingItemIndex].quantity += product.quantity;
        } else {
          cartItems.push({ ...product });
        }
      }

      await new Promise<void>((resolve) => {
        setCookie("cartData", JSON.stringify(cartItems), {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        resolve();
      });

      router.push("/checkout");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="bg-white p-3 rounded-lg relative flex flex-col h-full border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
      {/* Product Image */}
      <div
        className="cursor-pointer overflow-hidden rounded-lg"
        onClick={handleDetails}
      >
        <Image
          src={data.featured_image.src}
          alt={data.featured_image.title || data.title}
          width={240}
          height={240}
          className={`w-full h-48 object-cover hover:opacity-90 transition-opacity ${
            imgClassName || ""
          }`}
        />
      </div>

      {/* Discount Badge */}
      {data.pricing.regular_price > data.pricing.sale_price && (
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
          {calculateDiscount()}% OFF
        </div>
      )}

      {/* Product Info */}
      <div className="mt-3 flex-grow">
        <h3
          className="font-medium text-sm hover:text-blue-600 cursor-pointer line-clamp-2"
          onClick={handleDetails}
        >
          {data.title}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-600 font-semibold">
            ৳{data.pricing.sale_price.toLocaleString()}
          </span>
          {data.pricing.regular_price > data.pricing.sale_price && (
            <span className="text-gray-400 text-xs">
              <del>৳{data.pricing.regular_price.toLocaleString()}</del>
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        {isAddToCartButton && (
          <Button
            onClick={onAddToCart}
            className="w-full mt-4 !bg-blue-100 !text-blue-500 !text-xs font-semibold  !px-2 cursor-pointer text-nowrap"
          >
            Add To Cart
          </Button>
        )}

        <Button
          className="w-full mt-4 bg-black font-semibold !text-xs !px-2 cursor-pointer text-nowrap"
          // onClick={() => handleOrderNow({ data })}
        >
          ORDER NOW
        </Button>
      </div>
    </div>
  );
};

export default WatchCard;
