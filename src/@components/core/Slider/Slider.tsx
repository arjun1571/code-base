"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
// import Icon from "../Icon/Icon";

const HeroSlider = ({ slides }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index: any) => {
    if (index < 0) index = slides.length - 1;
    else if (index >= slides.length) index = 0;

    setCurrentSlide(index);
    setCurrentTranslate(-index * 100);
    setPrevTranslate(-index * 100);
  };

  const handleTouchStart = (e: any) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e: any) => {
    if (!isDragging || !sliderRef.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setCurrentTranslate(
      prevTranslate + (diff / sliderRef.current.offsetWidth) * 100
    );
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -10) goToSlide(currentSlide + 1);
    else if (movedBy > 10) goToSlide(currentSlide - 1);
    else setCurrentTranslate(prevTranslate);
  };

  function goToIndex(index: React.Key | null | undefined): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={"sliderContainer !h-auto md:!h-[200px] xl:!h-[400px]"}>
      <div
        className={"slides"}
        ref={sliderRef}
        style={{ transform: `translateX(${currentTranslate}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={"slide"}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-red-300 w-full rounded-lg">
              <Image
                src={slide?.image}
                alt={""}
                height={1000}
                width={1000}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        className={"prevButton"}
        onClick={() => goToSlide(currentSlide - 1)}
      >
        <Icon name={"arrow_back_ios"} />
      </button>
      <button
        className={"nextButton"}
        onClick={() => goToSlide(currentSlide + 1)}
      >
        <Icon name={"arrow_forward_ios"} />
      </button> */}

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_: any, index: React.Key | null | undefined) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full  ${
              index === currentSlide ? "bg-red-600" : "bg-white"
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
