import Image from "next/image";
import React from "react";
import methodImage from "@/@assets/visa.webp";

const Page: React.FC = () => {
  return (
    <div className="">
      <div className="max-w-[1192px] mx-auto grid-cols-1  sm:grid-cols-2 grid xl:gap-10 gap-5 pt-10 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <div className="">
            <ul className="">
              <li className=" text-gray-400 hover:text-white hover:cursor-pointer">
                Largest Olevs Watches Collection in Bangladesh.
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Majumder House (5th Floor) 39, Purana Paltan, Dhaka.
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Phone: 01841544590
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Mail: official@naviforce.com.bd
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Trade Licanse: TRAD/DSCC/009386/2023
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold">Products</p>
            <ul className="">
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Men Watches
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Women Watches
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Couple
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Smart Watches
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                All Watches
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <div>
            <p className="text-white font-bold">COMPANY</p>
            <ul className="">
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Terms & Conditions
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Delivery & Return Policy
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Refund Policy
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Replacement Warranty
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold">SUPPORT</p>
            <ul className="">
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                How to Buy
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                Contact Us
              </li>
              <li className="mt-1.5 text-gray-400 hover:text-white hover:cursor-pointer">
                About US
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold">Follow US</p>
            {/* <ul className="text-white">
            <li>Men Watches</li>
            <li>Women Watches</li>
            <li>Couple</li>
            <li>Smart Watches</li>
            <li>All Watches</li>
          </ul> */}
            <div className=" mt-5 xl:mt-32">
              <a
                href="https://play.google.com/store/apps/details?id=com.naviforce.bd"
                target="-blank"
                className="mt-20"
              >
                <Image
                  src="https://naviforce.com.bd/wp-content/uploads/2024/11/playstore.67f31165.svg"
                  alt="Play Store Icon"
                  width={100} // Replace with your desired width
                  height={100} // Replace with your desired height
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t xl:mt-10 border-gray-700 p-4">
        <div className="max-w-[1192px] mx-auto mt-5">
          <div className="flex flex-col-reverse items-center justify-between xs:flex-col-reverse lg:flex-row">
            <p className="text-gray-400 text-center sm:text-center lg:text-left xs:pt-4">
              Olevs Bangladesh 2019-2024 All rights reserved
            </p>
            <div className="flex justify-center lg:justify-start">
              <Image className="" src={methodImage} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
