"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/@components/core/Icon/Icon";

const Page: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const submenuRef = useRef<HTMLUListElement | null>(null);

  const items = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Reviews", route: "/reviews" },
    {
      id: 3,
      name: "Shop",
      route: "/shop",
      submenu: [
        { id: 1, name: "All Watch", route: "/watches" },
        { id: 2, name: "Men", route: "/watches/men" },
        { id: 3, name: "Women", route: "/watches/women" },
        { id: 4, name: "Couple", route: "/watches/couple" },
      ],
    },
    { id: 4, name: "Flash sale", route: "/flash-sale" },
    {
      id: 5,
      name: "Collection",
      route: "/shop",
      submenu: [
        { id: 1, name: "Leather Strap", route: "/all-watch" },
        { id: 2, name: "Silicone Strap", route: "/men" },
        { id: 3, name: "Stainless Steel", route: "/women" },
        { id: 4, name: "Dual Time Watch", route: "/couple" },
        { id: 5, name: "Digital Watch", route: "/couple" },
        { id: 6, name: "Dual Strap", route: "/couple" },
        { id: 7, name: "Quartz Standard", route: "/couple" },
        { id: 8, name: "Quartz Chronograph", route: "/couple" },
        { id: 9, name: "Quartz Calendar", route: "/couple" },
        { id: 10, name: "Multi-Function Quartz", route: "/couple" },
        { id: 11, name: "Mechanical Watch", route: "/couple" },
        { id: 12, name: "Nylon Strap", route: "/couple" },
      ],
    },
    {
      id: 6,
      name: "Brand",
      route: "/shop",
      submenu: [
        { id: 1, name: "Naviforce", route: "/all-watch" },
        { id: 2, name: "Casio", route: "/men" },
        { id: 3, name: "Olevs", route: "/women" },
        { id: 4, name: "Curren", route: "/couple" },
        { id: 5, name: "Poedagar", route: "/couple" },
        { id: 6, name: "Skmei", route: "/couple" },
        { id: 7, name: "Colmi", route: "/couple" },
        { id: 8, name: "Zeblaze", route: "/couple" },
      ],
    },
    {
      id: 7,
      name: "Accessories",
      route: "/shop",
      submenu: [
        { id: 1, name: "Watch Belt", route: "/all-watch" },
        { id: 2, name: "Watch Box", route: "/men" },
      ],
    },
  ];

  const toggleSubmenu = (id: number) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black xs:bg-red-500 h-[50px] flex items-center">
      <div className="mx-auto flex items-center w-[300px] sm:w-[400px] md:w-[700px] lg:w-[800px] 2xl:w-[1192px]">
        {/* Add overflow-x-scroll to this wrapper div */}
        <div className="w-full overflow-x-scroll scrollbar-hide">
          <ul className="flex space-x-8 text-white text-base">
            {items.map((item) => (
              <li
                key={item.id}
                className="relative text-base uppercase font-semibold text-nowrap"
              >
                {item.submenu ? (
                  <>
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      className="hover:cursor-pointer text-base font-semibold uppercase flex items-center"
                    >
                      <p className="">{item.name}</p>
                      <Icon
                        name={`${
                          openSubmenu === item.id
                            ? "keyboard_arrow_up"
                            : "keyboard_arrow_down"
                        }`}
                        className="text-gray-300"
                        size={20}
                      />
                    </div>
                    {openSubmenu === item.id && (
                      <ul
                        ref={submenuRef}
                        className="fixed bg-white mt-3 p-2 space-y-2 shadow-xl border border-gray-300 rounded-lg z-50"
                        style={{
                          left: `${
                            document
                              .querySelector(`[data-item-id="${item.id}"]`)
                              ?.getBoundingClientRect().left
                          }px`,
                          top: `${
                            document
                              .querySelector(`[data-item-id="${item.id}"]`)
                              ?.getBoundingClientRect().bottom
                          }px`,
                        }}
                      >
                        {item.submenu.map((subItem) => (
                          <Link href={subItem?.route} key={subItem?.id}>
                            <li className="min-w-58 text-gray-600 mb-3 cursor-pointer hover:bg-gray-200 px-4 py-1 !font-normal rounded-lg">
                              <p className="w-full text-sm">{subItem.name}</p>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.route}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
