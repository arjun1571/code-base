"use client";
import Image from "next/image";
import bandLogo from "@/@assets/brand-logo.png";
import Icon from "@/@components/core/Icon/Icon";
import SignUpDrawer from "../SignUp/SignUpDrawer";
import { GlobalContext } from "../Context/GlobalContext";
import ShapingCartDrawer from "../ShapingCart/ShapingCartDrawer";
import { useRouter } from "next/navigation";
import MenuDrawer from "../SmallScreenMenue/MenuDrawer";
import { useContext } from "react";

const Page: React.FC = () => {
  const router = useRouter();
  const {
    isSignUpDrawer,
    setIsSignUpDrawer,
    isCartDrawer,
    setIsCartDrawer,
    isMenuDrawer,
    setIsMenuDrawer,
  } = useContext(GlobalContext);

  const handleSignUpClick = () => {
    setIsSignUpDrawer(true);
  };
  const handleShapingCart = () => {
    setIsCartDrawer(true);
  };

  const handleMenuClick = () => {
    setIsMenuDrawer(true);
  };

  return (
    <div>
      {/* Sticky Top Bar */}
      <div className=" bg-white shadow-md">
        <div className="max-w-[1192px] mx-auto h-[80px] flex items-center 2xl:px-0 px-4">
          <div className="flex items-center xl:gap-8 justify-between w-full ">
            <div className="flex lg:flex-row flex-row-reverse items-center gap-8  ">
              <Image
                src={bandLogo}
                alt={""}
                width={100}
                height={10}
                className="!py-5 cursor-pointer  xs:w-14 sm:w-20 xl:w-24"
                onClick={() => router.push("/")}
              />
              <div className="lg:block hidden">
                <div className="relative">
                  <div>
                    <input
                      type="text"
                      placeholder="Search for products"
                      className="p-2 lg:min-w-[250px] xl:min-w-[400px] 2xl:min-w-[500px] pr-10 border dark:text-white dark:bg-black dark:border-gray-700 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-400 focus:dark:ring-gray-700 focus:outline-none"
                    />
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-1">
                      <Icon name={"search"} variant="outlined" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:block hidden">
                <div
                  className="flex items-center gap-2 border border-gray-400 rounded-full px-3 py-1 cursor-pointer "
                  onClick={handleSignUpClick}
                >
                  <Icon name={"person"} size={30} className="text-gray-400" />
                  <p className="text-sm text-gray-600">Login / Register</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="block lg:hidden">
                  <Icon
                    name={"search"}
                    size={40}
                    className="text-gray-400"
                    onClick={handleMenuClick}
                  />
                </div>
                <div className="hidden lg:block">
                  <p className="text-black font-semibold text-sm">24 Support</p>
                  <p className="text-blue-500 text-sm">01824751931</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 lg:gap-3 cursor-pointer">
              <Icon
                name={"shopping_cart"}
                size={38}
                variant="outlined"
                className="text-gray-400 border-r border-gray-300 pe-3  "
                onClick={handleShapingCart}
              />
              <div className=" items-center flex">
                <div className="hidden lg:block">
                  <p className="text-[#bc1215] font-semibold text-sm">৳3,900</p>
                  <p className="text-sm">0 items</p>
                </div>
                <div className="block lg:hidden mt-1">
                  <Icon
                    name={"menu"}
                    size={38}
                    variant="outlined"
                    className="text-gray-400  "
                    onClick={handleMenuClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpDrawer
        isSignUpDrawer={isSignUpDrawer}
        setIsSignUpDrawer={setIsSignUpDrawer}
      />
      <ShapingCartDrawer
        isCartDrawer={isCartDrawer}
        setIsCartDrawer={setIsCartDrawer}
      />
      <MenuDrawer
        isCartDrawer={isMenuDrawer}
        setIsCartDrawer={setIsMenuDrawer}
      />
    </div>
  );
};

export default Page;
