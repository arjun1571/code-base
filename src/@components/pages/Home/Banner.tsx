import HeroSlider from "@/@components/core/Slider/Slider";
import React from "react";
import bannerOne from "@/@assets/banner/Olves Man Watch web banner.png";
import bannerTwo from "@/@assets/banner/Olevs Woman Web Banner 3 Watch.png";
import bannerThree from "@/@assets/banner/Olevs Woman Web Banner copul fainal.png";
import subBannerOne from "@/@assets/Couple-Watches.jpg";
import subBannerTwo from "@/@assets/Naviforce-men-Watches.jpg";
import subBannerThree from "@/@assets/Smart-Watches-jpg-webp.webp";
import subBannerFour from "@/@assets/Women-Watches.jpg";
import Image from "next/image";

const Page: React.FC = () => {
  const slides = [
    {
      image: bannerOne,
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      image: bannerTwo,
      title: "Slide 2",
      description: "This is the second slide.",
    },
    {
      image: bannerThree,
      title: "Slide 3",
      description: "This is the third slide.",
    },
  ];
  const subSlides = [
    {
      image: subBannerOne,
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      image: subBannerTwo,
      title: "Slide 2",
      description: "This is the second slide.",
    },
    {
      image: subBannerThree,
      title: "Slide 3",
      description: "This is the third slide.",
    },
    {
      image: subBannerFour,
      title: "Slide 4",
      description: "This is the third slide.",
    },
  ];
  return (
    <div className="max-w-[1192px] mx-auto py-5">
      <HeroSlider slides={slides} />
      <div className="grid xs:grid-cols- sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-4">
        {subSlides.map((items, index) => (
          <div key={index}>
            <Image src={items.image} alt={""} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
