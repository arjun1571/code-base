"use client";
import React from "react";
import MoreProductCard from "@/@components/core/Cart/MoreProductCard";

const ProductDetails: React.FC<any> = ({ moreWatchData }: any) => {
  return (
    <div className="max-w-[1192px] mx-auto pb-5">
      <h2 className="text-2xl font-bold pb-5">More Watches</h2>
      <div className="grid xs:grid-cols-2 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 ">
        {moreWatchData?.map((data: any, index: number) => (
          <MoreProductCard key={index} data={data} isAddToCartButton={false} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
