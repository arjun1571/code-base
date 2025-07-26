"use client";
import React, { useEffect, useState } from "react";
import imgOne from "@/@assets/Couple-Watches.jpg";
import Image from "next/image";
import Icon from "@/@components/core/Icon/Icon";
import Button from "@/@components/core/Button/Button";
import methodImage from "@/@assets/visa.webp";
import ProductDetails from "@/@components/pages/Product/ProductDetails";
import SingleProductReview from "@/@components/pages/Product/SingleProductReview";
import { ProductService } from "@/@services/apis/Product/Product.service";
import { useParams } from "next/navigation";
import HTMLParser from "@/@components/core/HtmlParser/HtmlParser";
import ItemsSold from "@/@components/core/ItemsSold/ItemSold";

const Page: React.FC = () => {
  const { pid } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [singleWatch, setSingleWatchData] = useState<any>();
  const [moreWatchData, setMoreWatchData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Product details

  const [mainImage, setMainImage] = useState<any>();

  const handleSubImageClick = (image: { src: string; title?: string }) => {
    setMainImage(image);
  };

  const fetchSingleProduct = () => {
    ProductService.getSingleProduct(pid)
      .then((res: any) => {
        if (res?.success) {
          setSingleWatchData(res?.data);
          console.log(res?.data);
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchSingleProduct();
    fetchMoreWatches();
  }, []);

  useEffect(() => {
    if (singleWatch?.images?.length > 0) {
      setMainImage(singleWatch.images[0]);
    }
  }, [singleWatch]);

  const getHighlightedDescription = (
    description: string,
    showMore: boolean
  ) => {
    if (!description) return "";

    const lines = description.split("\n");

    if (!showMore) {
      const previewLines = lines.slice(0, 6); // Up to line 50

      const formatted = previewLines
        .map((line, index) => {
          if (index >= 4 && index < 6) {
            return `<span class="text-gray-300">${line}</span>`;
          }
          return line;
        })
        .join("<br />"); // to maintain line breaks in HTML

      return formatted;
    }

    // showMore === true => full description, no highlight
    return lines.join("<br />");
  };

  const fetchMoreWatches = () => {
    ProductService.getMoreWatches(pid)
      .then((res: any) => {
        if (res?.success) {
          setMoreWatchData(res?.data);
          console.log(res?.data);
        }
      })
      .catch((err: { message: string }) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-[1192px] mx-auto py-6">
      {isLoading ? (
        <div className="h-screen">Loading...</div>
      ) : (
        <div>
          <div className=" xl:flex gap-4 flex-col xl:flex-row bg-white  rounded-lg">
            {/* Left Side - Image Gallery */}
            <div className="w-full xl:w-5/12 xl:ps-4 py-6 xl:px-0 px-4">
              {/* Main Image */}
              <div className="relative overflow-hidden group mb-4">
                <Image
                  src={mainImage?.src || imgOne}
                  alt={mainImage?.title || "Main Product Image"}
                  width={500}
                  height={500}
                  className="w-full h-full transition-transform duration-300 transform group-hover:scale-110 cursor-pointer rounded-lg"
                />
              </div>

              {/* Sub-Images Grid */}
              <div className="grid grid-cols-4 gap-2">
                {singleWatch?.images
                  ?.slice(0, 4)
                  .map((image: any, index: number) => (
                    <div
                      key={index}
                      className="relative overflow-hidden group"
                      onClick={() => handleSubImageClick(image)}
                    >
                      <Image
                        src={image?.src}
                        alt={image?.title}
                        height={500}
                        width={500}
                        className={`w-full h-auto transition-transform duration-300 transform group-hover:scale-110 cursor-pointer rounded-lg ${
                          mainImage === image ? "border-2 border-black" : ""
                        }`}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="w-full xl:w-5/12 py-6 xl:px-0 px-4">
              <div
                className="flex items-center justify-between rounded-md py-2 px-4"
                style={{
                  background:
                    "linear-gradient(90deg, #BC1115 0%, #D9623D 100%)",
                }}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">Flash Deal</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <h3 className="text-xl font-bold text-white border rounded-md text-center w-8 h-8">
                    10
                  </h3>
                  <h3 className="text-xl font-bold text-white border rounded-md text-center w-8 h-8">
                    20
                  </h3>
                  <h3 className="text-xl font-bold text-white border rounded-md text-center w-8 h-8">
                    30
                  </h3>
                </div>
              </div>
              <p className="pt-4 text-2xl font-bold border-b border-gray-300">
                {singleWatch?.title}
              </p>

              <div className="mt-4 flex gap-2 ">
                <p className="text-2xl text-red-700 font-semibold">
                  ৳{singleWatch?.pricing?.sale_price}
                </p>
                <p className="text-2xl text-gray-400 ">
                  <del className="text-[20px]">
                    ৳{singleWatch?.pricing?.regular_price}
                  </del>
                  <span className=" text-red-500">
                    {" "}
                    (
                    {Math.round(
                      ((singleWatch?.pricing?.regular_price -
                        singleWatch?.pricing?.sale_price) /
                        singleWatch?.pricing.regular_price) *
                        100
                    )}
                    %)
                  </span>
                </p>{" "}
              </div>
              <div className="flex items-center gap-2 py-4">
                <Icon
                  className="text-red-600"
                  variant="outlined"
                  name="local_fire_department"
                />
                <ItemsSold />
              </div>
              {singleWatch?.inventory?.stock_quantity && (
                <div>
                  <p className="text-base font-semibold pb-1">
                    Only {singleWatch?.inventory?.stock_quantity} Items Lefts
                  </p>
                  <div className="bg-gray-200 rounded-full py-1 mb-2"></div>
                </div>
              )}
              <div className="flex w-full items-center gap-4 mb-4">
                <div className="min-w-32">
                  <button
                    type="button"
                    //   onClick={() => decrementQuantity(index)}
                    className="bg-gray-300 px-2 !h-9 rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    //   value={product.quantity}
                    value={0}
                    readOnly
                    className="w-16 !h-9 text-center  border border-gray-200  dark:border-gray-600"
                  />
                  <button
                    type="button"
                    //   onClick={() => incrementQuantity(index)}
                    className="bg-gray-300 px-2 h-9 rounded-r"
                  >
                    +
                  </button>
                </div>
                <Button className="gap-2 bg-blue-100 !text-blue-600   w-full hover:cursor-pointer cursor-pointer">
                  Add To Cart
                </Button>
                <Button className="w-full bg-black hover:cursor-pointer">
                  BUY NOW
                </Button>
              </div>
              <div className="border-b border-gray-400 flex w-full  items-center"></div>

              <div className="flex w-full gap-4 mt-4">
                <a
                  href="https://wa.me/8801841544590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="!flex justify-center gap-2 !bg-green-100 !text-green-600 border !border-green-500 hover:!text-white hover:!bg-green-600 w-full hover:cursor-pointer">
                    <Icon variant="outlined" name={"sms"} />
                    <p className="font-semibold">WHATSAPP</p>
                  </Button>
                </a>
                <a href="tel:01841544590" className="block w-full">
                  <Button className="!flex justify-center gap-2 !bg-blue-100 !text-blue-500 border !border-blue-500 w-full hover:!bg-blue-500 hover:!text-white hover:cursor-pointer">
                    <Icon variant="outlined" name="sms" />
                    <p className="font-semibold">01841544590</p>
                  </Button>
                </a>
              </div>

              {/* Additional Product Details */}
              <div className="mt-8">
                <fieldset className="mt-6  border  border-gray-300 py-4 flex items-center  rounded-md px-4">
                  <legend className="text-center">
                    Guaranteed Safe Checkout
                  </legend>
                  {/* <p className="font-semibold"></p> */}
                  <div>
                    <Image src={methodImage} alt={""} />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="w-full xl:w-2/12 bg-gray-50 pt-6 xl:px-2 px-4">
              <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-md mb-2">
                <Icon
                  name="verified_user"
                  variant="outlined"
                  className="text-green-600"
                />
                <div>
                  <p className="font-semibold">রিপ্লেসমেন্ট সুবিধা।</p>
                  <p className="text-xs">
                    7 দিনের ভিতরে পছন্দ না হলে রিটার্ন দিতে পারবেন।{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-md mb-2">
                <Icon
                  name="verified_user"
                  variant="outlined"
                  className="text-green-600"
                />
                <div>
                  <p className="font-semibold">রিপ্লেসমেন্ট সুবিধা।</p>
                  <p className="text-xs">
                    7 দিনের ভিতরে পছন্দ না হলে রিটার্ন দিতে পারবেন।{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-md mb-2">
                <Icon
                  name="verified_user"
                  variant="outlined"
                  className="text-green-600"
                />
                <div>
                  <p className="font-semibold">রিপ্লেসমেন্ট সুবিধা।</p>
                  <p className="text-xs">
                    7 দিনের ভিতরে পছন্দ না হলে রিটার্ন দিতে পারবেন।{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-md mb-2">
                <Icon
                  name="verified_user"
                  variant="outlined"
                  className="text-green-600"
                />
                <div>
                  <p className="font-semibold">রিপ্লেসমেন্ট সুবিধা।</p>
                  <p className="text-xs">
                    7 দিনের ভিতরে পছন্দ না হলে রিটার্ন দিতে পারবেন।{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-md mb-2">
                <Icon
                  name="verified_user"
                  variant="outlined"
                  className="text-green-600"
                />
                <div>
                  <p className="font-semibold">রিপ্লেসমেন্ট সুবিধা।</p>
                  <p className="text-xs">
                    7 দিনের ভিতরে পছন্দ না হলে রিটার্ন দিতে পারবেন।{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-white">
            <div
              className={`xl:pl-40 md:pl-14 pl-0 ${
                showMore ? "h-full" : "h-auto"
              }`}
            >
              <h4 className="text-2xl font-bold">Description</h4>
              <HTMLParser
                htmlContent={getHighlightedDescription(
                  singleWatch?.description || "",
                  showMore
                )}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 !px-10 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
              >
                {showMore ? "View Less" : "View More"}
              </Button>
            </div>
          </div>

          <div className="mt-6 px-4 py-6 rounded-lg bg-white ">
            <SingleProductReview />
          </div>
          <div className="mt-6 px-4 py-6 rounded-lg bg-white ">
            <ProductDetails moreWatchData={moreWatchData} />
          </div>
          <div className="mt-6 px-4 py-6 rounded-lg bg-white ">
            <h3 className="text-xl font-semibold">
              What is the best price of {singleWatch?.title} in Bangladesh?
            </h3>
            <p className="mt-4">
              The latest Price of {singleWatch?.title} in Bangladesh is ৳{" "}
              {singleWatch?.pricing?.sale_price}. You can buy it online at the
              best price from our website or visit our store.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
