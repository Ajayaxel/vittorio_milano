import React from "react";

/* =========================
   CONTENT (all variables)
   ========================= */
const copy = {
    title: "Swatch Gallery",
    subtitle:
        "6,000+ luxe fabrics. Expert guidance. A custom suit as unique as your fingerprint.",
    cta: "EXPLORE",
};

const mainImage = "/PHOTO-2025-08-17-18-20-32.jpg"; // Main image

// Logos split into two columns
const brandLogosCol1 = [
    "https://cdn.imgbin.com/16/12/4/imgbin-holland-sherry-laxmi-tailors-pecenongan-textile-clothing-others-417sUkiP0DzJ7L5JDaYWUEqx3.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dormeuil_Logo_New_Full.png",
    "https://www.kaufmannstatic.com/sc_images/images/axel/brandbilleder/aw23/piacenza-cashmere/axel-brandspot-piacenza-cashmere-logo.jpg?w=840",
    "https://cdn-boohd.nitrocdn.com/JfFsLYydnOqFAhPbcBbZwKmGecYbtlqV/assets/images/optimized/rev-1077b5f/advast-suisse.com/wp-content/uploads/2019/05/logo_references_axetris-300x148.jpg",
    "https://cdn-boohd.nitrocdn.com/JfFsLYydnOqFAhPbcBbZwKmGecYbtlqV/assets/images/optimized/rev-1077b5f/advast-suisse.com/wp-content/uploads/2019/05/logo_references_credit_suisse-300x148.jpg",
];

const brandLogosCol2 = [
    "https://cdn.imgbin.com/16/12/4/imgbin-holland-sherry-laxmi-tailors-pecenongan-textile-clothing-others-417sUkiP0DzJ7L5JDaYWUEqx3.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dormeuil_Logo_New_Full.png",
    "https://www.kaufmannstatic.com/sc_images/images/axel/brandbilleder/aw23/piacenza-cashmere/axel-brandspot-piacenza-cashmere-logo.jpg?w=840",
    "https://cdn-boohd.nitrocdn.com/JfFsLYydnOqFAhPbcBbZwKmGecYbtlqV/assets/images/optimized/rev-1077b5f/advast-suisse.com/wp-content/uploads/2019/05/logo_references_axetris-300x148.jpg",
    "https://cdn-boohd.nitrocdn.com/JfFsLYydnOqFAhPbcBbZwKmGecYbtlqV/assets/images/optimized/rev-1077b5f/advast-suisse.com/wp-content/uploads/2019/05/logo_references_credit_suisse-300x148.jpg",
];

const aristonTextTop = "ARISTΩN";
const aristonTextBottom = "NAPOLI";

const caccioppoliLogo = "/PHOTO-2025-08-17-18-20-37.jpg"; // Caccioppoli logo

/* =========================
   COMPONENT
   ========================= */
export default function SwatchGalleryExact() {
    return (
        <section className="relative w-full">
            <div className="mx-auto w-full flex flex-col-reverse xl:flex-row min-h-screen">
                {/* LEFT SIDE */}
                <div className="w-full xl:w-1/2 flex flex-col items-center px-6 md:px-12 py-10">
                    {/* Heading block */}
                    <div className="max-w-[520px] w-full text-center mt-10">
                        <h2 className="text-[clamp(24px,4vw,40px)] font-semibold leading-tight">
                            {copy.title}
                        </h2>
                        <p className="mt-3 text-[clamp(16px,2vw,24px)] leading-[1.6]">
                            {copy.subtitle}
                        </p>
                    </div>

                    {/* CTA */}
                    <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3  text-black hover:text-white rounded-md text-sm sm:text-base md:text-lg font-medium bg-transparent hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
                        {copy.cta}
                </button>

                    {/* Logos + ARISTON / NAPOLI + Caccioppoli */}
                    <div className="mt-8 flex flex-wrap w-full justify-center md:justify-between items-center">

                        {/* Logos */}
                        {/* Logos */}
                        <div className="flex flex-col items-center w-1/2 md:flex-1 md:max-w-[260px] lg:max-w-[280px] h-96">
                            <div className="bg-transparent  p-4 md:p-5 w-full h-full overflow-hidden relative">
                                <div className="grid grid-cols-2 gap-x-3 md:gap-x-4 lg:gap-x-6 w-full h-full relative">
                                    {/* Column 1: Scroll Down */}
                                    <div className="flex flex-col items-center animate-scrollDown absolute top-0">
                                        {brandLogosCol1.map((logo, idx) => (
                                            <img
                                                key={`col1-${idx}`}
                                                src={logo}
                                                alt="Brand"
                                                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain my-1 md:my-2 lg:my-3"
                                            />
                                        ))}
                                        {/* duplicate for seamless scroll */}
                                        {brandLogosCol1.map((logo, idx) => (
                                            <img
                                                key={`col1-dup-${idx}`}
                                                src={logo}
                                                alt="Brand"
                                                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain my-1 md:my-2 lg:my-3"
                                            />
                                        ))}
                                    </div>

                                    {/* Column 2: Scroll Up */}
                                    <div className="flex flex-col items-center animate-scrollUp absolute top-0 right-0">
                                        {brandLogosCol2.map((logo, idx) => (
                                            <img
                                                key={`col2-${idx}`}
                                                src={logo}
                                                alt="Brand"
                                                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain my-1 md:my-2 lg:my-3"
                                            />
                                        ))}
                                        {/* duplicate for seamless scroll */}
                                        {brandLogosCol2.map((logo, idx) => (
                                            <img
                                                key={`col2-dup-${idx}`}
                                                src={logo}
                                                alt="Brand"
                                                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain my-1 md:my-2 lg:my-3"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                     
                        <div className="flex flex-col justify-between- items-center w-1/2 md:flex-1 md:max-w-[260px] lg:max-w-[280px] h-auto md:h-[340px] lg:h-[380px] mt-3 md:mt-0">

                            <div className="flex flex-col items-center">
                                <div className="text-[clamp(24px,4vw,48px)] md:text-[clamp(42px,5.5vw,76px)] lg:text-[clamp(48px,6vw,76px)] font-semibold tracking-[0.06em] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] bg-gradient-to-b from-white via-white/90 to-white/70 text-transparent bg-clip-text">
                                    {aristonTextTop}
                                </div>
                                <div className="text-[clamp(14px,2vw,20px)] md:text-[clamp(18px,2.8vw,30px)] lg:text-[clamp(20px,3vw,30px)] tracking-[0.45em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] bg-gradient-to-b from-white via-white/85 to-white/60 text-transparent bg-clip-text">
                                    {aristonTextBottom}
                                </div>
                            </div>

                            <div className="mt-2 md:mt-4 lg:mt-0">
                                <img
                                    src={caccioppoliLogo}
                                    alt="Caccioppoli"
                                    className="h-[32px] md:h-[48px] lg:h-[72px] object-contain"
                                />
                            </div>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE (MAIN IMAGE) */}
                <div className="flex-1 flex items-center justify-center px-4 md:px-0 mt-6 xl:mt-0">
                    <img
                        src={mainImage}
                        alt="Main"
                        className="w-full max-w-[650px] h-auto object-contain"
                    />
                </div>
            </div>
        </section>

    );
}