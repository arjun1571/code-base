"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/@components/core/Icon/Icon";
import img1 from "@/@assets/02.jpg";
import Input from "@/@components/core/Input/Input";
import Button from "@/@components/core/Button/Button";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import ButtonLoader from "@/@components/core/Button/ButtonLoader";
import RadioGroup from "@/@components/core/Radio/RadioGroup";
import { getCookie, setCookie } from "cookies-next";

const ProductSchema = yup.object({
  first_name: yup.string().required("Full name is required"),
  email: yup.string(),
  phone: yup.string().required("Phone no is required"),
  address: yup.string().required("Address no is required"),
  payment: yup.mixed().required("Payment method is required"),
  shipping: yup.mixed(),
});
const defaultValue: any = {
  first_name: "",
  email: "",
  phone: "",
  address: "",
  payment: "",
  shipping: "",
};

const Page: React.FC = () => {
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(ProductSchema),
    defaultValues: defaultValue,
  });

  const statusOption = [
    {
      value: "all bangladesh",
      label: "All Bangladesh",
      label1: "130",
    },
    {
      value: "dhaka city",
      label: "Dhaka City",
      label1: "70",
    },
  ];
  const paymentOption = [
    {
      value: "cash on delivery",
      label: "Cash On Delivery",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Try localStorage first
    const localCart = localStorage.getItem("cartData");
    if (localCart) {
      setCartItems(JSON.parse(localCart));
    } else {
      // Fallback to cookies
      const cookieCart = getCookie("cartData");
      if (cookieCart) {
        const parsedCart = JSON.parse(cookieCart.toString());
        setCartItems(parsedCart);
        localStorage.setItem("cartData", JSON.stringify(parsedCart));
      }
    }
  }, []);

  const formSubmit = async (formData: any) => {
    console.log(formData);
  };

  console.log("cartItemsaaaaaaaaa", cartItems);

  return (
    <div className="max-w-[1192px] mx-auto py-6">
      <form
        className="flex gap-4 flex-col md:flex-row "
        onSubmit={handleSubmit(formSubmit)}
      >
        {/* Left Side - Image Gallery */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-5 h-[100%]">
          <h2 className="font-bold text-xl">Billing Details</h2>
          <Input
            label="Full Name ( আপনার নাম )"
            registerProperty={register("first_name")}
            errorText={errors?.first_name?.message}
            type="text"
            isRequired
            classNames="mb-10"
          />
          <Input
            label="Delivery Address ( ঠিকানা)"
            registerProperty={register("address")}
            errorText={errors?.address?.message}
            type="text"
            isRequired
            classNames="mb-10"
          />
          <Input
            label="Mobile Number (মোবাইল নাম্বার)"
            registerProperty={register("phone")}
            errorText={errors?.phone?.message}
            type="text"
            isRequired
            classNames="mb-10"
          />
          <Input
            label="Email (ই-মেইল) (optional)"
            registerProperty={register("email")}
            errorText={errors?.email?.message}
            type="text"
            classNames="mb-10"
          />
          <div className=" justify-between items-center py-4 border-b border-gray-200">
            <p className="font-semibold mb-2">Shipping</p>
            <Controller
              name="shipping"
              control={control}
              rules={{ required: "Please select a shipping option" }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <RadioGroup
                    name={field.name}
                    options={statusOption}
                    value={field.value?.value}
                    onChange={field.onChange}
                    errorText={error?.message}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>
          <div className=" justify-between items-center py-4 border-b border-gray-200">
            <p className="font-semibold mb-2">Payment Information</p>
            <Controller
              name="payment"
              control={control}
              rules={{ required: "Please select a payment option" }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <RadioGroup
                    name={field.name}
                    options={paymentOption}
                    value={field.value?.value}
                    onChange={field.onChange}
                    errorText={error?.message}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="p-5">
            <div className="pt-5">
              <Button
                type="submit"
                className="bg-black w-full !py-3 uppercase cursor-pointer"
              >
                {isSubmit ? <ButtonLoader /> : "Place Order"}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-5">
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-3">
            <p className="font-semibold text-xl">Product</p>
            <p className="font-semibold text-xl">Subtotal</p>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <div className="flex items-center gap-5">
              <Icon name={"close"} size={20} className="text-gray-500" />
              <div className="flex items-start gap-2">
                <Image
                  className="rounded-lg"
                  height={60}
                  width={60}
                  src={img1}
                  alt={""}
                />
                <div>
                  <p className="text-md font-medium">Curren 8301 - Brown</p>
                </div>
              </div>
            </div>
            <div>
              <p>৳1,750</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <div className="flex items-center gap-5">
              <Icon name={"close"} size={20} className="text-gray-500" />
              <div className="flex items-start gap-2">
                <Image
                  className="rounded-lg"
                  height={60}
                  width={60}
                  src={img1}
                  alt={""}
                />
                <div>
                  <p className="text-md font-medium">Curren 8301 - Brown</p>
                </div>
              </div>
            </div>
            <div>
              <p>৳1,750</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <p className="font-semibold">Subtotal</p>
            <p className="text-red-700 font-semibold">৳8,880</p>
          </div>

          <div className="flex justify-between items-center py-4 ">
            <p className="font-semibold">Total</p>
            <p className="text-red-700 font-semibold">৳8,880</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
