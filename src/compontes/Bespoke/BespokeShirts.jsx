// BespokeShirts.js
import React, { useState, useEffect } from 'react';
import { ChevronRight, Scissors, Ruler, Shirt, Eye } from 'lucide-react';
import Footer from '../Fotter';

const BespokeShirts = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fittingSteps = [
    {
      number: "01",
      title: "Baste fitting",
      description: "Shaping your bespoke dress shirt, setting the structure and adjusting for comfort and precision. This ensures every inch aligns with your form, establishing the foundation before final touches.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop"
    },
    {
      number: "02",
      title: "Forward fitting",
      description: "Fine-tuning details like sleeve length and collar height, assuring the shirt's movement and drape are flawless. This is where comfort and fit are perfected.",
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=500&fit=crop"
    },
    {
      number: "03",
      title: "Final fitting",
      description: "The finishing touches: guaranteeing perfect fit and refining your bespoke shirt for optimum comfort and style.",
      image: "https://img.freepik.com/premium-psd/red-suit-with-tie-that-says-name-company_1111860-11499.jpg"
    }
  ];

  const fabricImages = [
    "https://indiantextilejournal.com/wp-content/uploads/Untitled-7-31.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwdDUWzqUpIYN1tkDL46S0cTDLIgjCGHQgc5GdRl2JMqwvKMA8Xus70_jOD0d5FUFZM8&usqp=CAU",
    "https://cdn.storehippo.com/s/5a6ef16301bd210c588e3577/ms.files/uploads/buying%20fabric.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKFMsOWOUFah000hIQdBPLm58YdjOXee5mg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs42dhC_CvifYl59Sff0HhgJgHOeJTmQ8qICQhIhWmJarRJ2zkL-hWurjbhLXS2cNukAc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbUwDz5NLax97MeiBvhS8A9kFf5EutWaELhxoho_KkoTJRFC8hlBQkFjtOnsNHduBk54&usqp=CAU"
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: 'url(//www.huntsmansavilerow.com/cdn/shop/files/Screenshot_2023-05-04_at_11.43.31.png?v=1683197018&width=1500)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">


            <h1 className="text-5xl md:text-7xl pt-6 font-light text-white mb-6 tracking-tight">
              Bespoke Shirts for Men
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Impeccable fit, down to the last stitch.
            </p>

            {/* <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              DESIGN YOURS
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
               <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3  text-white rounded-md text-sm sm:text-base md:text-lg font-medium bg-transparent hover:text-black hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
               DESIGN YOURS
                </button>
           
          </div>
        </div>
      </div>


      {/* Fitting Process Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              The Perfect Fitting Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {fittingSteps.map((step, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setCurrentStep(index)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/5] shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-semibold mb-2 capitalize">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="px-2">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full h-screen px-4 md:px-12 lg:px-24 xl:px-48 py-12 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            What is a bespoke shirt?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Bespoke dress shirts are made from scratch to your precise measurements, starting
            with a one-of-a-kind pattern that maps the unique topography of your torso.
            Each element is yours to decide: from fabric weight and weave to collar style,
            cuff cut and placket detail. Painstakingly tailored by hand, every stitch is
            calibrated for a flawless fit and clean finish. Unlike mass-produced or
            made-to-measure shirts, a bespoke dress shirt is singular in fit and style,
            engineered exclusively for you.
          </p>
          <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3  text-black rounded-md text-sm sm:text-base md:text-lg font-medium bg-transparent hover:text-black hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
                    Discover now
                </button>
        </div>
      </div>


      {/* Pattern Drafting & Fabric Selection */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Pattern Drafting */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <Ruler className="w-8 h-8 text-gray-900 mr-4" />
                <h3 className="text-3xl font-light text-gray-900">Pattern drafting</h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Your bespoke shirt begins with a pattern designed solely for you. Every measurement is taken to capture your exact build, from shoulder slope to cuff length, guaranteeing a frictionless fit that aligns perfectly with your natural shape. Choose your desired collar and cuff styles, setting the foundation for a suit shirt that's unmistakably yours.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Precision Measurements</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Chest</span>
                    <span className="font-mono">42"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shoulder</span>
                    <span className="font-mono">18.5"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sleeve</span>
                    <span className="font-mono">25"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Collar</span>
                    <span className="font-mono">16"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKsItIRN9IuCAV0XGryc9NWVeIgKFmGlP0A&s"
                  alt="Pattern drafting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fabric Selection */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Fabric Image */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {fabricImages.map((image, index) => (
                  <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={image}
                      alt={`Fabric ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Fabric Selection Content */}
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-gray-900 mr-4" />
                <h3 className="text-3xl font-light text-gray-900">Fabric selection</h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Your bespoke shirt's character begins with the fabric. Choose from lightweight poplins, soft Egyptian cottons, breathable linens or opulent silk blends. Each fabric is selected for its feel and durability, giving you control over how your shirt drapes, breathes and wears. The choice is entirely yours, down to the last thread.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-light text-gray-900">150+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Premium Fabrics</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-light text-gray-900">25</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Collar Styles</div>
                </div>
              </div>

              {/* <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
             
              </button> */}
                   <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3  text-black rounded-md text-sm sm:text-base md:text-lg font-medium bg-transparent hover:text-black hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
                   EXPLORE FABRICS
                </button>
            </div>
          </div>
        </div>
      </div>

  <Footer />
    </div>
  );
};

export default BespokeShirts;

