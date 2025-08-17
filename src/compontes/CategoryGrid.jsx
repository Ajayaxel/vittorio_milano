import React from "react";

const services = [
  {
    title: "Express Service",
    desc: "Take advantage of our Express Service. Need a bespoke suit on a tight timeline? Our express service means you're impeccably dressed, no matter the occasion.",
    img: "https://vittoriomilanofd.com/wp-content/uploads/2025/08/paolamejia_Editorial-style_fashion_photo_of_two_stylish_men_one_6b36ceb3-405f-41dd-a34b-5784b28ac0e5.png",
    action: "BOOK NOW",
  },
  {
    title: "Suit Alteration",
    desc: "Breathe new life into your wardrobe. Our master tailors refine and revitalise your existing garments, guaranteeing a flawless fit and renewed sense of style.",
    img: "https://vittoriomilanofd.com/wp-content/uploads/2025/08/u7469667381_A_full-body_photo_of_a_slim_European-looking_male_h_95132b69-1832-4c2c-b4fc-b84b1090afb4.png",
    action: "BOOK SUIT ALTERATION",
  },
  {
    title: "Trunk Shows",
    desc: "Drop by one of our Trunk Shows. Our expert tailors traverse the globe, bringing the Style Savvy experience to you.",
    img: "https://vittoriomilanofd.com/wp-content/uploads/2025/08/wspd._A_European_model_is_dressed_in_a_tailored_classic_plaid_f_6e1213fa-f6b5-42d5-bfa3-c875a16a4e2a.png",
    action: "SEE SCHEDULE",
  },
];

const PremiumServices = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-[#f8f8f6]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((item, i) => (
          <div
            key={i}
            className="group relative bg-white  shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {item.desc}
              </p>
              <button className="relative inline-block px-6 py-2  text-gray-900 font-medium tracking-wide uppercase text-sm transition-all duration-500 hover:text-white bg-transparent hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
                {item.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumServices;

