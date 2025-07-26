import React from "react";
import subBannerOne from "@/@assets/Couple-Watches.jpg";
import subBannerTwo from "@/@assets/Naviforce-men-Watches.jpg";
import subBannerThree from "@/@assets/Smart-Watches-jpg-webp.webp";
import subBannerFour from "@/@assets/Women-Watches.jpg";
import watchOne from "@/@assets/watch1.jpeg";
import ProductCard from "@/@components/core/Cart/ProductCart";

const PopularProduct: React.FC = () => {
  const offerData = [
    {
      name: "Single Slot Watch Box – Brown White",
      image: watchOne,
      discount: "20%",
      price: 100,
      discountPrice: 80,
    },
    {
      name: "Colmi C8 Max – Black",
      image: subBannerTwo,
      discount: "15%",
      price: 150,
      discountPrice: 127.5,
    },
    {
      name: "Naviforce NT12 Smart Watch –",
      image: subBannerThree,
      discount: "30%",
      price: 120,
      discountPrice: 84,
    },
    {
      name: "COLMI P81 Smartwatch – Silver",
      image: subBannerFour,
      discount: "25%",
      price: 80,
      discountPrice: 60,
    },
    {
      name: "COLMI P81 Smartwatch – Black",
      image: subBannerOne,
      discount: "10%",
      price: 50,
      discountPrice: 45,
    },
    {
      name: "COLMI P71 Smartwatch Gold",
      image: subBannerTwo,
      discount: "35%",
      price: 90,
      discountPrice: 58.5,
    },
    {
      name: "Single Slot Watch Box – Brown White",
      image: watchOne,
      discount: "20%",
      price: 100,
      discountPrice: 80,
    },
    {
      name: "Colmi C8 Max – Black",
      image: subBannerTwo,
      discount: "15%",
      price: 150,
      discountPrice: 127.5,
    },
    {
      name: "Naviforce NT12 Smart Watch –",
      image: subBannerThree,
      discount: "30%",
      price: 120,
      discountPrice: 84,
    },
    {
      name: "COLMI P81 Smartwatch – Silver",
      image: subBannerFour,
      discount: "25%",
      price: 80,
      discountPrice: 60,
    },
    {
      name: "COLMI P81 Smartwatch – Black",
      image: subBannerOne,
      discount: "10%",
      price: 50,
      discountPrice: 45,
    },
    {
      name: "COLMI P71 Smartwatch Gold",
      image: subBannerTwo,
      discount: "35%",
      price: 90,
      discountPrice: 58.5,
    },
    {
      name: "COLMI P71 Smartwatch Gold",
      image: subBannerTwo,
      discount: "35%",
      price: 90,
      discountPrice: 58.5,
    },
    {
      name: "COLMI P71 Smartwatch Gold",
      image: subBannerTwo,
      discount: "35%",
      price: 90,
      discountPrice: 58.5,
    },
    {
      name: "COLMI P71 Smartwatch Gold",
      image: subBannerTwo,
      discount: "35%",
      price: 90,
      discountPrice: 58.5,
    },
  ];

  return (
    <div className="max-w-[1192px] mx-auto pb-5">
      <h2 className="text-2xl font-bold pb-5">Popular Watches​</h2>
      <div className="grid xs:grid-cols-2 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-5 ">
        {offerData?.map((data, index) => (
          <ProductCard key={index} data={data} imgClassName="h-32 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
