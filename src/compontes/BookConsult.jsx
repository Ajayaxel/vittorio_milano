import React from "react";

export default function MovingTailor() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-10xl mx-auto px-6 py-12 gap-8">
            {/* Left - Image */}




            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="https://www.huntsmansavilerow.com/cdn/shop/files/Shot-6_08.jpg?v=1751551157&width=900"
                    alt="Tailor Consultation"
                    className="
      hover:scale-110 transition duration-300 ease-in-out
   shadow-sm 
      object-cover 
      w-full h-auto 
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-1xl
    "
                />
            </div>
            {/* Right - Content */}
            <div className="w-full md:w-1/2 text-center flex flex-col justify-center items-center md:text-center">
                <h2 className="text-xl font-semibold justify-center items-center mb-4">The Moving Tailor</h2>
                <p className="text-gray-700 flex  items-center leading-relaxed mb-6">
                    Bespoke, on your terms. Our master tailors bring the atelier to you,
                    offering personalised<br />consultations and a curated selection of luxe
                    fabrics, all in the comfort of your chosen space.
                </p>
                <button className="px-6 py-3 text-black font-medium bg-transparent hover:text-white hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition rounded-md">
                    BOOK A CONSULTATION
                </button>
            </div>
        </section>
    );
}