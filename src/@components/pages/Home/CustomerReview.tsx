import Carousal from "@/@components/core/Carousal/Carousal";
import reviewImage from "@/@assets/Rivew-3.png";
import reviewImageOne from "@/@assets/Rivew-4.png";

import React from "react";
interface Review {
  id: number;
  name: string;
  comment: string;
  img: any;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    comment: "Great service and excellent support! Hig",
    img: reviewImage,
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "The product is amazing and worth eve.",
    img: reviewImageOne,
  },
  {
    id: 3,
    name: "Alice Johnson",
    comment: "Very satisfied with the quality and delivery.",
    img: reviewImage,
  },
  {
    id: 4,
    name: "Bob Brown",
    comment: "Fantastic experience from start to finish.",
    img: reviewImageOne,
  },
  {
    id: 5,
    name: "Charlie Davis",
    comment: "Excellent customer service and fast delivery.",
    img: reviewImage,
  },
  {
    id: 6,
    name: "John Doe",
    comment: "Great service and excellent support! Hig",
    img: reviewImage,
  },
  {
    id: 7,
    name: "Jane Smith",
    comment: "The product is amazing and worth eve.",
    img: reviewImageOne,
  },
  {
    id: 8,
    name: "Alice Johnson",
    comment: "Very satisfied with the quality and delivery.",
    img: reviewImage,
  },
  {
    id: 9,
    name: "Bob Brown",
    comment: "Fantastic experience from start to finish.",
    img: reviewImageOne,
  },
  {
    id: 10,
    name: "Charlie Davis",
    comment: "Excellent customer service and fast delivery.",
    img: reviewImage,
  },
  {
    id: 11,
    name: "John Doe",
    comment: "Great service and excellent support! Hig",
    img: reviewImage,
  },
  {
    id: 12,
    name: "Jane Smith",
    comment: "The product is amazing and worth eve.",
    img: reviewImageOne,
  },
  {
    id: 13,
    name: "Alice Johnson",
    comment: "Very satisfied with the quality and delivery.",
    img: reviewImage,
  },
  {
    id: 14,
    name: "Bob Brown",
    comment: "Fantastic experience from start to finish.",
    img: reviewImageOne,
  },
  {
    id: 15,
    name: "Charlie Davis",
    comment: "Excellent customer service and fast delivery.",
    img: reviewImage,
  },
];

const CustomerReview: React.FC = () => {
  return (
    <div className="App  max-w-[1192px] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-center bg-black text-white py-2">
        Customer Reviews
      </h1>
      <div className="my-4">
        <Carousal reviews={reviews} />
      </div>
    </div>
  );
};

export default CustomerReview;
