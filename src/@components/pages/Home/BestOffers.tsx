"use client";
import React, { useEffect, useState } from "react";
import { ProductService } from "@/@services/apis/Product/Product.service";
import WatchCard from "../Watches/WatchCard";

const Page: React.FC = () => {
  const [cateGoryData, setCategoryData] = useState<any>();
  const fetchProductWithCategory = () => {
    ProductService.getProductWithCategory({
      limit: 5,
      productCategory: "men",
    })
      .then((res: any) => {
        if (res?.success) {
          setCategoryData(res?.data);
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
      })
      .finally(() => {
        // setTableLoading(false);
      });
  };

  useEffect(() => {
    fetchProductWithCategory();
  }, []);

  return (
    <div className="max-w-[1192px] mx-auto pb-5">
      <h2 className="text-2xl font-bold pb-5">The Best Offers</h2>
      <div className="grid xs:grid-cols-2 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-5 ">
        {cateGoryData?.data?.map((data: any, index: number) => (
          <WatchCard key={index} data={data} imgClassName="h-32 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Page;
