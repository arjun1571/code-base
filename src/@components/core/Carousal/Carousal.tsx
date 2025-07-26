"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  comment: string;
  img: any;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

const Carousal: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      {/* Carousel Inner */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / reviews.length + 8)
          }%)`,
          width: `${reviews.length * (100 / reviews.length + 8)}%`,
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-[400px] flex-shrink-0 py-4 px-2 xl:px-3"
          >
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 italic mb-2">{review.comment}</p>
              <Image src={review?.img} className="rounded-lg" alt={""} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 w-10 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 w-10 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={goToNext}
      >
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full  ${
              index === currentIndex ? "bg-red-600" : "bg-red-200"
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousal;
