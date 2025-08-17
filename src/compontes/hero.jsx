import React from "react";

export default function HeroVideoSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/VIDEO-2025-08-17-12-30-30.mp4" // replace with your video path
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark overlay for readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

            {/* Text + Button at bottom-center */}
            <div className="absolute bottom-6 md:bottom-10 w-full flex flex-col items-center text-center px-4">
                <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide leading-snug">
                    Bespoke. Sartorial. Timeless
                </h1>
                <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3  text-white rounded-md text-sm sm:text-base md:text-lg font-medium bg-transparent hover:bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] transition">
                    Discover now
                </button>

            </div>
        </div>
    );
}

