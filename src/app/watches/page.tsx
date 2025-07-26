"use client";
import TermsCheckbox from "@/@components/core/Checkbox/TermsCehckbox";
import Icon from "@/@components/core/Icon/Icon";
import React, { useState, useRef, useEffect } from "react";
import { ProductService } from "@/@services/apis/Product/Product.service";
import WatchCard from "@/@components/pages/Watches/WatchCard";

const Page: React.FC = () => {
  const [watchData, setWatchData] = useState<any>("");
  const min = 790;
  const max = 8550;
  const [minPrice, setMinPrice] = useState<number>(min);
  const [maxPrice, setMaxPrice] = useState<number>(max);
  const [activeThumb, setActiveThumb] = useState<"min" | "max" | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  console.log(watchData);

  const handleMouseDown = (thumb: "min" | "max") => {
    setActiveThumb(thumb);
  };

  const handleMouseUp = () => {
    setActiveThumb(null);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!activeThumb || !sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const position = Math.min(
      Math.max((e.clientX - sliderRect.left) / sliderRect.width, 0),
      1
    );
    const newValue = Math.round(min + position * (max - min));

    if (activeThumb === "min") {
      setMinPrice(Math.min(newValue, maxPrice - 1));
    } else {
      setMaxPrice(Math.max(newValue, minPrice + 1));
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeThumb, minPrice, maxPrice]);

  const minPosition = ((minPrice - min) / (max - min)) * 100;
  const maxPosition = ((maxPrice - min) / (max - min)) * 100;

  const checkboxData = [
    {
      name: "terms1",
      label: "LIGE",
      rightLabel: "(1)",
    },
    {
      name: "terms2",
      label: "Naviforce",
      rightLabel: "(2)",
    },
    {
      name: "terms3",
      label: "Olevs",
      rightLabel: "(3)",
    },
    {
      name: "terms4",
      label: "Poedagar",
      rightLabel: "(4)",
    },
    {
      name: "terms5",
      label: "Casio",
      rightLabel: "(5)",
    },
    {
      name: "terms6",
      label: "Curren",
      rightLabel: "(6)",
    },
    {
      name: "terms7",
      label: "Q&Q",
      rightLabel: "(7)",
    },
    {
      name: "terms8",
      label: "Skmei",
      rightLabel: "(8)",
    },
  ];
  const category = [
    {
      name: "terms1",
      label: "Accessories",
      rightLabel: "(1)",
    },
    {
      name: "terms2",
      label: "Belt",
      rightLabel: "(2)",
    },
    {
      name: "terms3",
      label: "Olevs",
      rightLabel: "(3)",
    },
    {
      name: "terms4",
      label: "Best Selling",
      rightLabel: "(4)",
    },
    {
      name: "terms5",
      label: "Casio",
      rightLabel: "(5)",
    },
    {
      name: "terms6",
      label: "Curren",
      rightLabel: "(6)",
    },
    {
      name: "terms7",
      label: "Q&Q",
      rightLabel: "(7)",
    },
    {
      name: "terms8",
      label: "Skmei",
      rightLabel: "(8)",
    },
  ];

  const fetchProduct = () => {
    ProductService.getProduct()
      .then((res: any) => {
        if (res?.success) {
          setWatchData(res?.data);
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
    fetchProduct();
  }, []);

  return (
    <div className="max-w-[1192px] mx-auto py-5 min-h-[47vh]">
      <div className="flex  gap-6">
        <div className="md:w-1/5 xl:block hidden">
          <h3 className="font-semibold text-md text-gray-600">
            Filter by price
          </h3>
          {/* Double Range Slider Container */}
          <div className="mt-4 relative h-8" ref={sliderRef}>
            {/* Background Track */}
            <div className="absolute top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full w-full"></div>

            {/* Active Range Track */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-red-600 rounded-full"
              style={{
                left: `${minPosition}%`,
                width: `${maxPosition - minPosition}%`,
              }}
            ></div>

            {/* Min Price Thumb */}
            <div
              className="absolute border-s-4 h-4  border-red-600 -translate-y-1/2 top-1/2 cursor-pointer z-10 shadow-md"
              style={{
                left: `${minPosition}%`,
              }}
              onMouseDown={() => handleMouseDown("min")}
            ></div>

            {/* Max Price Thumb */}
            <div
              className="absolute border-s-4 h-4  border-red-600  -translate-y-1/2 top-1/2 cursor-pointer z-10 shadow-md"
              style={{
                left: `${maxPosition}%`,
              }}
              onMouseDown={() => handleMouseDown("max")}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="">
              Price:{" "}
              <span className="font-semibold">
                ৳{minPrice} — ৳{maxPrice}
              </span>
            </p>
            <button className="bg-blue-100 px-4 py-1.5 text-sm uppercase font-semibold text-blue-400 rounded-md hover:bg-blue-300 transition">
              filter
            </button>
          </div>
          <div className="border-b border-gray-300 my-5"></div>
          <div>
            <h3 className="font-semibold text-md text-gray-600">
              Filter by Brand
            </h3>
            {checkboxData.map((item, index) => (
              <TermsCheckbox
                key={index}
                name={item.name}
                label={item.label}
                rightLabel={item.rightLabel}
                className="mt-4"
                labelClassName="flex items-center justify-between w-full"
              />
            ))}
          </div>
          <div className="mt-5">
            <h3 className="font-semibold text-md text-gray-600">
              Product categories
            </h3>
            {category.map((item, index) => (
              <TermsCheckbox
                key={index}
                name={item.name}
                label={item.label}
                rightLabel={item.rightLabel}
                className="mt-4"
                labelClassName="flex items-center justify-between w-full"
              />
            ))}
          </div>
        </div>
        <div className="xl:w-4/5 w-full">
          <div className="flex items-center  justify-between">
            <div>
              <p className="text-lg">Home / Watches</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Icon name={"tune"} />
              <p className="text-lg">Filters</p>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {watchData?.data?.map((watch: any, index: string) => (
                <WatchCard
                  key={index}
                  data={watch}
                  imgClassName="h-32 rounded-lg "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
