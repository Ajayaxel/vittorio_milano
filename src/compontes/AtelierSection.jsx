import React from "react";

const AtelierSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-10xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Why Vittorio<span className="text-[rgb(96,12,3)]"> Milano</span> ?
          </h2>

          <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <li>✔ Uncompromising craftsmanship <br /> <span className="text-gray-500 text-base">Meticulous hand-tailoring. Finest fabrics. Sartorial artistry.</span></li>
            <li>✔ A white-glove service <br /> <span className="text-gray-500 text-base">A bespoke experience tailored to you and delivered to your doorstep.</span></li>
            <li>✔ A legacy of confidence <br /> <span className="text-gray-500 text-base">More than just clothes. An investment in your personal brand.</span></li>
            <li>✔ Timeless elegance <br /> <span className="text-gray-500 text-base">Designs that transcend fleeting trends. Your wardrobe remains a source of sophistication for years to come.</span></li>
            <li>✔ A sartorial community <br /> <span className="text-gray-500 text-base">A network of discerning individuals who appreciate the transformative power of bespoke tailoring.</span></li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1269796844/photo/fashion-design-college-classroom-workshop-with-sewing-machine.jpg?s=612x612&w=0&k=20&c=QhBcafzKuICwCrhLfG_1iGuz5Hpsdoxh8_N43lkRHxM=" // Replace with your atelier photo
            alt="Atelier"
            className=" shadow-2xl object-cover w-full h-full"
          />
          <p className="text-center mt-4 text-gray-600 text-sm">atelier photo</p>
        </div>
      </div>
    </section>
  );
};

export default AtelierSection;
