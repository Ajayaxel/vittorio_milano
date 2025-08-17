"use client";
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Nayan Sharma",
    location: "Dubai, UAE",
    text: "I needed a tuxedo for my wedding and was fortunate to meet with Sukrit at Vittorio Milano. The fit and quality were exceptional.",
  },
  {
    id: 2,
    name: "James Wilson",
    location: "London, UK",
    text: "The craftsmanship is top-tier. Every detail was perfect, and the suit made me feel confident and stylish.",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    location: "New Delhi, India",
    text: "Outstanding service! They truly understand bespoke tailoring. Easily the best experience I’ve had shopping for formal wear.",
  },
  {
    id: 4,
    name: "David Lee",
    location: "Singapore",
    text: "The entire process was seamless. The suit feels luxurious and fits like a second skin. Highly recommended!",
  },
  {
    id: 5,
    name: "Marco Rossi",
    location: "Milan, Italy",
    text: "An impeccable experience. The attention to detail and fabric quality reflect true Italian elegance.",
  },
];

const ReviewSection = () => {
  return (
    <div className=" py-12 overflow-hidden relative">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Hear from the impeccably-dressed
      </h2>

      {/* Animation container */}
      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll gap-12">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="min-w-[300px]  max-w-[300px] p-6 rounded-lg  shadow-lg text-center hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="flex justify-center mb-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-black text-lg">
                    {star}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-gray-900">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;






